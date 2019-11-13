<template>
	<view class="page-bg">
		<navBar></navBar>
		<view class="header-top">
			<view class="header-top2">
				<view class="header-input">
					<navigator :url="inputUrl" hover-class="none">
						<text class="header-sous iconfont icon-sousuo"></text>
					</navigator>
					<navigator :url="inputUrl" hover-class="none">
						<input type="text" placeholder="搜索公司、资讯、工友" class="header-txt" disabled="true"></input>
					</navigator>
				</view>
				<view class="hedaer-wz">
					<navigator url="../index/chengs/chengs" hover-class="none" class="hedaer-wz2" v-if="howe1">
						<text style="padding-right:3px;">{{weizhi}}</text>
						<text class="iconfont icon-dizhiguanli" style="font-size: 14px;"></text>
					</navigator>
					<view v-else class="hedaer-wz2">
						<navigator :url="admin[0]" hover-class="none">
							<text>登录</text>
						</navigator>
						<navigator :url="admin[1]" hover-class="none">
							<text>注册</text>
						</navigator>
					</view>
				</view>
			</view>
		</view>
		
		<swiper :indicator-dots="true" :autoplay="true" indicator-active-color="#ffffff" :interval="3000" :duration="1000" class="banner">
			<swiper-item>
				<navigator :url="ourl[0]" hover-class="none">
					<image src="../../static/banner/banner01.jpg" mode=""></image>
				</navigator>
			</swiper-item>
			<swiper-item>
				<navigator :url="ourl[1]" hover-class="none">
					<image src="../../static/banner/banner02.jpg" mode=""></image>
				</navigator>
			</swiper-item>
		</swiper>
		<view class="index-gg margin-b">
			<navigator :url="ourl[0]" hover-class="none">
				<image src="../../static/gg.jpg" class="gg"></image>
			</navigator>
		</view>
		<view class="index-retui margin-b bg-fff">
			
			<retuiTitle :otitle="retuiTitle[0]" ourl="../gongjiang/gongjiang"></retuiTitle>
			
			<scroll-view scroll-x="true" class="scrolls">
				<view class="retui-countent-scrolls">
					<navigator open-type="navigate" url="../gongjiang/gongjiang-page" class="retui-countent-scrolla" hover-class="none">
						<view class="retui-countent-scroll">
							<image src="../../static/gj.jpg" class="retui-content-img"></image>
							<view class="retui-content-dj">
								{{gj.gjOccupation}} {{gj.gjGraded}}
							</view>
							<view class="retui-content-name">
								{{gj.gjName}}
							</view>
							<view class="retui-content-but">
								邀请TA
							</view>
						</view>
					</navigator>
					<navigator open-type="navigate" :url="ourl[0]" class="retui-countent-scrolla" hover-class="none">
						<view class="retui-countent-scroll">
							<image src="../../static/gj.jpg" mode="" class="retui-content-img"></image>
							<view class="retui-content-dj">
								{{gj.gjOccupation}} {{gj.gjGraded}}
							</view>
							<view class="retui-content-name">
								{{gj.gjName}}
							</view>
							<view class="retui-content-but">
								邀请TA
							</view>
						</view>
					</navigator>
					<navigator open-type="navigate" :url="ourl[0]" class="retui-countent-scrolla" hover-class="none">
						<view class="retui-countent-scroll">
							<image src="../../static/gj.jpg" mode="" class="retui-content-img"></image>
							<view class="retui-content-dj">
								{{gj.gjOccupation}} {{gj.gjGraded}}
							</view>
							<view class="retui-content-name">
								{{gj.gjName}}
							</view>
							<view class="retui-content-but">
								邀请TA
							</view>
						</view>
					</navigator>
					<navigator open-type="navigate" :url="ourl[0]" class="retui-countent-scrolla" hover-class="none">
						<view class="retui-countent-scroll">
								<image src="../../static/gj.jpg" mode="" class="retui-content-img"></image>
								<view class="retui-content-dj">
									{{gj.gjOccupation}} {{gj.gjGraded}}
								</view>
								<view class="retui-content-name">
									{{gj.gjName}}
								</view>
								<view class="retui-content-but">
									邀请TA
								</view>
						</view>
					</navigator>
				</view>
			</scroll-view>
		</view>
		
		
		<view class="index-gg2">
			<navigator :url="ourl[1]" hover-class="none">
				<image src="../../static/gg2.jpg" class="gg2"></image>
			</navigator>
		</view>
		
		
		<view class="retui-bz bg-fff margin-b">
			<retuiTitle :otitle="retuiTitle[1]" ourl="../banzu/banzu"></retuiTitle>
			<view class="retui-border"></view>
			<scroll-view scroll-x="true" class="scrolls" @scrolltolower="scroll">
				<view class="retui-countent-scrolls">
					<view class="retui-countent-scrollb">
						<navigator url="" hover-class="none">
							<view class="retui-bz-img">
								<image src="../../static/rt.jpg" class="retui-bz-img1"></image>
								<image src="../../static/bf.png" class="retui-bz-img2"></image>
							</view>
							<view class="retui-bz-name">
								班组长：{{bz.bzName}}
							</view>
							<view class="retui-bz-occupation">
								{{bz.bzOccupation}}
							</view>
							<view class="retui-bz-qit">
								<view>
									团队规模：{{bz.bzZuobiao[0]}}-{{bz.bzZuobiao[1]}}人
								</view>
								<view>
									接工省份：{{bz.bzDizhi}}
								</view>
							</view>
							<image :src="bz.bzTouxiang" class="bz-touxiang"></image>
						</navigator>
					</view>
					<view class="retui-countent-scrollb">
						<navigator url="" hover-class="none">
							<view class="retui-bz-img">
								<image src="../../static/rt.jpg" class="retui-bz-img1"></image>
								<image src="../../static/bf.png" class="retui-bz-img2"></image>
							</view>
							<view class="retui-bz-name">
								班组长：{{bz.bzName}}
							</view>
							<view class="retui-bz-occupation">
								{{bz.bzOccupation}}
							</view>
							<view class="retui-bz-qit">
								<view>
									团队规模：{{bz.bzZuobiao[0]}}-{{bz.bzZuobiao[1]}}人
								</view>
								<view>
									接工省份：{{bz.bzDizhi}}
								</view>
							</view>
							<image :src="bz.bzTouxiang" class="bz-touxiang"></image>
						</navigator>
					</view>
					<view class="retui-countent-scrollb">
						<navigator url="" hover-class="none">
							<view class="retui-bz-img">
								<image src="../../static/rt.jpg" class="retui-bz-img1"></image>
								<image src="../../static/bf.png" class="retui-bz-img2"></image>
							</view>
							<view class="retui-bz-name">
								班组长：{{bz.bzName}}
							</view>
							<view class="retui-bz-occupation">
								{{bz.bzOccupation}}
							</view>
							<view class="retui-bz-qit">
								<view>
									团队规模：{{bz.bzZuobiao[0]}}-{{bz.bzZuobiao[1]}}人
								</view>
								<view>
									接工省份：{{bz.bzDizhi}}
								</view>
							</view>
							<image :src="bz.bzTouxiang" class="bz-touxiang"></image>
						</navigator>
					</view>
				</view>
			</scroll-view>
		</view>
		
		<view class="index-gg2">
			<navigator :url="ourl[1]" hover-class="none">
				<image src="../../static/gg3.jpg" class="gg2"></image>
			</navigator>
		</view>
		
		<view class="bg-fff index-zx">
			<retuiTitle :otitle="retuiTitle[2]" ourl="../news/news"></retuiTitle>
			<view class="retui-border"></view>
			<view class="zx-list">
				<navigator :url="retuiUrl[0]" class="zx-cont"  hover-class="none">
					<view class="zx-title">
						{{zx.zxTitle}}
					</view>
					<view class="zx-imgs">
						<view v-for="(oimg,imgIndex) in zx.zxImg" class="zx-img" :key="imgIndex">
							<image :src="oimg"></image>
						</view>
					</view>
					<view class="zx-time">
						{{zx.zxTime}}
					</view>
				</navigator>
				<navigator :url="retuiUrl[0]" class="zx-cont" hover-class="none">
					<view class="zx-title">
						{{zx.zxTitle}}
					</view>
					<view class="zx-imgs">
						<view v-for="oimg in zx.zxImg" class="zx-img">
							<image :src="oimg"></image>
						</view>
					</view>
					<view class="zx-time">
						{{zx.zxTime}}
					</view>
				</navigator>
				<navigator :url="retuiUrl[0]" class="zx-cont" hover-class="none">
					<view class="zx-title">
						{{zx.zxTitle}}
					</view>
					<view class="zx-imgs">
						<view v-for="oimg in zx.zxImg" class="zx-img">
							<image :src="oimg"></image>
						</view>
					</view>
					<view class="zx-time">
						{{zx.zxTime}}
					</view>
				</navigator>
			</view>
			<view class="zx-more">
				<navigator url="../news/news" hover-class="none">
					查看更多>
				</navigator>
			</view>
		</view>
		<view class="dixian">
			———— 我可是个有底线的人 ————
		</view>
	</view>
