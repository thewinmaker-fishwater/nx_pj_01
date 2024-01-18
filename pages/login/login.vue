<!-- UserProfile.vue -->
<template>
    <NuxtLayout name="layout-login">
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
                <div class="pr-0 lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0">
                    <h1 class="text-3xl font-medium text-white title-font">Slow-carb next level shoindxgoitch ethical authentic, poko scenester</h1>
                    <p class="mt-4 leading-relaxed">Poke slow-carb mixtape knausgaard, typewriter street art gentrify hammock starladder roathse. Craies vegan tousled etsy austin.</p>
                </div>
                <div class="flex flex-col w-full p-8 mt-10 bg-gray-800 bg-opacity-50 rounded-lg lg:w-2/6 md:w-1/2 md:ml-auto md:mt-0">
                    <h2 class="mb-5 text-lg font-medium text-white title-font">Sign Up</h2>
                    <div class="relative mb-4">
                        <label for="full-name" class="text-sm leading-7 text-gray-400">Full Name</label>
                        <input type="text" id="full-name" name="full-name" class="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500">
                    </div>
                    <div class="relative mb-4">
                        <label for="email" class="text-sm leading-7 text-gray-400">Email</label>
                        <input type="email" id="email" name="email" class="w-full px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out bg-gray-600 border border-gray-600 rounded outline-none bg-opacity-20 focus:bg-transparent focus:ring-2 focus:ring-indigo-900 focus:border-indigo-500">
                    </div>
                    <div>
                        <NuxtLink to="/main" class="mr-3">
                            <button class="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Sign in</button>
                        </NuxtLink>
                        <NuxtLink>
                            <img @click="loginWithNaver" src="https://static.nid.naver.com/oauth/big_g.PNG" width="222"></img>
                        </NuxtLink>
                        <NuxtLink>
                            <img @click="loginWithKakao" src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222"></img>
                        </NuxtLink>
                        <!-- <NuxtLink to="">
                            <button class="px-8 py-2 text-lg text-white bg-indigo-500 border-0 rounded focus:outline-none hover:bg-indigo-600">Naver</button>
                        </NuxtLink> -->
                    </div>
                    <p class="mt-3 text-xs">Literally you probably haven't heard of them jean shorts.</p>
                </div>
            </div>
        </section>
    </NuxtLayout>
</template>

<script>
// import naverObj from '~/assets/js/naveridlogin_js_sdk_2.0.2';
// import kakaoObje from '~/assets/js/kakao.min.js';
// import test from '~/assets/js/test';



export default {
    // mounted(){
    //     const script = document.createElement("script");
    //     script.type = "text/javascript";
    //     script.src = "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    //     document.body.appendChild(script);
    // },
    // head(){
    //     return {
    //         script:[
    //             { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', body:true, async:true, defer:true },
    //             { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
    //         ],
    //     }
    // },
    data(){
        return{
            isNLoaded : false,
            isKLoaded : false,
        }
    },
    
    // head:{
    //     script:[
    //             { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' },
    //             { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
    //             { src: '~/assets/js/naveridlogin_js_sdk_2.0.2.js' },
    //             { src: '~/assets/js/kakao.min.js' },
    //             { src: '~/assets/js/test.js'}
    //         ],
    // },
    // script:[
    //     { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' },
    //     { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' },
    // ],
    methods: {
        loginWithKakao() {
            Kakao.init('1201fk21f210fkklakakao')  // KaKao client key
            Kakao.Auth.authorize({
                // redirectUri: `${window.location.origin}/auth/callback/kakao`
                redirectUri: `${window.location.origin}/main`
            })
        },

        loginWithNaver() {
            const naverLogin = new naver.LoginWithNaverId({
                clientId: '25sleyPO_x3Takbmh8Jw', // Naver client key
                // callbackUrl: `${window.location.origin}/auth/callback/naver`,
                callbackUrl: `${window.location.origin}/main`,
                callbackHandle: true
            })
            naverLogin.init()
            naverLogin.reprompt()
        },


    },
    // head() {
    //     return {
    //         title: 'Payment Page - My awesome project', // Other meta information
    //         script: [
    //             { 
    //                 hid: 'naverUrl', 
    //                 src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js', 
    //                 defer: true,
    //                 callback : () => {this.isNLoaded = true}
    //             },
    //             { 
    //                 hid: 'kakaoUrl', 
    //                 src: 'https://developers.kakao.com/sdk/js/kakao.min.js', 
    //                 defer: true,
    //                 callback : () =>{this.isKLoaded = true}
    //             }
    //         ]
    //     }
    // },
    // mounted() {
    //     test.test1();
    // }

    



}

</script>


<style>
/* @import url("animate.css"); */
</style>