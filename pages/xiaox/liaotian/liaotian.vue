<template>
	<view>
		<navBar></navBar>
		<view class="liaotian-top">
			<view class="liaot-fanhui" @click="fanhui">
				<text class="iconfont icon-previous_step"></text>
			</view>
			<view class="liaot-title">{{xiaoxs.otitle}}</view>
			<navigator url=""><text class="iconfont icon-dian3"></text></navigator>
		</view>
		<view class="liaot-cont">
			<view class="onhowe" @click="ohowe" v-for="(ohowe1,oindex) in howe1" :key="oindex">
				<view class="onhowe-neir">
					<view class="onhowe-title">豪哥</view>
					<view class="onhowe-cont">
						{{ohowe1}}
					</view>
				</view>
				<view class="onhowe-zl">
					<view class="onhowe-img"><image :src="xiaoxs.oimg" class=""></image></view>
				</view>
			</view>
			<view class="nohowe" v-for="(ohowe2,oindex2) in howe2" :key="oindex2">
				<view class="nohowe-zl">
					<view class="nohowe-img"><image :src="xiaoxs.oimg" class=""></image></view>
					<view class="nohowe-neir">
						<view class="nohowe-title">{{xiaoxs.otitle}}</view>
						<view class="nohowe-cont" @click="ohowe">
							{{ohowe2}}
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- #ifdef APP-PLUS || MP -->
		<view class="liaot-shur">
			<view class="liaot-yuy" @click="yuyin">
				<text class="iconfont icon-yuyin3" v-if="oyuyin == 1"></text>
				<text class="iconfont icon-jianpan" v-if="oyuyin == 2"></text>
			</view>
			<view class="liaot-input">
				<input type="text" value="" confirm-type="send" v-if="oyuyin == 1" />
				<view class="liaot-yuyin" v-if="oyuyin == 2" @touchstart="shuohua" @touchend="endshuohua">
					{{oshuohua}}
				</view>
			</view>
			<view class="liaot-gengd">
				<text class="iconfont icon-xiaolian1"></text>
				<text class="iconfont icon-jiahao"></text>
			</view>
		</view>
		<!-- #endif -->
		<!-- #ifdef H5 -->
		<view class="liaot-shur">
			<view class="liaot-yuy">
				<text class="iconfont icon-yuyin3"></text>
			</view>
			<view class="liaot-input">
				<input type="text" value="" confirm-type="send" confirm-hold="ture" />
			</view>
			<view class="liaot-gengd">
				<text class="iconfont icon-xiaolian1"></text>
				<text class="iconfont icon-jiahao"></text>
			</view>
		</view>
		<!-- #endif -->
	</view>
</template>

<script>
	import navBar from "../../../components/nav-bar.vue";
	/* #ifndef H5 */
	const recorderManager = uni.getRecorderManager();
	const innerAudioContext = uni.createInnerAudioContext();
	innerAudioContext.autoplay = true;
	/* #endif */
	export default {
		data() {
			return {
				xiaoxs:{
					id:1,
					oimg:"../../../static/gj.jpg",
					otitle:"卯合卯"
				},
				oyuyin:1,
				oshuohua:"长按说话",
				howe1:["666","哈哈"],
				howe2:["恐怖如斯","切 这有啥的"],
				voicePath:"",
				otext:[
					{
						id:1,
						ocont:"在吗？",
						ctime: new Date().toLocaleString()
					},
					{
						id:2,
						ocont:"在的，怎么了？"
					},
					{
						id:1,
						ocont:"哦哦，下班没"
					},
					{
						id:2,
						ocont:"没呢，加会班，有事？"
					},
					{
						id:1,
						ocont:"哦哦，明天我*￥&……￥%&……￥&（）￥#*）——@#￥%……&*（）"
					}
				]
			};
		},
		onLoad(e) {
			this.xiaoxs.id = e.okey;
			this.xiaoxs.oimg = e.img;
			this.xiaoxs.otitle = e.name;
			
			// #ifndef H5
			var _me = this;
			recorderManager.onStop(
				function (res) {
					console.log('recorder stop' + JSON.stringify(res));
					_me.voicePath = res.tempFilePath;
				}
			);
			//#endif
		},
		methods:{
			fanhui(){
				uni.navigateBack()
			},
			yuyin(){
				/* #ifndef H5 */
				if(this.oyuyin == 1){
					this.oyuyin = 2
				}else if(this.oyuyin == 2){
					this.oyuyin = 1
				}
				/* #endif */
			},
			shuohua(){
				/* #ifndef H5 */
				this.oshuohua = "正在说话";
				recorderManager.start(1000);
				console.log("开始录音")
				/* #endif */
			},
			endshuohua(){
				/* #ifndef H5 */
				this.oshuohua = "长按说话";
				recorderManager.stop();
				console.log("结束录音");
				/* #endif */
			},
			ohowe(){
				/* #ifndef H5 */
				if (this.voicePath) {
					innerAudioContext.src = this.voicePath;
					innerAudioContext.play();
				}
				/* #endif */
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	@import url("liaotian.css");
</style>
