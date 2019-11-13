<template name="retuiTitle">
	<view class="retui-title">
		<view class="retui-title-l">{{otitle}}</view>
		<view class="retui-title-r">
			<navigator :url="ourl" hover-class="none">更多 ></navigator>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		props:{
			otitle:'',
			ourl:''
		}
	}
</script>

<style>
	.retui-title{
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 0 28upx;
		height: 100upx;
		line-height: 100upx;
	}
	.retui-title-l{
		color:#000;
		font-size: 15px;
		font-weight: 600;
	}
	.retui-title-r{
		color:#666;
		font-size: 12px;
	}
</style>
