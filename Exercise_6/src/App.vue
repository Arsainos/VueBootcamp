<template>
    <div class="container">
        <headerComponent />
        <hr>
        <div class="row">
            <serversComponent />
            <serverInfoComponent />
        </div>
        <hr>
        <footerComponent />
    </div>
</template>

<script>
    import Head from './header.vue';
    import Footer from './footer.vue';
    import ServerInfo from './serverInfo.vue';
    import Servers from './servers.vue';

    export default {
        components: {
            'headerComponent': Head,
            'footerComponent': Footer,
            'serverInfoComponent': ServerInfo,
            'serversComponent': Servers
        }
    }
</script>

<style>

</style>
