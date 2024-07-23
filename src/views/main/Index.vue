<template>
    <div class="dark:bg-color-dark-blue">
      <main class="mt-0 lg:mx-[5%]">
            <section>
                <div class="md:flex-row items-center md:flex">
                    <div class="md:w-1/2 flex w-full pt-[30px]">
                        <img class="h-[400px] rounded-lg m-auto" src="@/assets/images/photo_2024-06-04_15-30-51.jpg" alt="">
                    </div>
                    <div class="md:w-1/2 sm:w-full w-full pt-[50px] items-center text-center">
                        <h1 class="text-center text-[80px] text-[#18405A] dark:text-white">{{ isEnglish ? 'ANDRII LIAKH' : 'АНДРІЙ ЛЯХ' }}</h1>
                        <h3 class="text-center text-[30px] text-[rgb(24,64,90)] dark:text-white">JUNIOR FULLSTACK DEVELOPER</h3>
                        <div class="mt-10 flex flex-row items-center text-center justify-center">
                            <a href="mailto:andrejlah8@gmail.com"><img v-if="isDarkMode" class="h-10 m-1.5" src="@/assets/images/icon/email-dark.png" alt="">
                            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/email.png" alt=""></a>
                            <a href="https://github.com/Andrii206"><img v-if="isDarkMode"  class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-github-dark.png" alt="">
                            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-github.png" alt=""></a>
                            <a href="https://t.me/andrejlah8"><img v-if="isDarkMode" class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-telegram-dark.png" alt="">    
                            <img v-else class="h-10 m-1.5" src="@/assets/images/icon/free-icon-font-telegram.png" alt=""></a>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div>
                    <span class="text-[40px] text-[#18405A] dark:text-white">{{isEnglish ? 'Services I offer:' : 'Послуги, які я пропоную:'}}</span>
                    <p class="lg:w-1/2 mt-5 text-lg text-[#18405A] dark:text-white">{{isEnglish ? 'I offer the following services: design development and its conversion to a website, creation of copies of existing websites with changes. All my services are listed below. Also check out my examples of work on GitHub and portfolio!' : 'Пропоную наступні послуги: розробка дизайну та його перетворення на сайт, створення копій існуючих веб-сайтів із змінами. Всі мої послуги наведені нижче. Також ознайомтесь з моїми прикладами робіт на GitHub та портфоліо!'}}</p>
                </div>
            </section>
            <section class="md:flex md:flex-wrap dark:bg-color-dark-blue py-32">
    <div class="md:w-1/2 lg:w-1/3 max-w-[649px] w-full my-7">
        <div class="h-full bg-color-blue py-5 mx-5 dark:bg-white rounded-lg text-center shadow-2xl flex flex-col justify-center">
            <img src="@/assets/images/pencil-icon-transparent-free-png-removebg-preview.png" class="mx-auto">
            <span class="text-[#18405A] text-center text-[20px] my-3">{{ isEnglish ? 'Web development' : 'Веб-розробка' }} <br></span>
            <span class="text-[#18405A] text-center text-[15px] leading-7 p-6">
                {{ isEnglish ? 'Website creation is fast and cheap enough!' : 'Створення сайтів швидко і достатньо дешево!' }}<br>
                <span class="text-[#0D9497]">{{ isEnglish ? 'Technologies I use:' : 'Технології які я використовую:' }}</span><br>
                PHP, Laravel, Wordpress<br>
                HTML, CSS, JS, Jquery<br>
                Inertia Js, Vue 3<br>
                MySQL, Redis, Docker<br>
            </span>
        </div>
    </div>
    <div class="md:w-1/2 lg:w-1/3 max-w-[649px] w-full my-7">
        <div class="h-full py-5 mx-5 bg-color-blue dark:bg-white rounded-lg items-center text-center shadow-2xl flex flex-col justify-center">
            <img class="mx-auto w-full" src="@/assets/images/landscape-photo-3d-icon-illustration-png-removebg-preview.png">
            <span class="text-[#18405A] text-center text-[20px] my-3">UI/UX <br></span>
            <span class="text-[#18405A] text-center text-[15px] leading-7 p-10">
                {{ isEnglish ? 'Creating interesting designs!' : 'Створення цікавих дизайнів!' }}<br>
                <span class="text-[#0D9497]">{{ isEnglish ? 'Technologies I use:' : 'Технології які я використовую:' }}</span><br>
                Figma
            </span>
        </div>
    </div>
    <div class="md:w-full md:mx-auto lg:w-1/3 max-w-[649px] w-full my-7">
        <div class="h-full py-5 mx-5 bg-color-blue dark:bg-white rounded-lg items-center text-center shadow-2xl flex flex-col justify-center">
<<<<<<< HEAD
            <img src="@/assets/images/hashtag_icon-icons-removebg-preview.png" class="mx-auto">
=======
            <img src="@assets/images/_hashtag_icon-icons-removebg-preview.png" class="mx-auto">
>>>>>>> 7086347859e50407ecfdca3bd5966892815560c9
            <span class="text-[#18405A] text-center text-[20px] my-3">{{ isEnglish ? 'Other' : 'Інше' }}<br></span>
            <span class="text-[#18405A] text-center text-[15px] leading-7 p-10">
                {{ isEnglish ? 'I can help with various things' : 'Я можу допомогти з різними речами' }}<br>
                <span class="text-[#0D9497]">{{ isEnglish ? 'Something like...' : 'Щось наприклад ...' }}</span><br>
                {{ isEnglish ? 'Copywriting' : 'Копірайтинг' }}<br>
                {{ isEnglish ? 'Domain and hosting' : 'Домен і хостинг' }}<br>
                {{ isEnglish ? 'Editing of an already existing site' : 'Редакція вже існуючого сайту' }}
            </span>
        </div>
    </div>
</section>

      </main>
    </div>
</template>
  
<script>
export default {
  name: 'Index',
  props: {
    isDarkMode: {
      type: Boolean,
      required: true
    },
    isEnglish: {
      type: Boolean,
      required: true
    }
  }
}
</script>
  
<style scoped>
.bg-color-blue{
    background-color: #C2E6FE;
}

.bg-color-dark-blue{
    background-color: #18405A;
}

</style>
