<template>
    <form>
        <label for="columnCountField">Number of Columns: </label>
        <input
            :value="numberOfColumnsInNav"
            @change="updateColumns"
            @keyup="updateColumns"
            id="columnCountField"
            max="4"
            min="1"
            type="number"
        />
        <div
            v-for="column in numberOfColumnsInNav"
            :key="column"
            class="column--container"
        >
            <details>
                <summary>
                    <h3
                        class="column--container--heading"
                    >Column {{ column }}</h3>
                </summary>
                <ColumnContent :columnNumber="column"/>
            </details>
        </div>
    </form>
</template>

<script>
import ColumnContent from './ColumnContent'

export default {
    components: {
        ColumnContent
    },
    computed: {
        numberOfColumnsInNav() {
            return this.$store.state.columns
        }
    },
    methods: {
        updateColumns(element) {
            if (element.target.value) {
                this.$store.dispatch('updateNumberOfColumns', parseInt(element.target.value))
            }
        }
    }
}
</script>

<style scoped>
.column--container {
    margin-top: 1rem;
}

.column--container + .column--container {
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    border-top: 1px solid grey;
}

.column--container--heading {
    display: inline;
}
</style>
