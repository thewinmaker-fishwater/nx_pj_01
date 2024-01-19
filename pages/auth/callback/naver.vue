<template>
    <v-layout column> </v-layout>
</template>

<script>
export default {
layout: 'layout_login',
mounted() {
    const naverLogin = new naver.LoginWithNaverId({
    clientId: '25sleyPO_x3Takbmh8Jw'
    })
    naverLogin.init()
    naverLogin.getLoginStatus(function(status) {
    if (status) {
        const info = {
        id: naverLogin.user.id,
        age: naverLogin.user.age,
        gender: naverLogin.user.gender,
        nickname: naverLogin.user.nickname,
        profile_image: naverLogin.user.profile_image,
        }

        console.log(info)
    } else {
        console.log('AccessToken이 올바르지 않습니다.') 
    }
    })
}
}
</script>