<template>
	<view>
		<navBar></navBar>
		<view class="xiaoxi-top">
			<view class="xiaox-left">消息列表</view>
			<view class="xiaox-right">
				<navigator url="../sousuo2/sousuo2" hover-class="none"><text class="xiaox-icon1 iconfont icon-sousuo"></text></navigator>
				<navigator url="../xiaox/phones/phones" hover-class="none"><text class="xiaox-icon2 iconfont icon-tuandui"></text></navigator>
			</view>
		</view>
		
		<view class="xiaox-neirong">
			<view class="xiaox-list" v-for="(xiaox,oindex) in xiaoxs" :key="oindex" @longpress="longpress" hover-class="xiaox-bgcolor" v-if="zanwu == 1">
				<navigator :url="'../xiaox/chat?okey=' + xiaox.id +'&name=' + xiaox.otitle + '&img=' + xiaox.oimg" class="xiaox-url" hover-class="none">
				<!-- <navigator :url="'liaotian/liaotian?okey=' + xiaox.id +'&name=' + xiaox.otitle + '&img=' + xiaox.oimg" class="xiaox-url" hover-class="none"> -->
					<view class="xiaox-img-one" v-if="xiaox.otype == 1 || xiaox.otype == 2">
						<image :src="xiaox.oimg" class=""></image>
					</view>
					<view class="xiaox-img-two" v-if="xiaox.otype == 3">
						<image v-for="(xximg,xxindex) in xiaox.oimg" :key="xxindex" :src="xximg" class=""></image>
					</view>
					<view class="xiaox-list1">
						<view class="xiaox-title">{{xiaox.otitle}}</view>
						<view class="xiaox-cont">{{xiaox.ocont}}</view>
					</view>
					<view class="xiaox-list2">
						<view class="xiaox-time">{{xiaox.otime}}</view>
						<view :class="{'xiaox-tishi':xiaox.otishi !==''}">{{xiaox.otishi}}</view>
					</view>
				</navigator>
			</view>
			<view class="zanwuxx" v-if="zanwu == 2">
				<text class="zanwu-icon iconfont icon-zanwuxiaoxi"></text>
				暂无消息
			</view>
		</view>
		
		
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue";
	export default {
		data() {
			return {
				xiaoxs:[
					{
						id:0,
						oimg:"../../static/logo2.jpg",
						otitle:"系统消息",
						ocont:"北京卯合卯科技发展有限公司......",
						otime:"10:16",
						otishi:"16",
						otype:1 //系统消息
					},
					{
						id:1,
						oimg:"../../static/gj.jpg",
						otitle:"朋友01",
						ocont:"在？",
						otime:"12:02",
						otishi:"1",
						otype:2 //好友消息
					},
					{
						id:2,
						oimg:"../../static/jks.jpg",
						otitle:"朋友02",
						ocont:"你好！",
						otime:"09:46",
						otishi:"",
						otype:2
					},
					{
						id:3,
						oimg:[
							"../../static/gj.jpg",
							"../../static/jks.jpg",
							"../../static/logo2.jpg",
							"../../static/toux.jpg"
						],
						otitle:"群组01",
						ocont:"你们好！",
						otime:"14:25",
						otishi:"99+",
						otype:3 //群组消息
					},
					{
						id:4,
						oimg:"../../static/jks.jpg",
						otitle:"朋友03",
						ocont:"你好！",
						otime:"前天",
						otishi:"",
						otype:2
					}
				],
				zanwu: 1
			};
		},
		onLoad() {
			if(this.xiaoxs.length == 0){
				tihs.zanwu = 2
			}
		},
		methods:{
			longpress(){
				console.log("长按删除");
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	@import url("xiaox.css");
</style>
