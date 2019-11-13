<template>
	<view class="page-bg">
		<navBar></navBar>
		<view class="banzu-top">
			<view class="banzu-fanhui" @click="fanhui">
				<text class="iconfont icon-previous_step"></text>
			</view>
			<view class="banzu-title">班组列表</view>
			<navigator url="../osousuo/osousuo" hover-class="none"><text class="iconfont icon-sousuo3"></text></navigator>
		</view>
		<view class="banzu-tab">
			<view class="tabbar" v-for="(tab,index) in tabs" :key="index" @click="otab(index)" :class="{active:oactive === index}">
				{{tab}}
			</view>
		</view>
		<scroll-view scroll-y class="banzu-main">
			<view class="banzu-cont" v-for="(parts,index2) in data" :key="index2" @click="banzPage(parts)">
				<view class="bz-top">
					<view class="bz-toux">
						<image :src="parts.toux"></image>
					</view>
					<view class="bz-title">
						<text>工头：{{parts.name}}</text>
						<text>{{parts.time}}</text>
					</view>
					<view class="bz-xinyu">
						{{parts.biaoq[parts.id]}}
					</view>
				</view>
				<view class="bz-center">
					<image :src="parts.img"></image>
				</view>
				<view class="bz-bottom">
					<view class="bz-name">
						{{parts.title}}
					</view>
					<view class="bz-xy">
						团队规模：{{parts.renshu}}人以上
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>


<script>
	import navBar from "../../components/nav-bar.vue";
	export default {
		data() {
			return {
				tabs:["综合排序","施工数量","团队信誉","团队规模"],
				oactive:0,
				data:[],
				data0:[{
						name:"王大壮",
						key:0,
						id:2,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux2.jpg",
						title:"土木工程建设",
						renshu:20,
						time:"2019-04-19 16:34:32",
						img:"../../static/banz1.jpg"
					},
					{
						name:"刘老六",
						key:1,
						id:1,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux3.jpg",
						title:"住宅装修建设",
						renshu:20,
						time:"2019-03-18 12:00:32",
						img:"../../static/banz2.jpg"
					},
					{
						name:"李小车",
						key:2,
						id:0,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux1.jpg",
						title:"砖瓦专业建设",
						renshu:20,
						time:"2019-02-17 07:59:32",
						img:"../../static/banz3.jpg"
					}],
				data1:[
					{
						name:"王大壮",
						key:0,
						id:2,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux2.jpg",
						title:"土木工程建设",
						renshu:20,
						time:"2019-04-19 16:34:32",
						img:"../../static/banz1.jpg"
					},
					{
						name:"李小车",
						key:2,
						id:0,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux1.jpg",
						title:"砖瓦专业建设",
						renshu:20,
						time:"2019-02-17 07:59:32",
						img:"../../static/banz3.jpg"
					},
					{
						name:"刘老六",
						key:1,
						id:1,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux3.jpg",
						title:"住宅装修建设",
						renshu:20,
						time:"2019-03-18 12:00:32",
						img:"../../static/banz2.jpg"
					}
				],
				data2:[
					{
						name:"李小车",
						key:2,
						id:0,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux1.jpg",
						title:"砖瓦专业建设",
						renshu:20,
						time:"2019-02-17 07:59:32",
						img:"../../static/banz3.jpg"
					},
					{
						name:"王大壮",
						key:0,
						id:2,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux2.jpg",
						title:"土木工程建设",
						renshu:20,
						time:"2019-04-19 16:34:32",
						img:"../../static/banz1.jpg"
					},
					{
						name:"刘老六",
						key:1,
						id:1,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux3.jpg",
						title:"住宅装修建设",
						renshu:20,
						time:"2019-03-18 12:00:32",
						img:"../../static/banz2.jpg"
					}
				],
				data3:[
					{
						name:"刘老六",
						key:1,
						id:1,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux3.jpg",
						title:"住宅装修建设",
						renshu:20,
						time:"2019-03-18 12:00:32",
						img:"../../static/banz2.jpg"
					},
					{
						name:"王大壮",
						key:0,
						id:2,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux2.jpg",
						title:"土木工程建设",
						renshu:20,
						time:"2019-04-19 16:34:32",
						img:"../../static/banz1.jpg"
					},
					{
						name:"李小车",
						key:2,
						id:0,
						biaoq:["普通班组","优质班组","精英班组"],
						toux:"../../static/toux1.jpg",
						title:"砖瓦专业建设",
						renshu:20,
						time:"2019-02-17 07:59:32",
						img:"../../static/banz3.jpg"
					}
				]
			};
		},
		onLoad() {
			//获取当前时间
// 			var _me = this;
// 			var timestamp = new Date().getTime();
// 			_me.data.time = _me.dateTimeFormatter(parseInt(timestamp));
			//end
			this.data = this.data0
		},
		methods:{
			banzPage(parts){
				uni.navigateTo({
					url: 'banzu-page?key=' + parts.key
				});
			},
			
			fanhui(){
				uni.navigateBack()
			},
			
			otab(index){
				this.oactive = index;
				if(index == 0){
					this.data = this.data0
				}else if(index == 1){
					this.data = this.data1
				}else if(index == 2){
					this.data = this.data2
				}else if(index == 3){
					this.data = this.data3
				}
			},
			
			//获取当前时间 并通过一定的样式展示
			dateTimeFormatter (t) {
			  t = new Date(t).getTime()
			  t = new Date(t)
			  var year = t.getFullYear()
			  var month = (t.getMonth() + 1)
			  month = this.checkAddZone(month)
			 
			  var date = t.getDate()
			  date = this.checkAddZone(date)
			 
			  var hour = t.getHours()
			  hour = this.checkAddZone(hour)
			 
			  var min = t.getMinutes()
			  min = this.checkAddZone(min)
			 
			  var se = t.getSeconds()
			  se = this.checkAddZone(se)
			 
			  return year + '-' + month + '-' + date + ' ' + hour + ':' + min + ':' + se
			},
			checkAddZone (num) {
			  return num<10 ? '0' + num.toString() : num
			}
			//end
		},
		components:{
			navBar
		}
		
	};
</script>


<style lang="less">
	@import url("banzu.less");
</style>
