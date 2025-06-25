// composables/useAuth.ts
import { useMedusaClient } from '~/composables/useMedusaClient'
import type { HttpTypes } from '@medusajs/types'
import { ref } from 'vue'
import getErrorMessage from '~/utils/getErrorMessage'

export function useAuth() {
  const sdk = useMedusaClient()

  const customer = ref<HttpTypes.StoreCustomer | null>(null)
  const error = ref<string | null>(null)
  const loading = ref(false)

  const register = async ({
    email,
    password,
    first_name,
    last_name,
  }: {
    email: string
    password: string
    first_name?: string
    last_name?: string
  }) => {
    error.value = null
    loading.value = true

    try {
      // 1. register
      await sdk.auth.register('customer', 'emailpass', { email, password })

      // 2. create profile
      const { customer: createdCustomer } = await sdk.store.customer.create({
        email,
        first_name,
        last_name,
      })

      customer.value = createdCustomer
    } catch (err: unknown) {
      const message = getErrorMessage(err)

      if (message.includes('already exists')) {
        // login if the user already exists
        try {
          const token = await sdk.auth.login('customer', 'emailpass', {
            email,
            password,
          })

          if (typeof token !== 'string') {
            error.value = 'Ek doğrulama gerekiyor, desteklenmiyor.'
            return
          }

          const { customer: c } = await sdk.store.customer.retrieve()
          customer.value = c
        } catch (e: unknown) {
          error.value = getErrorMessage(e, 'Giriş başarısız')
        }
      } else {
        error.value = message || 'Kayıt başarısız'
      }
    } finally {
      loading.value = false
    }
  }

  const login = async (email: string, password: string) => {
    error.value = null
    loading.value = true

    try {
      const token = await sdk.auth.login('customer', 'emailpass', { email, password })

      if (typeof token !== 'string') {
        error.value = 'Ek doğrulama gerekiyor, desteklenmiyor.'
        return
      }

      const { customer: c } = await sdk.store.customer.retrieve()
      customer.value = c
    } catch (err: unknown) {
      error.value = getErrorMessage(err, 'Giriş başarısız')
    } finally {
      loading.value = false
    }
  }

  const logout = async () => {
    try {
      await sdk.auth.logout()
      customer.value = null
    } catch (err: unknown) {
      error.value = getErrorMessage(err, 'Çıkış başarısız')
    }
  }

  const loadCustomer = async () => {
    try {
      const { customer: c } = await sdk.store.customer.retrieve()
      customer.value = c
    } catch {
      customer.value = null
    }
  }

  return {
    customer,
    error,
    loading,
    register,
    login,
    logout,
    loadCustomer,
  }
}
