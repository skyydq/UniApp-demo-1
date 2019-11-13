<template>
	<view>
		<navBar></navBar>
		<view class="sous-top">
			<view class="sous-top2">
				<!-- #ifndef MP-WEIXIN -->
				<view class="sous-icon iconfont icon-previous_step" @click="fanhhui"></view>
				<!-- #endif -->
				<view class="sous-input">
					<text class="sous-sous iconfont icon-sousuo"></text>
					<input type="text" placeholder="请输入搜索内容" class="sous-txt"></input>
				</view>
				<view class="sous-wz">
					<view class="sous-but">
						搜索
					</view>
				</view>
			</view>
		</view>
		<view class="sous-cont">
			<view class="sous-xuanz">
				分类选择：
			</view>
			<view class="sous-fenleis">
				<view @click="okey = 1" :class="{active:okey == 1}">全部</view>
				<view @click="okey = 2" :class="{active:okey == 2}">工匠</view>
				<view @click="okey = 3" :class="{active:okey == 3}">设备</view>
				<view @click="okey = 4" :class="{active:okey == 4}">公司</view>
				<view @click="okey = 5" :class="{active:okey == 5}">资讯</view>
				
			</view>
		</view>
		<view class="sousuo-border">
			
		</view>
		<view class="remen-sous" v-if="oremen == 1">
			<view class="remen-title">
				<text class="remen-text">历史搜索：</text>
				<text class="remen-icon iconfont icon-shanchu6" @click="remen"></text>
			</view>
			<view class="remen-cont">
				<text>招工</text><text>卯合卯空间</text>
			</view>
		</view>
		<view class="remen-sous">
			<view class="remen-title">
				<text class="remen-text">热门搜索：</text>
			</view>
			<view class="remen-cont">
				<text>招工</text><text>卯合卯空间</text><text>哈哈哈哈</text><text>瓦工</text>
				<text>招工</text><text>卯合卯空间设计</text><text>哈哈哈哈</text><text>瓦工</text>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "../../../components/nav-bar.vue";
	export default {
		data() {
			return {
				oremen: 1,
				okey:1
			};
		},
		methods:{
			fanhhui(){
				uni.navigateBack();
			},
			remen(){
				this.oremen = 0
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	@import url("sous.css");
</style>
