<template>
	<view>
		<view class="dongtai-top">
			<view class="dongtai-top-cont">
				<navigator url="fabiao" class="dongtai-top-fabiao"><text class="iconfont icon-jiahao2"></text></navigator>
				<image src="../../static/gj.jpg" class="dongtai-toux"></image>
				<view class="dongtai-top-zil">
					<text class="dongtai-top-name">王大壮</text>
				</view>
			</view>
			<image src="../../static/my-bg/2.jpg" class="dongtai-bg"></image>
		</view>
		<view class="dongtai-cont">
			<view class="" v-for="(data,index) in odata" :key="index">
				<view class="dongt-ss">
					<view class="dongt-text">
						{{data.cont}}
					</view>
					<view class="dongt-bot">
						<text class="dongt-time">{{data.time}}</text>
						<view class="dongt-icon">
							<text class="iconfont icon-dianzan-changgui" @click="odianz(data)" :class="data.dianz ? 'dianz-color':'zxcv'"></text>
							<text class="iconfont icon-infounttb" @click="pingl(data)"></text>
						</view>
					</view>
				</view>
				<view class="dongt-dianzan">
					<text>
						{{data.names[0]}}
					</text>
					<text v-for="(name2,index2) in data.names.slice(1, 10)" :key="index2">
						{{"、"+name2}}
					</text>
					<text class="dont-dz" v-if="data.names.length<10">已赞</text>
					<text class="dont-dz" v-else>等{{data.names.length}}人已赞</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import navBar from "../../components/nav-bar.vue"
	export default {
		data() {
			return {
				renshu:0,
				odata:[
					{
						id:0,
						time:"2019-4-24 11:41",
						dianz:false,
						names:["李小二","刘老六","王老五","赵四"],
						cont:`与一切境，无依无住，无有分别，明见法界，广大安立，了诸世间及一切法，平等无二。学道须是铁汉，着手心头便判，直取无上菩提，一切是非莫管。`
					},
					{
						id:1,
						time:"2019-4-24 11:39",
						dianz:false,
						names:["李小二","刘老六","赵四"],
						cont:`是人知得世间有为虚妄不实底道理，及至对境遇缘，蓦地撞在面前，不随他去，否则被伊穿却鼻孔定也。勇猛众生成佛在一念，懈怠众生亘涅盘三祗。`
					},
					{
						id:2,
						time:"2019-4-24 10:19",
						dianz:false,
						names:["李小二","刘老六","王老五","赵四","王大壮"],
						cont:`但悟一心，更无少法可得。修行必到行起解绝，方有实益。`
					},
					{
						id:3,
						time:"2019-4-24 06:59",
						dianz:false,
						names:["李小二","刘老六","王老五","赵四","刘老六","王老五","赵四","刘老六","王老五","赵四","刘老六","王老五","赵四"],
						cont:`何谓圆照？前念已灭，后念未生，正恁么时，一心湛寂，了了明明，是之谓照。圆者，非着力，非不着力，不沉不浮恍如朗月孤圆是也。此寂一念未起，清净无比，遍体清凉，便是本来面目。`
					}
				]
			}
		},
		onLoad() {
			
		},
		methods: {
			fabiao(){
				uni.navigateTo({
					url: 'fabiao'
				});
			},
			odianz(data){
				if(data.dianz){
					data.dianz = !data.dianz
					data.names.splice(data.names.indexOf('王大壮'),1)
				}else{
					data.names.unshift("王大壮")
					data.dianz = !data.dianz
				}
			},
			pingl(data){
				uni.navigateTo({
					url: 'pinglun?id='+ data.id + '&cont=' + data.cont
				});
			}
		},
		components:{
			navBar
		}
	}
</script>

<style lang="less">
	@import url("dongtai.less");
</style>
