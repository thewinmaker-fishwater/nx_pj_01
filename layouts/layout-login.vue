<template>
    <div>
        
        <compLogin/>
        <slot/>
    </div>
</template>

<script>
export default {
    name:'',
    components:{},
    head:{
        meta: [
            {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
            },
            {
            charset: "utf-8"
            }
        ],
        link: [],
        style: [],
        script:[
            { src: 'https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js' },
            { src: 'https://developers.kakao.com/sdk/js/kakao.min.js' }
        ],
        noscript: []
        
    },
    data(){
        return {
            sampleData:''
        };
    },
    beforeCreate(){},
    create(){},
    beforeMount(){},
    mounted(){},
    beforeUpdate(){},
    updated(){},
    beforeUnmount(){},
    unmounted(){},
    methods:{},

}
</script>