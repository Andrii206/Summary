<template>
  <div :class="[isDarkMode ? 'dark-mode' : 'light-mode']">
    <header>
      <div class="lg:px-[5%] bg-[#C2E6FE] dark:bg-white md:flex">
        <div class="lg:w-6/12 flex justify-center md:justify-start items-center py-3">
          <img class="h-70 my-auto" src="@/assets/images/logo/logo.png" alt="">
        </div>
        <div class="lg:w-6/12 w-full flex md:justify-end justify-center items-center container p-4 space-x-4">
          <label for="theme-toggle" class="inline-flex items-center cursor-pointer">
            <span class="relative">
              <input type="checkbox" id="theme-toggle" class="sr-only" v-model="isDarkMode">
              <div class="block bg-[#C2E6FE]or-dark-blue w-14 h-8 rounded-full"></div>
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ease-in-out"
                :class="{ 'transform translate-x-full': isDarkMode }">
                <svg v-if="isDarkMode" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                </svg>
              </div>
            </span>
          </label>
          <div class="relative inline-block">
            <div>
              <button @click="toggleDropdown" type="button"
                class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                {{ isEnglish ? 'English' : 'Ukrainian' }}
                <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            <div v-show="dropdownOpen"
              class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-700 ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">
                <a @click="changeLanguage(true)" href="#" class="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1">English</a>
                <a @click="changeLanguage(false)" href="#" class="text-gray-700 dark:text-gray-300 block px-4 py-2 text-sm" role="menuitem" tabindex="-1">Ukrainian</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <RouterView :isDarkMode="isDarkMode" :isEnglish="isEnglish" />

    <footer>
      <div class="bg-[#C2E6FE] dark:bg-white h-100 flex flex-row items-center text-center justify-center">
          <a href="mailto:andrejlah8@gmail.com">
            <img v-if="isDarkMode"  class="h-10 m-1.5" src="@/assets/images/icon/email.png" alt="">
            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/email-dark.png" alt="">
          </a>
          <a href="https://github.com/Andrii206">
            <img v-if="isDarkMode" class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-github.png" alt="">
            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-github-dark.png" alt="">
          </a>
          <a href="https://t.me/andrejlah8">
            <img v-if="isDarkMode" class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-telegram.png" alt="">
            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-telegram-dark.png" alt="">    
          </a>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, onMounted, watch } from 'vue';

const isDarkMode = ref(false);
const isEnglish = ref(true);
const dropdownOpen = ref(false);

onMounted(() => {
  if (localStorage.getItem('theme') === 'dark') {
    isDarkMode.value = true;
    document.documentElement.classList.add('dark');
  }

  if (localStorage.getItem('language') === 'uk') {
    isEnglish.value = false;
  }
});

watch(isDarkMode, (newVal) => {
  if (newVal) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
});

watch(isEnglish, (newVal) => {
  localStorage.setItem('language', newVal ? 'en' : 'uk');
});

const toggleDropdown = () => {
  dropdownOpen.value = !dropdownOpen.value;
};

const changeLanguage = (language) => {
  isEnglish.value = language;
  dropdownOpen.value = false;
};
</script>

<style scoped>
.dot {
  transition: transform 0.3s ease-in-out;
}
</style>
