<template>
    <div>
        <a :href="$props.block.header.href">
            <h3>{{ $props.block.header.text }}</h3>
        </a>
        <ul>
            <li
                v-for="(item, index) in $props.block.listContent"
                :key="index"
            >
                <a :href="item.href">
                    {{ item.label }}
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            default: null,
            type: Object
        }
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

h3 {
    color: #0181c7;
    font-size: 0.8125rem;
    text-transform: uppercase;
}

h3:hover {
    color: #0067a9;
}

ul {
    list-style: none;
    padding-inline-start: 0;
}

ul a {
    color: white;
    font-size: 0.9375rem;
    line-height: 1.62;
}

ul a:hover {
    color: #0067a9;
}
</style>
