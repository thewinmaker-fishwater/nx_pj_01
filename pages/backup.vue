<!-- UserProfile.vue -->
<template>
    <div>
        <!-- test -->
        <modal-layout>
            <template v-slot:header>
                <layoutHeader/>
            </template>
            <template v-slot:default>
                <layoutBody/>
            </template>
            <template v-slot:footer>
                <layoutFooter/>
            </template>
        </modal-layout>
        

        <!-- <header class="text-gray-400 bg-gray-900 body-font">
            <title>Nuxt Test Page</title>
            <div class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row">
                <a class="flex items-center mb-4 font-medium text-white title-font md:mb-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <nav class="flex flex-wrap items-center justify-center text-base md:ml-auto md:mr-auto">
                <a class="mr-5 hover:text-white">First Link</a>
                <a class="mr-5 hover:text-white">Second Link</a>
                <a class="mr-5 hover:text-white">Third Link</a>
                <a class="mr-5 hover:text-white">Fourth Link</a>
                </nav>
                <button class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
                </button>
            </div>
        </header> -->



        <!-- <compHeader/>
        <compLeft/>
        <p>user id : {{ user.userId }}</p>
        <p>id : {{ user.id }}</p>
        <p>title : {{ user.title }}</p>
        <p>body : {{ user.body }}</p>
        <p>full data : <br/>{{ user }}</p>
        <fetchData/>
        <scopeTest/> -->


        <!-- <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Data Result</h1>
                    <p class="text-base leading-relaxed">{{ user }}</p>
                    <a class="inline-flex items-center mt-4 text-indigo-400">Sample Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Data Result</h1>
                    <p class="text-base leading-relaxed">{{ user }}</p>
                    <a class="inline-flex items-center mt-4 text-indigo-400">Sample Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </section> -->



        <!-- <footer class="text-gray-400 bg-gray-900 body-font">
            <div class="container flex flex-col items-center px-5 py-8 mx-auto sm:flex-row">
                <a class="flex items-center justify-center font-medium text-white title-font md:justify-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 p-2 text-white bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
                <span class="ml-3 text-xl">Tailblocks</span>
                </a>
                <p class="mt-4 text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0">© 2020 Tailblocks —
                <a href="https://twitter.com/knyttneve" class="ml-1 text-gray-500" target="_blank" rel="noopener noreferrer">@knyttneve</a>
                </p>
                <span class="inline-flex justify-center mt-4 sm:ml-auto sm:mt-0 sm:justify-start">
                <a class="text-gray-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-400">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-400">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                </a>
                <a class="ml-3 text-gray-400">
                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                    </svg>
                </a>
                </span>
            </div>
        </footer> -->

    </div>
</template>

<script>
    import axios from 'axios';
    import asyncData from '../components/async_data.vue';
    import fetchData from '@/components/fetch_data.vue';
    import scopeTest from '@/components/scope_test.vue';


    // import 'animate.css'

    import ModalLayout from '@/layouts/desktop/desktop.vue';
    import layoutHeader from '@/layouts/desktop/desktop-heaader.vue';
    import layoutBody from '@/layouts/desktop/desktop-body.vue';
    import layoutFooter from '@/layouts/desktop/desktop-footer.vue';


    const runtimeConfig = useRuntimeConfig();
    const loginKey = runtimeConfig.public.loginKey;
    // console.log(loginKey)


    export default {
        components: { 
            asyncData, 
            fetchData,
            'modal-layout':ModalLayout,
            layoutHeader,
            layoutBody,
            layoutFooter
        },
        data() {
            return {
                user: {},
            }
        },
        methods: {
            async fetchUser() {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
                this.user = response.data;
            }
        },
        created() {
            this.fetchUser();
        },
        
    }

</script>


<style>
/* @import url("animate.css"); */
</style>