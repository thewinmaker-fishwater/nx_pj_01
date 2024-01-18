<template>
    <div>
        <header class="text-gray-400 bg-gray-900 body-font">
            <slot name="header"></slot>
        </header>
        <section class="text-gray-400 body-font bg-gray-900">
            <slot></slot>
        </section>
        <footer class="text-gray-400 bg-gray-900 body-font">
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script>
export default {
    
}
</script>