</template>

<script>
	
	import retuiTitle from "../../components/retui-title.vue";
	import navBar from "../../components/nav-bar.vue";
	
	export default {
		data() {
			return {
				inputUrl:"../osousuo/osousuo",
				gj:{
					gjName: "盖伦",
					gjOccupation: "木工",
					gjGraded: "五星工匠"
				},
				retuiTitle:['热推工匠','热推班组','建筑资讯'],
				retuiUrl:['',''],
				ourl:['../my/my',''],
				bz:{
					bzName:"金克斯",
					bzOccupation:"专业木模劳务队",
					bzTouxiang:"../../static/jks.jpg",
					bzZuobiao:[11,19],
					bzDizhi:'北京'
				},
				zx:{
					zxTitle:"瓦匠，行将消逝的手艺，如何传承",
					zxImg:["../../static/zx1.jpg","../../static/zx2.jpg","../../static/zx3.jpg"],
					zxTime:"2019/4/01"
				},
				admin:['../pages/admin/admin','../pages/admin/admin2'],
				howe1:true
			}
		},
		onLoad() {
			
		},
		computed:{
			weizhi:function(){
				return this.$store.state.dizhi
			}
		},
		methods: {
			
			howe:function(){
				
			}
		},
		components:{
			retuiTitle,
			navBar
		}
	}
</script>

<style>
	@import url("index.css");
</style>
