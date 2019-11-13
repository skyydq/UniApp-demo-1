<template>
	<view>
		<view>
			<navigator url="" class="shez">
				<text>账号管理</text>
				<text class="iconfont icon-next"></text>
			</navigator>
		</view>
		<view>
			<navigator url="" class="shez">
				<text>推送设置</text>
				<text class="iconfont icon-next"></text>
			</navigator>
		</view>
		<view>
			<navigator url="" class="shez">
				<text>合同协议</text>
				<text class="iconfont icon-next"></text>
			</navigator>
		</view>
		<view>
			<navigator url="" class="shez">
				<text>关于我们</text>
				<text class="iconfont icon-next"></text>
			</navigator>
		</view>
		<view class="shez" @click="lianxi">
			<text>联系我们</text>
			<text class="iconfont icon-next"></text>
		</view>
		<view class="denglu-end">
			<navigator url="../../login/login" hover-class="none">退出登录</navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			lianxi(){
				uni.makePhoneCall({
					phoneNumber: '18833007782',
					success:function(){
						console.log("拨打成功")
					}
				});
			}
		}
	}
</script>

<style>
	.shez{
		border-bottom:solid 1px #eee;
		color:#444;
		font-size: 14px;
		padding:0 20upx;
		height:80upx;
		line-height: 80upx;
		display: flex;
		justify-content: space-between;
	}
	.denglu-end{
		text-align: center;
		font-size: 14px;
		color:#da0000;
		margin:40upx auto;
		width:40%;
		padding:10upx 0;
		border:solid 1px #ddd;
	}
</style>
