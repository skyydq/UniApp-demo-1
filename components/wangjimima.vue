<template name="wangjimima">
	<view>
		<form>
			<view class="login-cont">
				<view class="login-title">
					<image src="../../static/gwj.png" class="login-gwj"></image>
				</view>
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
					<view class="wj-mima">快速注册</view>
					<view class="yj-zhuce" @click="hahaha">前去登录></view>
				</view>
			</view>
			<view class="login-btn">
				<button type="primary" @click="ggmimaBtn">更改密码</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				fstime:'获取验证码',
				otime:60,
				butDis:false,
				sjvalue:1,
				yzvalue:1,
				xmimavalue:''
			};
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
					console.log(this.sjvalue.length);
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
				}
			},
			ggmimaBtn:function(){
				var me = this;
				uni.getStorage({
					key: 'howeKey',
					success: function (res) {
						var sjvalue = res.data.shouji;
						
						if(me.sjvalue.length !== 11){
							uni.showModal({
								title: '提示',
								content: '请输入11位手机号！'
							});
						}else if(me.sjvalue !== sjvalue){
							uni.showModal({
								title: '提示',
								content: '请输入正确手机号！'
							});
						}else if(this.yzmvalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入验证码！'
							});
						}else if(me.mimavalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入新登录密码！'
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
										content: '更改密码成功！'
									});
									uni.redirectTo({
										url: '../login/login'
									});
								}
							});
						};
					}
				});
			}
		}
	}
</script>

<style>

</style>
