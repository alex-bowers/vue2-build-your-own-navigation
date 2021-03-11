<template>
    <div id="app">
        <Builder />
        <Result />
    </div>
</template>

<script>
import Builder from './pages/Builder'
import Result from './pages/Result'

import './assets/global.css'

export default {
    name: 'App',
    components: {
        Builder,
        Result
    }
}
</script>

<style></style>
