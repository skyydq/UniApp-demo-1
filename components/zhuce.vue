<template name="zhuce">
	<view>
		<form>
			<view class="login-cont">
				<view class="login-title">
					<image src="../../static/gwj.png" class="login-gwj"></image>
				</view>
				<view class="input-zh">
					<text class="iconfont icon-shouji zhicon2"></text>
					<input type="number" maxlength="11" placeholder="请输入手机号" @input="onKeyInput" />
				</view>
				<view class="yzma">
					<text class="iconfont icon-renzheng yzicon"></text>
					<input type="number" maxlength="6" placeholder="请输入验证码"  @input="yzmInput" />
					<button class="fsyzma" @click="fsclick" :disabled="butDis">
						{{fstime}}
					</button>
				</view>
				<view class="input-mima">
					<text class="iconfont icon-mima mimaicon"></text>
					<input type="text" password="true" maxlength="16" placeholder="请输入密码(8-16位)" @input="mimaInput" />
				</view>
				<view class="mima-zhuce">
					<navigator url="../wjmima/wjmima" hover-class="none" class="wj-mima">忘记密码？</navigator>
					<navigator url="../login/login" hover-class="none" class="yj-zhuce">已有账号，快速登录></navigator>
				</view>
			</view>
			<view class="login-btn">
				<button type="primary" @click="btnZhuce">注册</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				windowHeight:'100%',
				fstime:'获取验证码',
				otime:60,
				butDis:false,
				sjvalue:1,
				yzmvalue:1,
				mimavalue:''
			};
		},
		onLoad() {
			var _me = this;
			
			uni.getSystemInfo({
				success: function(res) {
					_me.windowHeight = res.windowHeight + 'px';
				}
			});
			
		},
		methods:{
			onKeyInput:function(e){
				this.sjvalue = e.target.value;
			},
			yzmInput:function(e){
				this.yzmvalue = e.target.value;
			},
			mimaInput:function(e){
				this.mimavalue = e.target.value;
			},
			fsclick:function(){
				if(this.sjvalue.length !== 11){
					uni.showModal({
						title: '提示',
						content: '请输入11位手机号码！'
					});
				}else{
					var howe = setInterval(() => {
						if(this.otime == 0){
							this.fstime = "获取验证码";
							this.otime = 60;
							this.butDis = false;
							clearInterval(howe);
						}else{
							this.butDis = true;
							this.fstime = this.otime + 's后重新发送';
							this.otime --;
						}
					},1000);
				};
			},
			btnZhuce:function(){
				if(this.sjvalue.length !== 11){
					uni.showModal({
						title: '提示',
						content: '请输入11位手机号码！'
					});
				}else if(this.yzmvalue == ''){
					uni.showModal({
						title: '提示',
						content: '请输入验证码！'
					});
				}else if(this.mimavalue == ''){
					uni.showModal({
						title: '提示',
						content: '请设置密码！'
					});
				}else{
					var me = this;
					uni.setStorage({
						key: 'howeKey',
						data: {
							shouji: me.sjvalue,
							mima: me.mimavalue
						},
						success: function () {
							uni.showModal({
								title: '恭喜',
								content: '注册成功！'
							});
							uni.redirectTo({
								url: '../login/login'
							});
						}
					});
				}
			},
		}
	}
</script>

<style>

</style>
