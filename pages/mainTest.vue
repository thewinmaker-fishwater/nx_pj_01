<template>
    
		<section class="text-gray-400 bg-gray-900 body-font">
            <!-- <section class="text-gray-400 bg-gray-900 body-font"> -->
                <div class="container flex flex-wrap items-center px-5 py-24 mx-auto">
                

                <div class="pb-10 mb-10 border-b border-gray-800 md:pr-12 md:py-8 md:border-b-0 md:mb-0">
                    <h1 class="mb-2 text-2xl font-medium text-white sm:text-3xl title-font">NaverInfo</h1>
                    <p id="nInfo" class="text-base leading-relaxed" >{{ nInfo }}</p>
                </div>
                
            </div>
        </section>
	
</template>


<script>
    import axios from 'axios';


    // const {status, signIn, signOut} = useSession();
    // const loggedIn = computed(
    //     () => status.value === 'authenticated'
    // )
    // async function handleSignIn(){
    //     await signIn()
    // }

    // async function handleSignOut(){
    //     await signOut()
    // }


    let nnInfo = {};

    function fnNnInfo(){
        console.log("naver Info");
        console.log(nnInfo);
    }


    export default {
        data() {
            return {
                user: {},
                user2: {},
                user3: [],
                user4: [],
                nInfo : {},
                msg3 : "",
                msg4 : "",
                nLogin : null,
                
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
            },

            // async naverLogin1(){
            //     this.nLogin = new naver.LoginWithNaverId({
            //         clientId: 'sglksdg0192naver190kasd'
            //     })
            //     this.nLogin.init()
            //     const naverLogin = this.nLogin;

            //     this.nLogin.getLoginStatus(function(status) {
            //         if (status) {
            //             const info = {
            //                 id: naverLogin.user.id,
            //                 age: naverLogin.user.age,
            //                 gender: naverLogin.user.gender,
            //                 nickname: naverLogin.user.nickname,
            //                 profile_image: naverLogin.user.profile_image,
            //             }

                        
            //             // console.log(info);
            //             nnInfo = info;

            //         } else {
            //             console.log('AccessToken이 올바르지 않습니다.') 
            //         }
            //         this.nInfo = naverLogin.user;
            //     })
            // },

        },
        created() {
            this.fetchUser();
            // this.fetchUser2();
            this.fetchUser3();
            // this.loginUser();
            // this.naverLogin1();
        },
        mounted(){

            // const naverLogin = new naver.LoginWithNaverId({
            //     clientId: 'sglksdg0192naver190kasd'
            // })
            // naverLogin.init()
            // naverLogin.getLoginStatus(function(status) {
            //     if (status) {
            //         const info = {
            //             id: naverLogin.user.id,
            //             age: naverLogin.user.age,
            //             gender: naverLogin.user.gender,
            //             nickname: naverLogin.user.nickname,
            //             profile_image: naverLogin.user.profile_image,
            //         }

                    
            //         // console.log(info);
            //         nnInfo = info;

            //     } else {
            //         console.log('AccessToken이 올바르지 않습니다.') 
            //     }
            //     this.nInfo;
            // })




            this.nLogin = new naver.LoginWithNaverId({
                clientId: 'sglksdg0192naver190kasd'
            })
            this.nLogin.init()
            const naverLogin = this.nLogin;

            this.nLogin.getLoginStatus(function(status) {
                if (status) {
                    const info = {
                        id: naverLogin.user.id,
                        age: naverLogin.user.age,
                        gender: naverLogin.user.gender,
                        nickname: naverLogin.user.nickname,
                        profile_image: naverLogin.user.profile_image,
                    }

                    
                    // console.log(info);
                    console.log(naverLogin.user);

                    // const nInfo = document.getElementById("nInfo");
                    // nInfo.innerHTML = JSON.stringify(naverLogin.user);

                    // const br = document.createElement('br');
                    // nInfo.append(br,"email : ",naverLogin.user.email);

                    $("#nInfo").html(JSON.stringify(naverLogin.user));
                    var html = "<br/>";
                    html += "email : " + naverLogin.user.email;
                    $("#nInfo").append(html);

                } else {
                    console.log('AccessToken이 올바르지 않습니다.') 
                }

                
            })

            

        },
        
    }

</script>

<sciprt setup>
    
</sciprt>