<!-- #ifndef MP-WEIXIN -->
<template>
	<view class="page-tabber">
		<index v-if="index == 1"></index>
		<dingd v-if="index == 2"></dingd>
		<!-- <qiehuan v-if="index == 3"></qiehuan> -->
		<xiaox v-if="index == 4"></xiaox>
		<my v-if="index == 5"></my>
		
		<view class="tabbar">
			<view class="tabbar2 index" @click="index = 1" :class="{active:index==1}">
				<text class="iconfont icon-shouye1"></text>
				<view>首页</view>
			</view>
			<view class="tabbar2 dingd" @click="index = 2" :class="{active:index==2}">
				<text class="iconfont icon-gongchengxiangmu"></text>
				<view>工程</view>
			</view>
			<view class="tabbar2 qiehuan" @click="index = 3" :class="{active:index==3}">
				<text class="iconfont icon-qiehuanxuanze"></text>
				<!-- <view>切换</view> -->
			</view>
			<view class="tabbar2 xiaox" @click="index = 4" :class="{active:index==4}">
				<text class="iconfont icon-qun"></text>
				<view>消息</view>
			</view>
			<view class="tabbar2 my" @click="index = 5" :class="{active:index==5}">
				<text class="iconfont icon-wode"></text>
				<view>我的</view>
			</view>
		</view>
	</view>
</template>

<script>
	import index from "../index/index.vue";
	import dingd from "../dingd/dingd.vue";
	// import qiehuan from "../qiehuan/qiehuan.vue";
	import xiaox from "../xiaox/xiaox.vue";
	import my from "../my/my.vue";
	
	export default {
		data() {
			return {
				index: 1
			}
		},
		methods: {
			
		},
		components: {
			index,
			dingd,
			// qiehuan,
			xiaox,
			my
		},
	}
	
</script>

<style lang="less">
	.page-tabber{
		padding-bottom:160upx;
	}
	.tabbar{
		position: fixed;
		left:0;
		bottom:0;
		width:100%;
		display: flex;
		justify-content: space-between;
		background:#fff;
		z-index: 999;
		text-align: center;
		font-size: 14px;
		color:#aaa;
		border-top: solid 1px #eee;
		padding:6upx 0;
		text{
			font-size: 20px;
		}
		.tabbar2{
			width:20%;
		}
		.qiehuan{
			position: relative;
			text{
				position: absolute;
				bottom:30upx;
				background:#e11c1c;
				left:15upx;
				width:120upx;
				height:120upx;
				// border:solid 1px #e11c1c;
				border-radius: 50%;
				line-height: 120upx;
				font-size: 30px;
				color: #fff;
			}
			view{
				width:150upx;
				text-align: center;
				position: absolute;
				bottom:0;
				font-size: 15px;
			}
		}
		.index,.dingd{
			view{
				margin-top:3px;
			}
		}
		.xiaox,.my{
			text{
				font-size: 22px;
			}
		}
	}
	.active{
		color:#e11c1c;
		text{
			
		}
	}
	
</style>
<!-- #endif -->