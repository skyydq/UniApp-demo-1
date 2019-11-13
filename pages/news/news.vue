<template>
    <view>
		<navBar></navBar>
		<view class="liaotian-top">
			<view class="liaot-fanhui" @click="fanhui">
				<text class="iconfont icon-previous_step"></text>
			</view>
			<view class="liaot-title">资讯列表</view>
			<navigator url="../osousuo/osousuo" hover-class="none"><text class="iconfont icon-sousuo3"></text></navigator>
		</view>
        <view class="banner2" @click="obanner(banner)">
            <image class="banner-img" :src="banner.src"></image>
            <view class="banner-title">{{banner.title}}</view>
        </view>
        <view class="uni-list">
            <view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(data,key) in odata" :key="key"
                @click="olist(data)">
                <view class="uni-media-list">
                    <image class="uni-media-list-logo" :src="data.src"></image>
                    <view class="uni-media-list-body">
                        <view class="uni-media-list-text-top">{{data.title}}</view>
                        <view class="uni-media-list-text-bottom">
                            <text>{{data.name}}</text>
                            <text>{{data.time}}</text>
                        </view>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue";
    var dateUtils = require('../../common/util.js').dateUtils;

    export default {
        data() {
            return {
                listData: [],
                last_id: "",
                reload: false,
				banner: {
					id: 0,
					name: "酷酷的天霸",
					src: "../../static/zx2.jpg",
					title: "还原巴黎圣母院火灾蔓延过程还原巴黎圣母院火灾蔓延过程",
					time: "2019/4/18"
				},
				odata:[
					{
						id: 1,
						name: "酷酷的天霸",
						src: "../../static/zx2.jpg",
						title: "还原巴黎圣母院火灾蔓延过程还原巴黎圣母院火灾蔓延过程",
						time: "2019/4/18"
					},
					{
						id: 2,
						src: "../../static/zx2.jpg",
						title: "数字建造驱动工程建设业的无限未来数字建造驱动工程建设业的无限未来",
						name: "小编二号",
						time: "2019/4/17"
					},
					{
						id: 3,
						src: "../../static/zx2.jpg",
						title: "BIM厉害了，想考一建需要会BIM才行啊！",
						name: "卯合卯公司",
						time: "2019/4/16"
					},
					{
						id: 4,
						src: "../../static/zx2.jpg",
						title: "变革来啦！包工头、劳务公司即将告别历史舞台？",
						name: "工小界",
						time: "2019/4/15"
					},
					{
						id: 5,
						src: "../../static/zx2.jpg",
						title: "数字建造驱动工程建设业的无限未来数字建造驱动工程建设业的无限未来",
						name: "小编二号",
						time: "2019/4/17"
					},
					{
						id: 6,
						src: "../../static/zx2.jpg",
						title: "BIM厉害了，想考一建需要会BIM才行啊！",
						name: "卯合卯公司",
						time: "2019/4/16"
					},
					{
						id: 7,
						src: "../../static/zx2.jpg",
						title: "变革来啦！包工头、劳务公司即将告别历史舞台？",
						name: "工小界",
						time: "2019/4/15"
					}
				]
            }
        },
        onLoad() {
            
        },
        methods: {
			fanhui(){
				uni.navigateBack()
			},
            obanner(banner){
				uni.navigateTo({
					url: 'news_page?id=' + banner.id + '&name=' + banner.name + '&title=' + banner.title + '&src=' +banner.src + '&time=' + banner.time
				});
			},
			olist(data){
				uni.navigateTo({
					url: 'news_page?id=' + data.id + '&name=' + data.name + '&title=' + data.title + '&src=' + data.src + '&time=' + data.time
				});
			}
        },
		components:{
			navBar
		}
    }
</script>

<style>
	.liaotian-top{
		position: fixed;
		top: 0;
		left: 0;
		width: 700upx;
		height:90upx;
		line-height: 90upx;
		z-index: 99;
		background:#f4f4f4;
		display: flex;
		justify-content: space-between;
		padding:0 30upx;
		padding-left:20upx;
		/* #ifdef APP-PLUS */
		padding-top:var(--status-bar-height);
		/* #endif */
	}
	.liaot-fanhui text{
		font-size: 20px;
	}
	.liaot-title{
		font-size: 15px;
		color:#333;
	}
    .banner2 {
        height: 360upx;
		padding-top:90upx;
        overflow: hidden;
        position: relative;
        background-color: #ccc;
    }

    .banner-img {
        width: 100%;
    }

    .banner-title {
        max-height: 84upx;
        overflow: hidden;
        position: absolute;
        left: 30upx;
        bottom: 30upx;
        width: 90%;
        font-size: 32upx;
        font-weight: 400;
        line-height: 42upx;
        color: white;
        z-index: 11;
    }

    .uni-list {
        background-color: #FFFFFF;
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .uni-list:after {
        position: absolute;
        z-index: 10;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list::before {
        position: absolute;
        z-index: 10;
        right: 0;
        top: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list-cell {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .uni-list-cell-hover {
        background-color: #eee;
    }

    .uni-list-cell::after {
        position: absolute;
        z-index: 3;
        right: 0;
        bottom: 0;
        left: 0;
        height: 1px;
        content: '';
        -webkit-transform: scaleY(.5);
        transform: scaleY(.5);
        background-color: #c8c7cc;
    }

    .uni-list .uni-list-cell:last-child::after {
        height: 0upx;
    }

    /* 图文列表 */
    .uni-media-list {
        padding: 22upx 30upx;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        flex-direction: row;
    }

    .uni-navigate-right.uni-media-list {
        padding-right: 74upx;
    }

    .uni-pull-right {
        flex-direction: row-reverse;
    }

    .uni-pull-right>.uni-media-list-logo {
        margin-right: 0upx;
        margin-left: 20upx;
    }

    .uni-media-list-logo image {
        height: 100%;
        width: 100%;
    }


    .uni-media-list-text-bottom {
        width: 100%;
        line-height: 30upx;
        font-size: 26upx;
        color: #8f8f94;
    }

    .uni-media-list-logo {
        width: 200upx;
        height: 140upx;
        margin-right: 20upx;
    }

    .uni-media-list-body {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        overflow: hidden;
        height: auto;
    }

    .uni-media-list-text-top {
        width: 100%;
        line-height: 36upx;
        font-size: 30upx;
        height: 74upx;
        font-size: 28upx;
        overflow: hidden;
		color:#333;
    }

    .uni-media-list-text-bottom {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>
