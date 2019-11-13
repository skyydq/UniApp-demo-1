<template name="navBottom">
	<view>
		<view class="cu-bar tabbar margin-bottom-xl bg-white nav-bottom">
			<view class="action text-green">
				<navigator url="../index/index" hover-class="none">
					<view class="icon-homefill"></view> 首页<!--  icon-home  -->
				</navigator>
			</view>
			<view class="action text-gray">
				<navigator url="../dingd/dingd" hover-class="none">
					<view class="icon-baby"></view> 订单<!--  icon-babyfill  -->
				</navigator>
			</view>
			<view class="action text-gray add-action">
				<button class="cu-btn icon-add bg-green shadow"></button>
				发布
			</view>
			<view class="action text-gray">
				<navigator url="../xiaox/xiaox" hover-class="none">
					<view class="icon-community"><!--  icon-communityfill  -->
						<view class="cu-tag badge" v-if="xiaoxi>0">{{xiaoxi}}</view>
					</view>
					消息
				</navigator>
			</view>
			<view class="action text-gray">
				<navigator url="../my/my" hover-class="none">
					<view class="icon-people"></view>我的<!--  icon-peoplefill  -->
				</navigator>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "navBottom",
		data() {
			return {
				xiaoxi: 0
			}
		},
		onLoad() {
			
			if(this.xiaoxi == 0){
				// this.xiaoxi = ""
			}
			
		},
		methods: {
			
		}
	}
</script>

<style>
	.nav-bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 99;
		border-top: solid 1px #eee;
	}
</style>
