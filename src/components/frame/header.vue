<template>
    <header class="header">
        <div class="logo">
            <span>后台管理系统</span>
            <i class="btn-munu" @click="TOGGLE_MENU_SHOW"></i>
        </div>
        <el-menu route theme="dark" :default-active="topMenuActived" class="header-nav" mode="horizontal">
          <el-menu-item v-for="(menu, index) in topMenu" @click="() => select(menu)" :index="menu.name" :key="menu.name">
              {{menu.title}}
          </el-menu-item>
        </el-menu>
        <ul class="system-nav">
            <li><a href="#">help</a></li>
            <li><a href="#">组员管理</a></li>
            <li><a @click="logout">退出</a></li>
        </ul>
    </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import types from 'Store/constants/mutation-types';
export default {
    computed: {
        ...mapState('appState', ['topMenuActived', 'topMenu'])
    },
    methods: {
        ...mapMutations('appState', [
            types.TOGGLE_MENU_SHOW,
            types.CHANGE_LEFT_MENU,
            types.CHANGE_TOP_SELECTED_MENU
        ]),
        ...mapActions('appState', ['logout']),
        select(nav) {
            this.$router.push(nav.path);
        }
    }
};
</script>

<style>
</style>
