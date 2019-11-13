<template>
	<view>
		<navBar></navBar>
		<view class="me-top">
			<image src="../../static/me.jpg" class="me-bg-img"></image>
			<view class="me-nav">
				<view class="">
					个人中心
				</view>
				<navigator url="../my/shezhi/shezhi"><text class="me-nav-icon iconfont icon-set"></text></navigator>
			</view>
			<view class="me-bar">
				<view class="bar-left" @click="ziliao">
					<view class="me-toux">
						<image :src="oziliao3" class="toux-img"></image>
					</view>
					<view class="me-title">
						<view class="title-otitle">{{oziliao1}}</view>
						<view class="title-oqianm">{{oziliao2}}</view>
					</view>
				</view>
				<view class="bar-rigth" @click="qianDao">
					<view :animation="animationData" class="qiandao-jifen animation-opacity">积分+1</view>
					<view class="bar-qiandao">{{qiandao}}</view>
				</view>
			</view>
		</view>
		<view class="me-cont">
			<view class="me-cont-one">
				<navigator class="me-icon1 me-dtfb" url="../dongtai/dongtai">
					<view class="me-icon iconfont icon-dianping"></view>
					<view>个人动态</view>
				</navigator>
				<view class="me-icon1 me-sclb">
					<view class="me-icon iconfont icon-shoucang"></view>
					<view>收藏列表</view>
				</view>
				<view class="me-icon1 me-jbzl">
					<text class="me-icon iconfont icon-pingjia"></text>
					<view>基本资料</view>
				</view>
				<view class="me-icon1 me-wdjl">
					<text class="me-icon iconfont icon-dingdan"></text>
					<view>我的简历</view>
				</view>
				<view class="me-icon1 me-wdbz">
					<text class="me-icon iconfont icon-team"></text>
					<view>我的班组</view>
				</view>
				<view class="me-icon1 me-grzh">
					<text class="me-icon iconfont icon-qianbao"></text>
					<view>个人账户</view>
				</view>
			</view>
			<view class="me-cont-two">
				<view class="me-icon2 me-gcdd">
					<text class="me-icon iconfont icon-dingdan1"></text>
					<view>工程订单</view>
				</view>
				<view class="me-icon2 me-wdbq">
					<text class="me-icon iconfont icon-biaoqian1"></text>
					<view>我的标签</view>
				</view>
				<view class="me-icon2 me-jfdh">
					<text class="me-icon iconfont icon-qianbao1"></text>
					<view>积分兑换</view>
				</view>
				<view class="me-icon2 me-jfsc">
					<text class="me-icon iconfont icon-shangcheng"></text>
					<view>积分商城</view>
				</view>
				<view class="me-icon2 me-smrz">
					<text class="me-icon iconfont icon-renzheng5"></text>
					<view>实名认证</view>
				</view>
				<view class="me-icon2 me-qyrz">
					<text class="me-icon iconfont icon-renzheng3"></text>
					<view>企业认证</view>
				</view>
				<view class="me-icon2 me-xyrz">
					<text class="me-icon iconfont icon-huiyuan"></text>
					<view>信誉认证</view>
				</view>
			</view>
		</view>
		
		<!-- 截取头像 -->
		<view class="huihua">
			<movable-area class="tuodong">
				<movable-view style="" direction="all" x="" y="" scale="true" scale-min="" class="tuodong2">
					<image style="" :src="meTop.osrc" class="tuo-img"></image>
				</movable-view>
			</movable-area>
			<canvas canvas-id="jietu" class="huabu"></canvas>
			<view class="queren">
				确认截取
			</view>
		</view>
		<!-- 截取头像 -->
		
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue";
	
	export default {
		data() {
			return {
				meTop:{
					osrc:"../../static/jks.jpg",
					otitle:"金克斯",
					qianm:"金克斯的含义就是金克斯"
				},
				qiandao:"签到",
				animationData: {},
				trueFalse: true
			};
		},
		onLoad() {
			var _me = this;
			var new_date = new Date();
			if(_me.meTop.osrc == ""){
				_me.meTop.osrc = "../../static/toux.jpg"
			}
			if(_me.meTop.otitle == ""){
				_me.meTop.osrc = "请设置昵称"
			}
			if(_me.meTop.oqianm == ""){
				_me.meTop.osrc = "请设置个人签名"
			}
			
			
			uni.getStorage({
				key:'qiandao',
				success(e) {
					if(e.data[0] == true && e.data[1] == new_date.getDate()){
						_me.qiandao = "已签到";
						_me.trueFalse = false;
					}
				}
			});
		},
		computed:{
			oziliao1:function(){
				return this.$store.state.nicheng.oname
			},
			oziliao2:function(){
				return this.$store.state.ziliao.ojianjie
			},
			oziliao3:function(){
				return this.$store.state.ziliao.osrc
			}
		},
		methods: {
			ziliao(){
				uni.navigateTo({
					url: '../my/ziliao'
				});
			},
			qianDao(){
				var _me = this;
				var new_date2 = new Date();
				if(_me.trueFalse){
					uni.setStorage({
						key: 'qiandao',
						data: [true,new_date2.getDate()],
						success: function () {
							_me.trueFalse = false;
							_me.qiandao = "已签到";
							// #ifdef APP-PLUS || MP-WEIXIN
							
							var animation = uni.createAnimation({
								duration: 1000,
								timingFunction: 'ease',
							})
										
							_me.animation = animation;
							_me.animation.translateY(-20).opacity(1).step({
								duration: 400
							});
							_me.animationData = _me.animation.export();
							// 还原动画
							setTimeout(function(){
								_me.animation.translateY(0).opacity(0).step({
									duration: 0
								});
								_me.animationData = _me.animation;
							}.bind(_me),1500);
							//#endif
						}
					});
				}
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	@import url("my.css");
</style>
