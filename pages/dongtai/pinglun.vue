<template>
	<view class="pinglun-page">
		<view class="dongtai">
			{{cont}}
		</view>
		<pinglun :pinglData="datas" @getdata="pingl"></pinglun>
	</view>
</template>

<script>
	import pinglun from "../../components/ping-lun.vue"
	export default {
		data() {
			return {
				cont:"",
				datas:[
					{
						name: "酷酷的天霸",
						img: "../../static/gj.jpg",
						time1: "2019/4/19",
						time2: "21:59",
						cont: "可以，小编写的非常好，文章中生动形象的描述了一段发生火灾时，人们该如何逃跑，而不是灭火！"
					},
					{
						name: "小编二号",
						img: "../../static/jks.jpg",
						time1: "2019/4/18",
						time2: "17:30",
						cont: "惊天还原法国巴黎惨案，巴黎圣母院滔天大火，是人类文明史上的一个重大损失"
					},
					{
						name: "瓦工甲",
						img: "../../static/gr.jpg",
						time1: "2019/4/17",
						time2: "12:28",
						cont: "赞我，我要上一楼！"
					},
					{
						name: "木工乙",
						img: "../../static/zl.jpg",
						time1: "2019/4/16",
						time2: "9:13",
						cont: "我要找工作，谁能翻一下牌。"
					}
				],
				fabpl:{
					name: this.$store.state.nicheng.oname,
					img: this.$store.state.ziliao.osrc,
					time1: "2019/4/24",
					time2: "9:02",
					cont: ""
				}
			}
		},
		onLoad(event) {
			this.cont = event.cont;
		},
		methods: {
			pingl(e){
				this.fabpl.cont = e;
				this.datas.push(this.fabpl);
			}
		},
		components:{
			pinglun
		}
	}
</script>

<style lang="less">
	@import url("pinglun.less");
</style>
