<template>
	<view class="banzu-nav">
		<view class="banzu-nav-left" @click="lianx">
			{{barLeft}}<text class="iconfont icon-shoujihao"></text>
		</view>
		<view class="banzu-nav-right">
			项目邀请<text class="iconfont icon-qunfa"></text>
		</view>
	</view>
</template>

<script>
	export default {
		name: "yaoqBar",
		data() {
			return {
				
			};
		},
		props:{
			phone: {
				type: String,
				default: "12345678910"
			},
			barLeft: {
				type: String,
				default: "联系工长"
			}
		},
		methods:{
			lianx(){
				var me = this;
				uni.makePhoneCall({
					phoneNumber: me.phone,
					success() {
						console.log(me.phone + "拨打成功！")
					},
					fail() {
						console.log(me.phone + "拨打失败！")
					}
				});
			}
		}
	}
</script>

<style lang="less">
	.banzu-nav{
		position: fixed;
		bottom:0;
		left:0;
		width:100%;
		height:100upx;
		line-height: 100upx;
		display: flex;
		text-align: center;
		border-top:solid 1px #eee;
		background:#fff;
		color:#fff;
		.banzu-nav-left,.banzu-nav-right{
			font-size: 17px;
			width:50%;
			background:#e03a3a;
			text{
				padding-left:20upx;
			}
		}
		.banzu-nav-right{
			background:#3a6de0;
		}
	}
</style>
