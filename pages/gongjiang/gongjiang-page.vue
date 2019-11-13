<template>
	<view class="gongj-page">
		<view class="gongj-top">
			<view class="gongj-top-cont">
				<text class="gongj-icon iconfont icon-shoucang" @click="shouc" :class="{gongjcolor : oshouc == true}"></text>
				<image src="../../static/gj.jpg" class="gongj-toux"></image>
				<view class="gongj-top-zil">
					<text class="gongj-top-name">王大壮</text>
					<text class="gongj-top-dizhi">男 25岁 北京市-朝阳区</text>
				</view>
			</view>
			<image src="../../static/my-bg/2.jpg" class="gongj-bg"></image>
		</view>
		<view class="gongj-center">
			<view class="gongj-jianj">
				个人签名：十有九无天下事，百无一可意中人。
			</view>
			<view class="gongj-xingm">
				<view class="xiangm"><text class="iconfont icon-guzhu"></text>姓名：王大壮<text class="zhiye">木工</text></view>
				<view class="banz"><text class="iconfont icon-tuandui-"></text>班组：暂无</view>
				<view class="renz">
					<text class="iconfont icon-qiyerenzheng2"></text>
					认证信息：
					<text class="shiming"><text class="iconfont icon-shimingrenzheng"></text>实名认证</text>
				</view>
				<navigator url="" class="dongtai" hover-class="none">
					<view>
						<text class="iconfont icon-pingjia1"></text>查看他的动态
					</view>
					<text class="iconfont icon-next"></text>
				</navigator>
			</view>
			<view class="gongj-gongz">
				工作经历：
				<view class="jianjie-neirong">1、北京建筑公司<br/>2、上海建筑公司</view>
			</view>
			<view class="gongj-xiangm">
				参与过的工程：
				<view class="jianjie-neirong">1、顺天阁工程<br/>2、艾森公寓建筑<br/>3、丽尚体育会所<br/>4、志路厂房群建筑</view>
			</view>
		</view>
		<yaoqBar :phone="data.phone" barLeft="联系工匠"></yaoqBar>
	</view>
</template>

<script>
	import yaoqBar from '../../components/yaoqBar.vue';
	export default {
		data() {
			return {
				data: {
					phone: "12314567910",
				},
				oshouc: false
			}
		},
		onLoad() {
			
		},
		methods: {
			shouc(){
				this.oshouc = !this.oshouc;
				if(this.oshouc){
					uni.showModal({
						title: '提示',
						content: '收藏成功！',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}else{
					uni.showModal({
						title: '提示',
						content: '取消收藏成功！',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}
			}
		},
		components: {
			yaoqBar
		},
	};
</script>

<style lang="less">
	@import url("gongjiang-page.less");
</style>
