<template>
    <div>
        <!-- <header class="text-gray-400 bg-gray-900 body-font"> -->
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
                <NuxtLink to="/">
                    <button class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">Home
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </NuxtLink>
                <NuxtLink to="/login/login">
                    <button class="inline-flex items-center px-3 py-1 mt-4 text-base bg-gray-800 border-0 rounded focus:outline-none hover:bg-gray-700 md:mt-0">Login
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                    </button>
                </NuxtLink>
            </div>
        <!-- </header> -->
    </div>
</template>