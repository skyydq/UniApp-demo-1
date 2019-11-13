<template>
	<view>
		<view class="ziliao-cont">
			<view class="ziliao-touxiang" @click="touXiang">
				<text class="zlTitle">头像上传</text>
				<view class="zlToux">
					<image :src="oziliao.osrc" class="zlToux-img"></image>
					<text class="iconfont icon-next"></text>
				</view>
			</view>
			<navigator url="nicheng/nicheng" class="ziliao-nicheng">
				<text class="zlTitle">修改昵称：</text>
				<view class="zlnicheng">
					<view class="zlNic">
						{{oziliao1}}
					</view>
					<!-- <input type="text" @input="change1" /> -->
					<text class="iconfont icon-next"></text>
				</view>
			</navigator>
			<view>
				<text class="zlTitle">个人签名：</text>
				<textarea v-model="oziliao.ojianjie" class="zlQianm" @input="change2" />
			</view>
		</view>
		<view class="ziliaoBtn" @click="ziliaoClick(oziliao)">
			保存
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue";
	
	export default {
		data() {
			return {
				oziliao:{
					// oname:this.$store.state.ziliao.oname,
					// oname:this.$store.state.nicheng.oname,
					ojianjie:this.$store.state.ziliao.ojianjie,
					osrc:this.$store.state.ziliao.osrc
				}
			};
		},
		computed:{
			oziliao1:function(){
				return this.$store.state.nicheng.oname
			},
		},
		methods:{
// 			change1(e){
// 				this.oziliao.oname = e.detail.value
// 			},
			change2(ee){
				this.oziliao.ojianjie = ee.detail.value
			},
			ziliaoClick(oziliao){
				this.$store.commit("ziliao",oziliao);
				uni.showToast({
					title: '保存成功',
					duration: 2000
				});
			},
			ziliaoFanhui(){
				uni.navigateBack()
			},
			touXiang(){
				var me = this;
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'],
					success: (res)=>{
						console.log(res.tempFilePaths)
						me.oziliao.osrc = res.tempFilePaths[0];
					}
				});
			}
		},
		components:{
			navBar
		}
	}
</script>

<style>
	.ziliao-cont{
		padding:0 20upx;
	}
	.zlTitle{
		font-size: 14px;
		color:#666;
	}
	.zlToux-img{
		width:100upx;
		height:100upx;
		border:solid 1px #ccc;
		border-radius: 50%;
		vertical-align: bottom;
	}
	.ziliao-nicheng{
		background:#f4f4f4;
		padding:0 20upx;
		display: flex;
		justify-content: space-between;
	}
	.zlnicheng{
		display: flex;
	}
	.zlnicheng text{
		line-height: 80upx;
		font-size: 20px;
		color: #999;
		padding-left: 10upx;
	}
	.zlNic{
		font-size: 13px;
		color:#666;
		line-height: 80upx;
	}
	.zlQianm{
		width:670upx;
		height:100upx;
		padding:20upx;
		font-size: 14px;
		color:#666;
		border:solid 1px #ddd;
	}
	.ziliao-nicheng{
		display: flex;
	}
	.zlTitle{
		line-height: 80upx;
	}
	.ziliao-touxiang{
		background:#f4f4f4;
		padding:10upx 20upx;
		margin:20upx 0;
		display: flex;
		justify-content: space-between;
	}
	.ziliao-touxiang .zlTitle{
		font-size: 16px;
		line-height: 100upx;
	}
	.zlToux text{
		line-height: 100upx;
		font-size: 20px;
		color:#999;
		padding-left: 10upx;
	}
	.ziliaoBtn{
		font-size: 14px;
		border:solid 1px #e42208;
		width:150upx;
		text-align: center;
		color:#e42208;
		padding:6upx 0;
		margin:20upx auto;
	}
</style>
