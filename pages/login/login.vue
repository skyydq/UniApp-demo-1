<template>
	<view class="page-login" :style="{'height':windowHeight}">
		<view class="page-login-from">
			<image src="../../static/logo.png" class="login-logo"></image>
			<form>
				<view class="login-cont">
					<view class="input-zh">
						<text class="iconfont icon-wode1 zhicon"></text>
						<input type="number" maxlength="11" placeholder="请输入手机号" @input="onKeyInput" />
					</view>
					<view class="input-mima">
						<text class="iconfont icon-mima mimaicon"></text>
						<input type="text" password="true" maxlength="16" placeholder="请输入密码(8-16位)" @input="mimaInput" />
					</view>
					<view class="mima-zhuce">
						<navigator url="wjmima" hover-class="none" class="wj-mima">忘记密码？</navigator>
						<navigator url="login2" hover-class="none" class="yj-zhuce">快速注册></navigator>
					</view>
				</view>
				<view class="login-btn">
					<button type="primary" hover-class="none" @click="btnDenglu">登录</button>
				</view>
				<view class="text-dl">
					————&nbsp;&nbsp;其他登录方式&nbsp;&nbsp;————
				</view>
				<view class="qq_wx">
					<image src="../../static/qq.png"></image>
					<image src="../../static/wx.png"></image>
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
				sjvalue:11,
				mimavalue:'',
				dataMima:''
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
			mimaInput:function(e){
				this.mimavalue = e.target.value;
			},
			btnDenglu:function(){
				var me = this;
				uni.getStorage({
					key: 'howeKey',
					success: function (res) {
						var sjvalue = res.data.shouji;
						var mima = res.data.mima;
						
						if(me.sjvalue.length !== 11 || me.sjvalue !== sjvalue){
							uni.showModal({
								title: '提示',
								content: '请输入正确手机号码！',
								showCancel: false
							});
						}else if(me.mimavalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入登录密码！',
								showCancel: false
							});
						}else if(me.mimavalue !== mima){
							uni.showModal({
								title: '提示',
								content: '请输入正确登录密码！',
								showCancel: false
							});
						}else{
							uni.showModal({
								title: '恭喜',
								content: '登录成功！',
								showCancel: false,
								success: function (qwer) {
									if (qwer.confirm) {
										// #ifdef MP-WEIXIN
										uni.switchTab({
											url: '../index/index',
										});
										// #endif
										
										// #ifndef MP-WEIXIN
										uni.reLaunch({
											url: '../tabbar/tabbar'
										});
										// #endif
									}
								}
							});
						};
					},
					fail: function(e){
						uni.showModal({
							title: '提示',
							content: '数据库中暂无用户！'
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
