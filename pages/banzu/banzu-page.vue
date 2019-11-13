<template>
	<view class="page-bg page-banzu">
		<view class="page-top">
			<image :src="data.img" class="page-banner"></image>
			<view class="page-fenl">
				{{data.title}}
			</view>
		</view>
		<view class="page-zil">
			<view class="banzu-title">
				班组资料
			</view>
			<view class="page-title">
				<view class="page-name">
					工长：{{data.name}}
				</view>
				<view class="page-biaoq">
					标签：
					<text v-for="(biaoq,index) in data.biaoq" :key="index">
						{{biaoq}}
					</text>
				</view>
				<view class="page-jianj">
					班组简介：
					<view class="jianj-cont" :class="fold ? 'fold' : 'unfold'"  v-if="data.textfont !==''" >
						<label>
							<span>{{data.textfont}}</span>
						</label>
					</view>
					<view class="jianj-show-hide">
						<view class="jianj-show" @click="btn" v-show="fold">展开<text class="iconfont icon-gengduo2"></text></view>
						<view class="jianj-hide" @click="btn" v-show="!fold">收起<text class="iconfont icon-gengduo4"></text></view>
					</view>
				</view>
			</view>
		</view>
		<view class="page-renyuan">
			<view class="banzu-title">
				<view>
					人员列表
				</view>
				<view class="banzu-title-right">
					人员规模：{{data.renshu}}人
				</view>
			</view>
			<scroll-view scroll-x="true" class="banz-gund">
				<view class="banz-scroll">
					<view>
						<image :src="data.toux" class="banz-reny-img"></image>
						<text class="banz-biaoq">工长</text>
						<text class="banz-name">{{data.name}}</text>
					</view>
					<view v-for="(reny,oindex) in data.list" :key="oindex">
						<image :src="reny.img2" class="banz-reny-img"></image>
						<text class="banz-biaoq">{{reny.biaoq2}}</text>
						<text class="banz-name">{{reny.name}}</text>
					</view>
				</view>
			</scroll-view>
		</view>
		<view class="page-xiangm">
			<view class="banzu-title">
				项目展示
			</view>
			<view class="banzu-xiangm" v-for="(xiangmu,pindex) in data.xiangm" :key="pindex">
				<view class="xiangm-title">
					<text>{{xiangmu.title2}}</text>
					<text class="xiangm-guim">建筑规模：{{xiangmu.guime}}㎡</text>
				</view>
				<view class="xiangm-img">
					<image :src="xiangmu.image"></image>
				</view>
				<view class="xiangm-jianj">
					项目简介：<br/>
					<scroll-view scroll-y class="xiangm-text">
						<view v-if="xiangmu.textfont2 !==''">
							{{xiangmu.textfont2}}
						</view>
					</scroll-view>
					 <!-- :class="xfold ? 'xfold' : 'unxfold'" -->
					<!-- <view class="xiangm-hide-show">
						<view class="jianj-show" @click="btn2" v-show=" ">展开<text class="iconfont icon-gengduo2"></text></view>
						<view class="jianj-hide" @click="btn2" v-show="!xfold">收起<text class="iconfont icon-gengduo4"></text></view>
					</view> -->
				</view>
			</view>
		</view>
		<yaoBar :phone="data.phone" barLeft="联系工长"></yaoBar>
	</view>
</template>

