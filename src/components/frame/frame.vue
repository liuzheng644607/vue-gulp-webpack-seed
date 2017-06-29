<template>
    <div class="page-wrap" v-bind:class="{'frame-full': !isMenuShow}">
        <!-- 顶部导航  -->
        <top-header/>
        <!-- 左侧菜单 -->
        <side-menu/>
        <div class="frame-main">
            <div class="header-placehodler"></div>
            <div class="frame-main-content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
import TopHeader from './header';
import SideMenu from './side-menu';
import { leftMenus } from 'Common/menu';
import types from 'Store/constants/mutation-types';
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
    components: {
        TopHeader,
        SideMenu
    },
    computed: {
        ...mapState('appState', ['isMenuShow', 'topMenu', 'leftMenu', 'isLogin'])
    },
    created() {
        // 此处需要移除
        if (!this.isLogin) {
            this.$router.replace('/login');
            return;
        }
        this.initMenu();
        this.changeMenu(this.$route);
    },
    watch: {
        $route: 'changeMenu'
    },
    methods: {
        ...mapMutations('appState', [
            types.CHANGE_TOP_SELECTED_MENU,
            types.CHANGE_LEFT_MENU_PATH,
            types.CHANGE_LEFT_MENU
        ]),
        ...mapActions('appState', ['initMenu']),
        changeMenu({ fullPath, name }) {
            // 默认选中第一个模块
            let modulePath = this.topMenu[0].path;
            let activeMenuPath = '';
            let topMenuActived;
            try {
                // 匹配路由的第一级 为 对应的模块
                modulePath = fullPath.match(/\/[a-zA-Z-]+/)[0];
                // 匹配前二级为菜单路径
                activeMenuPath = fullPath.match(/\/[a-zA-Z-]+\/[a-zA-Z-]+/)[0];
            } catch (e) {
            } finally {
            }
            // 根据path找到模块
            this.topMenu.map(function(nav, i) {
                if (nav.path === modulePath) {
                    topMenuActived = nav.name;
                }
            });

            const leftMenu = leftMenus[topMenuActived] || [];

            let firstMenu = leftMenu[0];

            if (!activeMenuPath) {
                if (firstMenu) {
                    if (firstMenu.path) {
                        activeMenuPath = firstMenu.path;
                    } else {
                        activeMenuPath = firstMenu.children[0].path;
                    }
                }
            }
            // 跳转到第一个菜单
            if (
                (fullPath === modulePath || name === 'frame') &&
                activeMenuPath
            ) {
                this.$router.replace(activeMenuPath);
                return;
            }

            this.CHANGE_TOP_SELECTED_MENU({ topMenuActived });
            this.CHANGE_LEFT_MENU({ leftMenu });
            this.CHANGE_LEFT_MENU_PATH({ activeMenuPath });
        }
    }
};
</script>
<style>
</style>
