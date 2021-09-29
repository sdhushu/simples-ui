<template>
    <div class="wrap">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'SimplesWrap'
    }
</script>

<style lang="css">
.wrap {
    padding: 20px 20px ;
    /* background-color: #F0F2F5; */
    box-shadow: 2px 2px 2px #f3f2f2;
    border-radius: 20px;
}
</style>