<template>
	<view class="page-bg">
		<navBar></navBar>
		<view class="gongj-top">
			<!-- #ifndef MP-WEIXIN -->
			<view class="gongj-fanhui" @click="fanhui">
				<text class="iconfont icon-previous_step"></text>
			</view>
			<!-- #endif -->
			<view class="gongj-title">工匠列表</view>
			<navigator url="../osousuo/osousuo" hover-class="none"><text class="iconfont icon-sousuo3"></text></navigator>
		</view>
		<view class="gongj-tab">
			<view class="tabbar" v-for="(tab,index) in tabs" :key="index" @click="otab(index)" :class="{active:oactive === index}">
				{{tab}}
			</view>
		</view>
		<scroll-view scroll-y class="gongj-main">
			<view class="gongj-list">
				<view class="gongj-xiangq" @click="tiaozhuan">
					<image src="../../static/jks.jpg" class="gongj-toux"></image>
					<view class="gongj-xiangq-right">
						<view class="gongj-xiangq-top">
							<view class="gongj-name">
								刘老六
							</view>
							<view class="gongj-rix">
								500￥/日
							</view>
						</view>
						<view class="gongj-xiangq-bottom">
							<view class="gongj-zhiwei">
								木工 - 电工 - 油漆工
							</view>
							<view class="gongj-dizhi">
								朝阳区
							</view>
						</view>
					</view>
				</view>
				<view class="gongj-xiangq">
					<image src="../../static/jks.jpg" class="gongj-toux"></image>
					<view class="gongj-xiangq-right">
						<view class="gongj-xiangq-top">
							<view class="gongj-name">
								刘老六
							</view>
							<view class="gongj-rix">
								500￥/日
							</view>
						</view>
						<view class="gongj-xiangq-bottom">
							<view class="gongj-zhiwei">
								木工 - 电工 - 油漆工
							</view>
							<view class="gongj-dizhi">
								朝阳区
							</view>
						</view>
					</view>
				</view>
				<view class="gongj-xiangq">
					<image src="../../static/jks.jpg" class="gongj-toux"></image>
					<view class="gongj-xiangq-right">
						<view class="gongj-xiangq-top">
							<view class="gongj-name">
								刘老六
							</view>
							<view class="gongj-rix">
								500￥/日
							</view>
						</view>
						<view class="gongj-xiangq-bottom">
							<view class="gongj-zhiwei">
								木工 - 电工 - 油漆工
							</view>
							<view class="gongj-dizhi">
								朝阳区
							</view>
						</view>
					</view>
				</view>
				
			</view>
		</scroll-view>
		<view class="shaixuan-box" v-if="oshow" @click="oshow=false">
			<view class="shaixuan-zhiwei">
				<scroll-view scroll-y>
					<view class="shaixuan-list">
						<view class="shaixuan-gongz" v-for="(shaix,index) in shaixs" :key="index" @click.stop="gongl(index)" hover-class="active">
							{{shaix}}
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>


<script>
	import navBar from "../../components/nav-bar.vue";
	import UniPopup from "../../components/uni-popup.vue"
	export default {
		data() {
			return {
				tabs:["综合排序","工类筛选","距离最近","信誉认证"],
				oactive:0,
				oshow:false,
				shaixs:["木工","瓦工","电工","油漆工","抹灰工","钢筋工","焊工","架子工","混凝土工","安装工","水电工","铺装工","防水工","吊顶工","管道工","普工/杂工","学徒工","项目经理","监理","劳务经理","模板工","爆破工","养护工","古建工","拆除工","工程机械","园林绿化","其它工种"],
				oindex:"木工"
			};
		},
		onLoad() {
			
		},
		methods:{
			fanhui(){
				uni.navigateBack()
			},
			tiaozhuan(){
				uni.navigateTo({
					url: 'gongjiang-page'
				});
			},
			gongl(index){
				this.oindex = this.shaixs[index];
				console.log(this.oindex);
				this.oshow = false;
			},
			otab(index){
				this.oactive = index;
				if(index == 0){
					this.data = this.data0
				}else if(index == 1){
					this.data = this.data1
					this.oshow = true;
				}else if(index == 2){
					this.data = this.data2
				}else if(index == 3){
					this.data = this.data3
				}
			},
			
		},
		components:{
			navBar,
			UniPopup
		}
	};
</script>


<style lang="less">
	@import url("gongjiang.less");
</style>