<script>
	import yaoBar from "../../components/yaoqBar.vue"
	export default {
		data(){
			return{
				fold:true,
				xfold:true,
				data:[],
				data2: [
					{
						name:"王大壮",
						key:0,
						biaoq:["普通班组","团队配合","信誉认证","质量保证"],
						toux:"../../static/toux2.jpg",
						title:"土木工程建设",
						renshu:20,
						phone:"12345678910",
						img:"../../static/banz1.jpg",
						textfont: `实现中华民族伟大复兴是一个长期而艰巨的过程，合抱之木，生于毫末；九层之台，起于垒土。
								需要凝聚磅礴之力，才能实现质的飞跃实现中华民族伟大复兴的中国梦汇聚了强大的“中国力量”
								。`,
						xiangm: [
							{
								title2: "浙江省温岭市大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目浙江省温岭市大溪镇的城镇建设,
									突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰满城市形象。2005年共投入3000多万元，用
									于城镇基础设施建设，在中心城区实施“东延北扩西改”战略，建立“四纵四横”道路骨架。前31层皇家花园和
									25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区主干道一级公路的两侧实施
									亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "温岭市浙江省大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `80年代开始扩展，近年继续拉大城市框架，进一步丰浙江省温岭市大溪镇的城镇建设突飞猛进。
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "大溪镇浙江省温岭市",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `浙江省温岭市大溪镇的城镇建设突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							}
						],
						list:[
							{
								name:"王一壮",
								biaoq2: "木工",
								img2: "../../static/gr.jpg"
							},
							{
								name:"王二壮",
								biaoq2: "瓦工",
								img2: "../../static/gc.jpg"
							},
							{
								name:"王三壮",
								biaoq2: "电工",
								img2: "../../static/zl.jpg"
							},
							{
								name:"王一壮",
								biaoq2: "木工",
								img2: "../../static/gr.jpg"
							},
							{
								name:"王二壮",
								biaoq2: "瓦工",
								img2: "../../static/gc.jpg"
							}
						]
					},
					{
						name:"刘老六",
						key:1,
						biaoq:["优质班组","团队配合"],
						toux:"../../static/toux3.jpg",
						title:"住宅装修建设",
						renshu:20,
						phone:"23456789101",
						img:"../../static/banz2.jpg",
						textfont: `实现中华民族伟大复兴是一个长期而艰巨的过程，合抱之木，生于毫末；九层之台，起于垒土。
								需要凝聚磅礴之力，才能实现质的飞跃实现中华民族伟大复兴的中国梦汇聚了强大的“中国力量”
								。`,
						xiangm: [
							{
								title2: "浙江省温岭市大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目浙江省温岭市大溪镇的城镇建设,
									突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰满城市形象。2005年共投入3000多万元，用
									于城镇基础设施建设，在中心城区实施“东延北扩西改”战略，建立“四纵四横”道路骨架。前31层皇家花园和
									25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区主干道一级公路的两侧实施
									亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "温岭市浙江省大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `80年代开始扩展，近年继续拉大城市框架，进一步丰浙江省温岭市大溪镇的城镇建设突飞猛进。
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "大溪镇浙江省温岭市",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `浙江省温岭市大溪镇的城镇建设突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							}
						],
						list:[
							{
								name:"刘一六",
								biaoq2: "电工",
								img2: "../../static/zl.jpg"
							},
							{
								name:"刘二六",
								biaoq2: "瓦工",
								img2: "../../static/gc.jpg"
							},
							{
								name:"刘三六",
								biaoq2: "木工",
								img2: "../../static/gr.jpg"
							},
							{
								name:"刘一六",
								biaoq2: "电工",
								img2: "../../static/zl.jpg"
							}
						]
					},
					{
						name:"李小车",
						key:2,
						biaoq:["精英班组","信誉认证","质量保证"],
						toux:"../../static/toux1.jpg",
						title:"砖瓦专业建设",
						renshu:20,
						phone:"34567891012",
						img:"../../static/banz3.jpg",
						textfont: `合抱之木，生于毫末；九层之台，起于垒土。实现中华民族伟大复兴是一个长期而艰巨的过程，
								需要凝聚磅礴之力，才能实现质的飞跃实现中华民族伟大复兴的中国梦汇聚了强大的“中国力量”
								。`,
						xiangm: [
							{
								title2: "浙江省温岭市大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目浙江省温岭市大溪镇的城镇建设,
									突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰满城市形象。2005年共投入3000多万元，用
									于城镇基础设施建设，在中心城区实施“东延北扩西改”战略，建立“四纵四横”道路骨架。前31层皇家花园和
									25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区主干道一级公路的两侧实施
									亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "温岭市浙江省大溪镇",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `80年代开始扩展，近年继续拉大城市框架，进一步丰浙江省温岭市大溪镇的城镇建设突飞猛进。
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							},
							{
								title2: "大溪镇浙江省温岭市",
								guime:"30000",
								image: "../../static/img/q.jpg",
								textfont2: `浙江省温岭市大溪镇的城镇建设突飞猛进。80年代开始扩展，近年继续拉大城市框架，进一步丰
								满城市形象。2005年共投入3000多万元，用于城镇基础设施建设，在中心城区实施“东延北扩西改
								”战略，建立“四纵四横”道路骨架。已建成大溪中学、新世界国际大酒店、十六层信用社大楼，目
								前31层皇家花园和25层荷兰花园正在加紧建设中。今年加大投入，对镇政府广场、河滨公园、城区
								主干道一级公路的两侧实施亮化、绿化、美化工程，使大溪初展小城市风姿。`
							}
						],
						list:[
							{
								name:"李一车",
								biaoq2: "瓦工",
								img2: "../../static/gc.jpg"
							},
							{
								name:"李二车",
								biaoq2: "电工",
								img2: "../../static/zl.jpg"
							},
							{
								name:"李三车",
								biaoq2: "木工",
								img2: "../../static/gr.jpg"
							},
							{
								name:"李一车",
								biaoq2: "瓦工",
								img2: "../../static/gc.jpg"
							},
							{
								name:"李二车",
								biaoq2: "电工",
								img2: "../../static/zl.jpg"
							},
							{
								name:"李三车",
								biaoq2: "木工",
								img2: "../../static/gr.jpg"
							}
						],
					}
				]
			}
		},
		onLoad(even) {
			this.data = this.data2[even.key];
			console.log(this.data);
			this.data.renshu = this.data.list.length;
			
		},
		computed:{
			
		},
		methods:{
			btn(){
				this.fold = !this.fold;
			},
			btn2(){
				this.xfold = !this.xfold;
			}
		},
		components:{
			yaoBar
		}
	}
</script>

<style lang="less">
	@import url("banzu-page.less");
</style>
