<template>
	<div class="login-bg">
		<div class="login">
			<header>
				<h1>后台管理系统</h1>
			</header>
			<el-form :model="accountForm" :rules="rules" ref="accountForm">
				<el-form-item prop="username">
					<el-input v-model="accountForm.username" placeholder="请输入帐号" @keyup.native.enter="login"></el-input>
				</el-form-item>
				<el-form-item prop="password">
					<el-input v-model="accountForm.password"  type="password" placeholder="请输入密码" @keyup.native.enter="login"></el-input>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" class="login-submit input" :loading="loading" @click="doLogin">登录</el-button>
				</el-form-item>
			</el-form>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';
const defaultPath = '/';
// 路由是从哪里来的
let fromPath = defaultPath;

export default {
    name: 'login',

    data() {
        var validateName = (rule, value, cb) => {
            !value ? cb(new Error('请输入帐号')) : cb();
        };
        var validatePassword = (rule, value, cb) => {
            !value ? cb(new Error('请输入密码')) : cb();
        };
        return {
            loading: false,
            accountForm: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入帐号', trigger: 'change' },
                    { validator: validateName, trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' },
                    { validator: validatePassword, trigger: 'blur' }
                ]
            }
        };
    },
    beforeRouteEnter(to, from, next) {
        fromPath = from.path;
        next();
    },
    activated() {},
    methods: {
        ...mapActions('appState', ['login']),
        // 登录
        doLogin() {
            this.$refs.accountForm.validate(valid => {
                if (!valid) return;
                this.loading = true;
                this.login(this.accountForm).then(() => {
                    this.loading = false;
                    this.$router.replace(fromPath);
                    fromPath = defaultPath;
                });
            });
        }
    }
};
</script>

<style lang="less"  scoped>
	.login-bg {
		position: absolute;
		min-height: 400px;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
        display: flex;
        align-items: center;
		background-position: center center;
	}
	.login {
		width: 300px;
		padding: 10px 30px;
		border-radius: 5px;
		background: #fff;
		margin: 0 auto;

    }
	header {
		font-size: 12px;
		font-weight: bold;
		color: #20a0ff;
	}
	.login-submit {
		width: 100%;
	}

</style>
