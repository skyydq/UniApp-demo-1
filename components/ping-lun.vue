<template>
	<view class="pinglun">
		<view>
			评论（{{pinglun}}）
		</view>
		<view class="fabiao">
			<textarea :value="value" placeholder="针对这篇内容，写出你心中所想：" class="fab-text" v-model="value" @input="pltext" />
			<view class="fab-btn" @click="fabBtn">
				发表评论
			</view>
		</view>
		<view class="pinglun-cont" v-for="(data,index) in pinglData" :key="index">
			<view class="pl-left">
				<image :src="data.img" class="pl-img"></image>
			</view>
			<view class="pl-right">
				<view class="pl-title">
					{{data.name}}
					<text>{{data.time1}}&nbsp;&nbsp;&nbsp;{{data.time2}}</text>
				</view>
				<view class="pl-cont">
					{{data.cont}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "pingLun",
		data() {
			return {
				pinglun:0,
				value:""
			};
		},
		props:{
			pinglData:{
				type: Array
			}
		},
		onLoad() {
			
		},
		methods:{
			pltext(e){
				this.value = e.target.value;
			},
			fabBtn(){
				if(this.value == ""){
					uni.showModal({
						title: '提示',
						content: '评论不能为空！',
						showCancel: false
					});
				}else{
					this.$emit('getdata',this.value);
					this.value = "";
					uni.showToast({
						title: '发表成功！',
						duration: 2000
					});
				}
			},
		}
	}
</script>

<style lang="less">
	.pinglun{
		border-top: dashed 1px #ddd;
		font-size: 15px;
		color:#333;
		padding:20upx 0;
		margin-top: 20upx;
		.fabiao{
			margin:20upx 0 40upx;
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
