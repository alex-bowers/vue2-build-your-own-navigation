<template>
    <div class="nav-list">
        <a :href="$props.block.header.href">
            <h3>{{ $props.block.header.text }}</h3>
        </a>
        <div class="nav-list--grouped-items">
            <div class="nav-list--grouped-items--main">
                <ul>
                    <li
                        v-for="(item, index) in $props.block.listContent"
                        :key="index"
                    >
                        <a
                            v-if="item.subList"
                            @click.prevent="toggleSubList(item.subList)"
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
            <transition name="fade">
                <div
                    v-if="chosenSubList"
                    class="nav-list--grouped-items--sub"
                >
                    <a @click.prevent="toggleSubList(null)">
                        <h4 class="item--header has-main-menu">
                            {{ chosenSubList.header.text }}
                        </h4>
                    </a>
                    <ul>
                        <li
                            v-for="(item, index) in chosenSubList.listContent"
                            :key="index"
                        >
                            <a
                                :href="item.href"
                                class="item--link"
                            >
                                {{ item.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        block: {
            default: null,
            type: Object
        }
    },
    data() {
        return {
            chosenSubList: null,
        }
    },
    methods: {
        toggleSubList(list) {
            this.chosenSubList = list
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
.item--header.has-main-menu:hover::after,
.item--header.has-main-menu:hover::before,
ul li:hover .item--link.has-sub-menu::after,
ul li:hover .item--link.has-sub-menu::before {
    background: #0067a9;
}

.nav-list {
    position: relative;
}

.nav-list--grouped-items {
    position: relative;
    height: 100%;
}

.nav-list--grouped-items--main,
.nav-list--grouped-items--sub {
    height: 100%;
}

.nav-list--grouped-items--sub {
    position: absolute;
    background-color: #03a9f4;
    left: 0;
    right: 0;
    top: 0;
    width: 100%;
    overflow: hidden;
    overflow-x: hidden;
    overflow-y: auto;
}

.item--header {
    color: #9adcfa;
    cursor: pointer;
    font-size: 0.9375rem;
    padding-left: 1.25rem;
}

.item--link {
    color: white;
    font-size: 0.9375rem;
    line-height: 1.62;
    width: 100%;
}
.item--header.has-main-menu::after,
.item--header.has-main-menu::before,
.item--link.has-sub-menu::after,
.item--link.has-sub-menu::before {
    content: '';
    background: white;
    display: inline-block;
    height: 2px;
    margin-top: -1px;
    position: absolute;
    width: 6px;
}

.item--header.has-main-menu::after,
.item--header.has-main-menu::before {
    left: 0;
    top: 10%;
    transform-origin: 0px 50%;
}

.item--link.has-sub-menu::after,
.item--link.has-sub-menu::before {
    right: 15%;
    top: 50%;
    transform-origin: 6px 50%;
}

.item--header.has-main-menu::before,
.item--link.has-sub-menu::after {
    transform: rotate(-45deg);
}

.item--header.has-main-menu::after,
.item--link.has-sub-menu::before {
    transform: rotate(45deg);
}
</style>
