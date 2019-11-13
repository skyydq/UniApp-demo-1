<template>
	<view class="page-login":style="{'height':windowHeight}">
		<view class="page-login-from">
			<image src="../../static/logo.png" class="login-logo"></image>
			<form>
				<view class="login-cont">
					<view class="input-zh">
						<text class="iconfont icon-shouji zhicon2"></text>
						<input type="number" maxlength="11" placeholder="请输入手机号" pattern="^[0-9]*[1-9][0-9]*$" @input="onKeyInput" />
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
						<input type="text" password="true" maxlength="16" placeholder="请输入密码(8-16位)" pattern="^\w+$" @input="mimaInput" />
					</view>
					<view class="mima-zhuce">
						<navigator url="wjmima" hover-class="none" class="wj-mima">忘记密码？</navigator>
						<navigator url="login" hover-class="none" class="yj-zhuce">已有账号，快速登录></navigator>
					</view>
				</view>
				<view class="login-btn">
					<button type="primary" hover-class="none" @click="btnZhuce">注册</button>
				</view>
				<view class="text-zcxy">
					<checkbox-group>
						<label><checkbox value="" checked="true" color="#cd3232" class="zcdian" />注册代表您同意</label>
					</checkbox-group>
					<navigator url="login" hover-class="none" class="zcxy">《工无界用户协议和隐私声明》</navigator>
				</view>
			</form>
		</view>
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
						content: '请输入正确手机号码！',
						showCancel: false
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
						content: '请输入正确手机号码！',
						showCancel: false
					});
				}else if(this.yzmvalue.length !== 6){
					uni.showModal({
						title: '提示',
						content: '验证码不正确！',
						showCancel: false
					});
				}else if(this.mimavalue == ''){
					uni.showModal({
						title: '提示',
						content: '请设置密码！',
						showCancel: false
					});
				}else if(this.mimavalue.length < '8'){
					uni.showModal({
						title: '提示',
						content: '请输入8-16位密码！',
						showCancel: false
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
								content: '注册成功！',
								showCancel: false,
								success: function (res) {
									if (res.confirm) {
										uni.redirectTo({
											url: 'login'
										});
									}
								}
							});
						},
						fail: function(){
							uni.showModal({
								title: '提示',
								content: '注册失败！',
								showCancel: false
							});
						}
					});
				}
			},
		}
	}
</script>

<style>
	@import url("dlzc.css");
</style>
