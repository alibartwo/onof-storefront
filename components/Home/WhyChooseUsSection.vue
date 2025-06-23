<template>
  <section class="relative">
    <!-- Background Image -->
    <img
      src="/images/why-choose-us.png"
      alt="Onbaby neden"
      class="w-full h-[700px] object-cover"
    />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50" />

    <!-- Content -->
    <div class="absolute inset-0">
      <!-- Top Left Heading -->
      <div class="absolute top-0 left-0 w-full px-4 pt-24 text-white">
        <div class="max-w-screen-xl mx-auto">
          <!-- Upper Label -->
          <p class="text-sm uppercase tracking-widest text-white/80">
            NEDEN ONBABY?
          </p>

          <!-- Main Heading -->
          <h2 class="text-3xl md:text-5xl font-bold leading-tight mt-2">
            Aktivite örtüsünden fazlası: <br />
            Hijyenik, pratik, zahmetsiz.
          </h2>
        </div>
      </div>

      <!-- Bottom Right Subtext and Buttons -->
      <div class="absolute bottom-0 right-0 w-full px-4 pb-16">
        <div class="max-w-screen-xl mx-auto flex justify-end">
          <div class="text-right text-white">
            <p class="text-sm text-white/80 mb-4 max-w-md">
              Su geçirmez, kaymaz yapısıyla Onbaby örtüleri hem oyun hem yemek aktiviteleri için ideal!
            </p>

            <div class="flex flex-wrap gap-4 justify-end">
              <button class="bg-primary text-white px-6 py-3 rounded-lg flex items-center gap-2">
                Siz de Deneyin
                <Icon name="uil:arrow-right" class="w-5 h-5 text-white" />
              </button>

              <button class="bg-transparent text-white px-6 py-3 rounded-lg border border-white">
                Hakkımızda
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>