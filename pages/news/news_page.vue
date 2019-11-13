<template>
    <view class="page-page">
        <!-- <view class="banner2">
            <image class="banner-img" :src="howe.src"></image>
            <view class="banner-title">{{howe.title}}</view>
        </view> -->
		<view class="banner-title">{{howe.title}}</view>
        <view class="article-meta">
            <text class="article-author">来源：{{howe.name}}</text>
            <text class="article-text">发表于：{{howe.time}}</text>
        </view>
        <view class="article-content">
			正文：
            <rich-text :nodes="htmlString"></rich-text>
        </view>
        <!-- #ifdef MP-WEIXIN -->
        <ad v-if="htmlString" unit-id="adunit-01b7a010bf53d74e"></ad>
        <!-- #endif -->
		<view class="mianze">
			（免责提示：本文版权为原作者所有，内容仅供学习参考之用，部分材料来源可能不详，如有侵权请在及时留言联系，我们会在第一时间处理。）
		</view>
		<view class="sc-dz">
			<view class="dz" @click="odianzan">
				<text class="zxicon iconfont icon-dianzan3" :class="{active1:dz == 1}"></text>
				<text>（{{dianzan}}）</text>
			</view>
			<view class="sc" @click="oshoucang">
				<text class="zxicon iconfont icon-shoucang" :class="{active2:sc == 1}"></text>
				<text>（{{shoucang}}）</text>
			</view>
			<view class="fx" @click="ofenxiang">
				<text class="zxicon iconfont icon-fenxiang2"></text>
				<text>分享</text>
			</view>
		</view>
		
		<pinglun :pinglData="datas" @getdata="pingl"></pinglun>
		
    </view>
</template>

<script>
	import pinglun from "../../components/ping-lun.vue"
    export default {
        data() {
            return {
				howe:{
					id: 0,
					name: "工小界",
					src: "../../static/zx2.jpg",
					title: "变革来啦！包工头、劳务公司即将告别历史舞台？",
					time: "2019/4/15"
				},
				htmlString:
				`法国当地时间2019年4月15日下午6点50分巴黎圣母院发生火灾，
				这座人类著名历史建筑被大火严重破坏。在扼腕叹息之余，“学术
				小镇”通过计算流体力学CFD模拟手段再现了巴黎圣母院的火灾蔓延过程
				，为火灾事故原因调查提供了初步的参考。<br/>
				1. 火灾蔓延CFD模拟<br/>巴黎圣母院主体为砌体拱结构，上部覆盖木结构屋顶，因此，本次大火的主要蔓延区域是木屋顶部分，如下图深红色区域。`,
				dianzan: 0,
				shoucang: 0,
				pinglun: 0,
				dz: 0,
				sc: 0,
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
					time1: "2019/4/19",
					time2: "9:02",
					cont: ""
				}
            }
        },
        onLoad(e) {
			this.howe.name = e.name;
			this.howe.src = e.src;
			this.howe.title = e.title;
			this.howe.time = e.time;
			this.pinglun = this.datas.length;
        },
		methods:{
			pingl(e){
				this.fabpl.cont = e;
				this.datas.push(this.fabpl);
			},
			pltext(e){
				this.fabpl.cont = e.target.value;
			},
			ofenxiang(){
				uni.showModal({
					title: '提示',
					content: '分享功能还未申请！',
					showCancel: false
				});
			},
			fabBtn(){
				if(this.fabpl.cont == ""){
					uni.showModal({
						title: '提示',
						content: '评论不能为空！',
						showCancel: false
					});
				}else{
					this.datas.push(this.fabpl);
					uni.showToast({
						title: '发表成功！',
						duration: 2000
					});
				}
			},
			
			odianzan(){
				if(this.dz == 0){
					this.dz = 1
					this.dianzan ++
				}else{
					this.dz = 0
					this.dianzan --
				}
			},
			oshoucang(){
				if(this.sc == 0){
					this.sc = 1
					this.shoucang ++
				}else{
					this.sc = 0
					this.shoucang --
				}
			}
		},
		components:{
			pinglun
		}
    }
</script>

<style lang="less">
	.page-page{
		padding:40upx 30upx;
	}

   /* .banner2 {
        height: 360upx;
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    } */

    .banner-img {
        width: 100%;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        font-size: 36upx;
        font-weight: 400;
        line-height: 42upx;
        color: #333;
		padding-bottom: 20upx;
    }

    .article-meta {
        padding-bottom: 30upx;
        display: flex;
        justify-content: space-between;
        color: #999;
    }

    .article-text {
        font-size: 13px;
        line-height: 50upx;
    }

    .article-author{
        font-size: 13px;
    }

    .article-content {
        font-size: 15px;
        margin-bottom: 30upx;
		color:#666;
		line-height: 24px;
    }
	.mianze{
		font-size: 12px;
		color:#999;
		line-height: 16px;
	}
	.sc-dz{
		display: flex;
		justify-content: space-between;
		margin-top: 30upx;
		color:#666;
		font-size: 12px;
		text-align: center;
		.active1{
			color:#de1515;
		}
		.active2{
			color:#f8d40a;
		}
		.dz,.fx,.sc{
			border:solid 1px #ccc;
			width:200upx;
			height:70upx;
			line-height: 70upx;
			border-radius: 70upx;
			display: flex;
			justify-content: center;
			align-items:center;
			.zxicon{
				display: inline-block;
			}
		}
		.fx{
			text{
				display: inline-block;
				padding-right: 10upx;
			}
		}
	}
	.fabiao{
		margin:40upx 0;
		.fab-text{
			border:solid 1px #ccc;
			width:670upx;
			padding:10upx 10upx;
			height:140upx;
			font-size: 14px;
		}
		.fab-btn{
			background:#de1515;
			color:#fff;
			display: inline-block;
			padding:4upx 10upx;
			font-size: 13px;
			margin-top: 20upx;
		}
	}
	.pinglun{
		border-top: dashed 1px #ddd;
		font-size: 15px;
		color:#333;
		padding:20upx 0;
		margin-top: 20upx;
		.pinglun-cont{
			display: flex;
			border-bottom:solid 1px #eee;
			padding:20upx 0;
			margin-top: 20upx;
			.pl-left{
				width:80upx;
				height:80upx;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 10upx;
				.pl-img{
					width:100%;
					height:100%;
					border-radius: 50%;
				}
			}
			.pl-right{
				width:600upx;
				.pl-title{
					font-size: 13px;
					color:#006abc;
					text{
						font-size: 12px;
						color:#666;
						padding-left:40upx;
					}
				}
				.pl-cont{
					font-size: 14px;
					color:#333;
					margin-top:10upx;
					// background:#f4f4f4;
					border-radius: 7px;
				}
			}
		}
	}
</style>
