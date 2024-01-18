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
        
    </div>
</template>

<script>
    import axios from 'axios';
    import asyncData from '../../components/async_data.vue';
    import fetchData from '@/components/fetch_data.vue';


    import ModalLayout from '@/layouts/desktop/desktop.vue';
    import layoutHeader from '@/layouts/desktop/desktop-heaader.vue';
    import layoutBody from '@/layouts/desktop/login/desktop-login-body.vue';
    import layoutFooter from '@/layouts/desktop/desktop-footer.vue';


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