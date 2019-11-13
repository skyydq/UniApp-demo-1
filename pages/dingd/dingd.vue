<template>
	<view>
		<navBar></navBar>
		<view class="gongc-top">
			<view class="gongc-left">工程发布</view>
			<view class="gongc-right">
				<navigator url="" hover-class="none"><text class="gongc-icon iconfont icon-shoucang"></text></navigator>
			</view>
		</view>
		<view class="gongc">
			<view class="gongc-list gongc-fabu">
				<view class="gongc-title">
					发布工程
				</view>
				<view class="gongc-img">
					<image src="../../static/gc.jpg" class="gc-img"></image>
				</view>
				<image src="../../static/bg.png" class="gc-bg"></image>
			</view>
			<view class="gongc-list wup-zulin">
				<view class="gongc-title">
					物品租赁
				</view>
				<view class="gongc-img">
					<image src="../../static/zl.jpg" class="gc-img"></image>
				</view>
				<image src="../../static/bg.png" class="gc-bg"></image>
			</view>
			<view class="gongc-list gongj-zhaopin">
				<view class="gongc-title">
					招聘工匠
				</view>
				<view class="gongc-img">
					<image src="../../static/gr.jpg" class="gc-img"></image>
				</view>
				<image src="../../static/bg.png" class="gc-bg"></image>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue";
	export default {
		data() {
			return {
				
			};
		},
		components:{
			navBar
		}
	}
</script>

<style>
	@import url("dingd.css");
</style>
