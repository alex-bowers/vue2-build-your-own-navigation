<template>
    <section class="builder--section">
        <h2>Builder</h2>
        <BuilderForm />
    </section>
</template>

<script>
import BuilderForm from '../components//Builder/BuilderForm'

export default {
    components: {
        BuilderForm
    }
}
</script>

<style scoped>
.builder--section {
    background-color: lightgray;
    padding: 2rem;
}
</style>
