<template>
  <nav class="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md py-4 border-b border-neutral-100">
    <div class="max-w-6xl mx-auto px-6 flex justify-between items-center">
      <div class="flex items-center gap-2">
        <div class="bg-primary p-2 rounded-xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
            />
          </svg>
        </div>
        <span class="text-xl font-bold font-display tracking-tight">Plantagoshi</span>
      </div>

      <div class="hidden md:flex gap-8 font-medium text-sm">
        <a href="#features" class="hover:text-primary transition-colors">The Pot</a>
        <a href="#app" class="hover:text-primary transition-colors">The App</a>
        <a href="#journey" class="hover:text-primary transition-colors">Our Journey</a>
        <a href="#team" class="hover:text-primary transition-colors">Team</a>
      </div>

      <a
        href="#waitlist"
        class="bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-primary-dark transition-colors"
      >
        Adopt Now 🌱
      </a>
    </div>
  </nav>
</template>
