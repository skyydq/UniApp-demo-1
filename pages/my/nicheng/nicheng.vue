<template>
	<view>
		<view class="nicheng-xiugai">
			<view class="nicheng">
				设置昵称：
			</view>
			<input type="text" v-model="oname" focus class="nicheng-input" />
		</view>
		<view class="ziliao-right"  @click="nichengWancheng(oname)">
			保存
		</view>
	</view>
</template>

<script>
	import navBar from "../../../components/nav-bar.vue";
	
	export default {
		data() {
			return {
				oname:this.$store.state.nicheng.oname
			};
		},
		methods:{
			nichengFanhui(){
				uni.navigateBack()
			},
			nichengWancheng(oname){
				this.$store.commit("nicheng",oname);
				uni.showToast({
					title: '保存成功',
					duration: 2000
				});
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	.nicheng-xiugai{
		margin:0 20upx;
		padding-top:20upx;
		padding-bottom: 10upx;
		display: flex;
		border-bottom:solid 1px #ddd;
		font-size: 15px;
		line-height: 52upx;
	}
	.nicheng-input{
		color:#666;
		max-width: 500upx;
	}
	.ziliao-right{
		font-size: 14px;
		border:solid 1px #e42208;
		width:150upx;
		text-align: center;
		color:#e42208;
		padding:6upx 0;
		margin:20upx auto;
	}
</style>
