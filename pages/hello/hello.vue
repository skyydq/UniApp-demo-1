<template>
	<view>
		<swiper
		:indicator-dots="true"
		indicator-active-color="#dddddd"
		:style="{'height':windowHeight}"
		class="swiper-qid"
		>
			<swiper-item v-for="(ourl,oindex) in ourls" :key="oindex">
				<image :src="ourl" class="qid-img" :style="{'width':windowWidth,'height':windowHeight}"></image>
				<view class="btn-click" v-if="oindex == 2" @click="btnClick">
					进入工无界
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ourls:["../../static/swiper/1.jpg","../../static/swiper/2.jpg","../../static/swiper/3.jpg"],
				windowHeight:"750upx",
				windowWidth:"750upx"
			};
		},
		onLoad() {
			var _me = this;
			
			uni.getSystemInfo({//获取手机屏幕高度信息，让swiper的高度和手机屏幕一样高
				success: function(res) {
					_me.windowHeight = res.windowHeight + 'px';
					// #ifdef MP
					// _me.windowHeight = res.windowHeight + 40 + 'px';
					// #endif
					_me.windowWidth = res.windowWidth + 'px';
					console.log('手机可使用窗口高度为' + _me.windowHeight);
					console.log('手机可使用窗口宽度为' + _me.windowWidth);
					console.log('手机屏幕高度为' + _me.screenHeight);
				}
			});
			
		},
		methods:{
			btnClick(){
				uni.redirectTo({
					url: '../login/login'
				});
			}
		}
	}
</script>

<style>
	.btn-click{
		position: absolute;
		bottom:150upx;
		left:245upx;
		z-index: 999;
		width:260upx;
		height:90upx;
		background:rgba(0,0,0,.5);
		color:#fff;
		text-align: center;
		line-height: 90upx;
		font-size: 16px;
		border-radius:90upx;
		padding:0 20upx;
	}
	.swiper-qid .uni-swiper-dot {
		width: 30px;
		height: 5px;
		border-radius: 0;
	}
</style>
