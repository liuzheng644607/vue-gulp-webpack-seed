<script>
import { mapMutations, mapActions, mapGetters, mapState } from 'vuex';
import types from 'Store/constants/mutation-types';

export default {
    data: () => ({
        treeDefaultProps: {
            label: 'title',
            children: 'children'
        }
    }),
    computed: {
        ...mapGetters('appState', ['leftMenu']),
        ...mapState('appState', ['activeMenuPath'])
    },
    methods: {
        ...mapMutations('appState', [types.TOGGLE_MENU_SHOW]),
        ...mapActions('appState', ['logout']),
        select(menu) {
            this.$router.push(menu.path);
        }
    },

    render(h, context) {
        const { leftMenu, activeMenuPath } = this;
        const menus = leftMenu;
        const items = menus.map(menu => {
            if (Array.isArray(menu.children)) {
                return (
                    <el-submenu index={menu.id}>
                        <template slot="title">
                            {menu.title}
                        </template>
                        {menu.children.map(submenu => {
                            return (
                                <el-menu-item
                                    index={submenu.path}
                                    class={
                                        submenu.path === activeMenuPath
                                            ? 'is-active'
                                            : ''
                                    }
                                >
                                    {submenu.title}
                                </el-menu-item>
                            );
                        })};
                    </el-submenu>
                );
            } else {
                return (
                    <el-menu-item
                        index={menu.path}
                        class={menu.path === activeMenuPath ? 'is-active' : ''}
                    >
                        {menu.title}
                    </el-menu-item>
                );
            }
        });
        return (
            <div class="side-menu">
                <el-menu
                    theme="dark"
                    router={true}
                    uniqueOpened={true}
                    defaultActive={activeMenuPath}
                >
                    {items}
                </el-menu>
            </div>
        );
    }
};
</script>

<style scoped>
.el-tree {
    background: none;
    border: none
}

span {
    color: #c9cbcf;
}
</style>
