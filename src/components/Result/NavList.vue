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
                <a
                    v-if="item.subList"
                    class="item--link has-sub-menu"
                >
                    {{ item.label }}
                </a>
                <a
                    v-else
                    :href="item.href"
                    class="item--link"
                >
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

ul li {
    display: flex;
    position: relative;
}

ul li:hover {
    cursor: pointer;
}

ul li:hover .item--link {
    color: #0067a9;
}

ul li:hover .item--link.has-sub-menu::after,
ul li:hover .item--link.has-sub-menu::before {
    background: #0067a9;
}

.item--link {
    color: white;
    font-size: 0.9375rem;
    line-height: 1.62;
    width: 100%;
}

.item--link.has-sub-menu::after,
.item--link.has-sub-menu::before {
    content: '';
    background: white;
    display: inline-block;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    width: 6px;
    right: 15%;
}

.item--link.has-sub-menu::after {
    transform-origin: 6px 50%;
    transform: rotate(-45deg);
}

.item--link.has-sub-menu::before {
    transform-origin: 6px 50%;
    transform: rotate(45deg);
}
</style>
