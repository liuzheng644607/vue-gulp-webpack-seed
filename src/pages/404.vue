<template lang="html">
    <div class="content">
        <h1>😢页面飞了</h1>
        <span @click="goBack"><<返回上一页</span>
    </div>

</template>

<script>
export default {
    methods: {
        goBack() {
            this.$router.back();
        }
    }
};
</script>

<style lang="less" scoped>
.content {
    text-align: center;
    span {
        cursor: pointer;
        color: #20a0ff
    }
}
</style>
