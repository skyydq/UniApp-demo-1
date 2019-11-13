<template name="denglu">
	<view>
		<form>
			<view class="login-cont">
				<view class="login-title">
					<image src="../../static/gwj.png" class="login-gwj"></image>
				</view>
				<view class="input-zh">
					<text class="iconfont icon-wode1 zhicon"></text>
					<input type="text" maxlength="11" placeholder="用户名/手机号" @input="onKeyInput" />
				</view>
				<view class="input-mima">
					<text class="iconfont icon-mima mimaicon"></text>
					<input type="text" password="true" maxlength="16" placeholder="请输入密码(8-16位)" @input="mimaInput" @click="hahaha" />
				</view>
				<view class="mima-zhuce">
					<view class="wj-mima" @click="hahaha">忘记密码？</view>
					<view class="yj-zhuce">快速注册></view>
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
</template>

<script>
	export default {
		data() {
			return {
				sjvalue:11,
				mimavalue:'',
				dataMima:''
			};
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
						
						if(me.sjvalue.length !== 11){
							uni.showModal({
								title: '提示',
								content: '请输入11位的手机号码！'
							});
						}else if(me.sjvalue !== sjvalue){
							uni.showModal({
								title: '提示',
								content: '请输入正确手机号！'
							});
						}else if(me.mimavalue == ''){
							uni.showModal({
								title: '提示',
								content: '请输入登录密码！'
							});
						}else if(me.mimavalue !== mima){
							uni.showModal({
								title: '提示',
								content: '请输入正确登录密码！'
							});
						}else{
							uni.showModal({
								title: '恭喜',
								content: '登录成功！'
							});
							uni.switchTab({
								url: '../index/index'
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

</style>
