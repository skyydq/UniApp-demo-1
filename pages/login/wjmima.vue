<template>
	<view class="page-login":style="{'height':windowHeight}">
		<view class="page-login-from">
			<image src="../../static/logo.png" class="login-logo"></image>
			<form>
				<view class="login-cont">
					<view class="input-zh">
						<text class="iconfont icon-shouji zhicon2"></text>
						<input type="number" maxlength="11" placeholder="请输入绑定的手机号" name="zcsjh" @input="onKeyInput" />
					</view>
					<view class="yzma">
						<text class="iconfont icon-renzheng yzicon"></text>
						<input type="number" maxlength="6" placeholder="请输入验证码" name="zcyzm" @input="yzmInput" />
						<button class="fsyzma" @click="fsclick" :disabled="butDis">
							{{fstime}}
						</button>
					</view>
					<view class="input-mima">
						<text class="iconfont icon-mima mimaicon"></text>
						<input type="text" password="true" maxlength="16" placeholder="请输入新密码(8-16位)" @input="xmimaInput" />
					</view>
					<view class="mima-zhuce">
						<navigator url="login2" hover-class="none" class="wj-mima">快速注册</navigator>
						<navigator url="login" hover-class="none" class="yj-zhuce">前去登录></navigator>
					</view>
				</view>
				<view class="login-btn">
					<button type="primary" hover-class="none" @click="ggmimaBtn">更改密码</button>
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
				yzvalue:1,
				xmimavalue:''
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
			xmimaInput:function(e){
				this.xmimavalue = e.target.value;
			},
			fsclick:function(){
				if(this.sjvalue.length !== 11){
					uni.showModal({
						title: '提示',
						content: '请输入正确手机号！',
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
				}
			},
			ggmimaBtn:function(){
				var me = this;
				uni.getStorage({
					key: 'howeKey',
					success: function (res) {
						var sjvalue = res.data.shouji;
						
						if(me.sjvalue.length !== 11 || me.sjvalue !== sjvalue){
							uni.showModal({
								title: '提示',
								content: '请输入正确手机号！',
								showCancel: false
							});
						}else if(this.yzmvalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入验证码！',
								showCancel: false
							});
						}else if(me.mimavalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入新登录密码！',
								showCancel: false
							});
						}else{
							uni.setStorage({
								key: 'howeKey',
								data: {
									shouji: me.sjvalue,
									mima: me.xmimavalue
								},
								success: function () {
									uni.showModal({
										title: '恭喜',
										content: '更改密码成功！',
										showCancel: false,
										success: function (res) {
											if (res.confirm) {
												uni.redirectTo({
													url: 'login'
												});
											}
										}
									});
								}
							});
						};
					},
					fail:function(){
						uni.showModal({
							title: '提示',
							content: '暂无此用户！',
							showCancel: false
						});
					}
				});
			}
		}
	}
</script>

<style>
	@import url("dlzc.css");
</style>
