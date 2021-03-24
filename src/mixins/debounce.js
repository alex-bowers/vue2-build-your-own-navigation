export default {
    data() {
        return {
            debounce: null
        }
    },
    methods: {
        debounceSaveBlock() {
            clearTimeout(this.debounce)
            this.debounce = setTimeout(() => {
                this.saveBlock()
            }, 1000)
        }
    }
}
