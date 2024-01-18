<template>
    <div>
        <section class="text-gray-400 bg-gray-900 body-font">
            <!-- <section class="text-gray-400 bg-gray-900 body-font"> -->
                <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Data Result</h1>
                    <p class="text-base leading-relaxed">
                        <!-- {{ user }} -->
                        <p>user id : {{ user.userId }}</p>
                        <p>id : {{ user.id }}</p>
                        <p>title : {{ user.title }}</p>
                        <p>body : {{ user.body }}</p>
                        <!-- <p>full data : <br/>{{ user }}</p> -->
                    </p>
                    <a class="inline-flex items-center mt-4 text-indigo-400">Sample Button
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div>
                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Data Result2</h1>
                    <p class="text-base leading-relaxed">{{ user3 }}</p>
                    <p class="text-base leading-relaxed">{{ msg3 }}</p>
                    <NuxtLink to="/about">
                        <a class="inline-flex items-center mt-4 text-indigo-400">About
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </NuxtLink>
                </div>
                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Data Result3</h1>
                    <p class="text-base leading-relaxed">{{ user4 }}</p>
                    <p class="text-base leading-relaxed">{{ msg4 }}</p>
                    <NuxtLink to="/about">
                        <a class="inline-flex items-center mt-4 text-indigo-400">About
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </NuxtLink>
                </div>
                <!-- <div class="pb-10 mb-10 border-b border-gray-800 md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">Pitchfork Kickstarter Taxidermy</h1>
                    <p class="text-base leading-relaxed">Locavore cardigan small batch roof party blue bottle blog meggings sartorial jean shorts kickstarter migas sriracha church-key synth succulents. Actually taiyaki neutra, distillery gastropub pok pok ugh.</p>
                    <a class="inline-flex items-center mt-4 text-indigo-400">Learn More
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </a>
                </div> -->
                <!-- <div class="flex flex-col md:w-1/2 md:pl-12">
                    <h2 class="mb-3 text-sm font-semibold tracking-wider text-white title-font">CATEGORIES</h2>
                    <nav class="flex flex-wrap -mb-1 list-none">
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">First Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Second Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Third Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Fourth Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Fifth Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Sixth Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Seventh Link</a>
                        </li>
                        <li class="w-1/2 mb-1 lg:w-1/3">
                        <a class="hover:text-white">Eighth Link</a>
                        </li>
                    </nav>
                </div> -->
            </div>
        <!-- </section> -->
        </section>
    </div>
</template>

<script>
import axios from 'axios';


export default {
    data() {
        return {
            user: {},
            user2: {},
            user3: [],
            user4: [],
            msg3 : "",
            msg4 : "",
        }
    },
    methods: {
        async fetchUser() {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
            this.user = response.data;
        },
        // async fetchUser2() {
        //     const response = await axios.get('https://jsonplaceholder.typicode.com/posts/2');
        //     this.user2 = response.data;
        // }
        async fetchUser2() {
            console.log(process);
            // const NODE_ENV = process.env.NODE_ENV;
            // const API_KEY = process.env.API_KEY;
            // console.log(NODE_ENV)
            // console.log(API_KEY); 

            const runtimeConfig = useRuntimeConfig();
            const apiKey = runtimeConfig.public.apiKey;

            const headers = {
                // 'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
                // 'Accept': '*/*',
                'Content-type' : 'application/json',
                'method' : 'GET',
                // 'ApiKey':'3A3517DF05374F529E7EEFC7A60523B0'
                'ApiKey':apiKey
            };
            const params = {
                'workplaceName' : encodeURIComponent('건기원')
            };
            $fetch('/api/Infra/GetWorkplaces',{headers})
            .then(response => {
                this.user3 = response;
                console.log(response);
            })
            ;
            
        },
        async fetchUser3() {

            const runtimeConfig = useRuntimeConfig();
            const apiKey = runtimeConfig.public.apiKey;

            const headers = {
                'Content-type' : 'application/json',
                'method' : 'GET',
                // 'ApiKey':'3A3517DF05374F529E7EEFC7A60523B0'
                'ApiKey':apiKey
            };
            const params = {
                'workplaceName' : encodeURIComponent('건기원')
            };
            
            
            await axios.get('/api/Infra/GetWorkplaces',{
                headers:{
                    'ApiKey':apiKey,
                    'Content-type' : 'application/json; charset=utf-8'
                },
                params : params,
            })
            .then(response => {
                console.log(response);
                this.user4 = response;
            })
            .catch(error => {
                this.msg4 = error;
                console.log("error:" + error);
            });
            // const response = await axios.get('http://192.168.100.42:25500/api/infra/GetWorkplaces',{
            //     headers:{"APIKEY":"3A3517DF05374F529E7EEFC7A60523B0"}

            // });
            // console.log(response);
            // this.user2 = response.data;
        }
    },
    created() {
        this.fetchUser();
        this.fetchUser2();
        this.fetchUser3();
    },
}
</script>