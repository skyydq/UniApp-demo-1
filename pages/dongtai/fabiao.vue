<template>
	<view>
		<view class="fabiao">
			<view class="fabiao-cont">
				<textarea value="" placeholder="发表动态，分享心情..." class="fabiao-shuru" @input="fabcont" v-model="datas.otext" />
			</view>
			<view class="fabiao-img">
				<view class="" v-for="(data,index) in datas.oimg" :key="index">
					<image :src="data" class="fbImg" @click="fbImg(index)" mode="aspectFill"></image>
					<text class="iconfont icon-chuyidong1-copy" @click="delImg(index)"></text>
				</view>
			</view>
			<view class="fabiao-view">
				<view class="fabiao-xiangc">
					<text class="iconfont icon-biaoqing2" @click="biaoqKey = !biaoqKey"></text>
					<text class="iconfont icon-xiangce3" @click="xiangce"></text>
				</view>
				<view class="fabiao-queren" @click="fabiaoBtn">
					发表
				</view>
			</view>
		</view>
		<view class="">
			<rich-text :nodes="cont"></rich-text>
		</view>
		<view class="fabiao-bottom" v-if="biaoqKey">
			<scroll-view scroll-y class="fabiao-biaoqing">
				<view>
					<image v-for="(biaoqing,index2) in emoji" :key="index2" :src="biaoqing.osrc" @click="biaoq(index2)"></image>
				</view>
			</scroll-view>
			<view class="fabaio-xiaol">
				<text class="iconfont icon-biaoqing"></text>
			</view>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				datas:{
					otext:"",
					oimg:[]
				},
				biaoqKey:false,
				emoji:[],
				emojiTxt:[
					'微笑', '撇嘴', '色', '发呆', '得意', '流泪', '害羞', '闭嘴', '睡', '大哭', '尴尬', '发怒', '调皮', '呲牙', '惊讶', '难过', '酷',
						'冷汗', '抓狂', '吐', '偷笑', '可爱', '白眼', '傲慢', '饥饿', '困', '惊恐', '流汗', '憨笑', '大兵', '奋斗', '咒骂', '疑问', '嘘', '晕', '折磨', '衰',
						'骷髅', '敲打', '再见', '擦汗', '抠鼻', '鼓掌', '糗大了', '坏笑', '左哼哼', '右哼哼', '哈欠', '鄙视', '委屈', '快哭了', '阴险', '亲亲', '吓', '可怜',
						'菜刀', '西瓜', '啤酒', '篮球', '乒乓', '咖啡', '饭', '猪头', '玫瑰', '凋谢', '示爱', '爱心', '心碎', '蛋糕', '闪电', '炸弹', '刀', '足球', '瓢虫',
						'便便', '月亮', '太阳', '礼物', '拥抱', '强', '弱', '握手', '胜利', '抱拳', '勾引', '拳头', '差劲', '爱你', 'NO', 'OK', '爱情', '飞吻', '跳跳',
						'发抖', '怄火', '转圈', '磕头', '回头', '跳绳', '挥手'
					
					// "[微笑]","[伤心]","[美女]","[发呆]","[墨镜]","[哭]","[羞]","[哑]","[睡]","[哭]",
					// "[囧]","[怒]","[调皮]","[笑]","[惊讶]","[难过]","[酷]","[汗]","[抓狂]","[吐]","[笑]",
					// "[快乐]","[奇]","[傲]","[饿]","[累]","[吓]","[汗]","[高兴]","[闲]","[努力]","[骂]",
					// "[疑问]","[秘密]","[乱]","[疯]","[哀]","[鬼]","[打击]","[bye]","[汗]","[抠]","[鼓掌]","[糟糕]","[恶搞]","[什么]","[什么]","[累]",
					// "[看]","[难过]","[难过]","[坏]"
					// "[坏]"},{"url":"152.gif",alt:"[亲]"},{"url":"153.gif",alt:"[吓]"},{"url":"154.gif",alt:"[可怜]"},{"url":"155.gif",alt:"[刀]"},{"url":"156.gif",alt:"[水果]"},{"url":"157.gif",alt:"[酒]"},{"url":"158.gif",alt:"[篮球]"},{"url":"159.gif",alt:"[乒乓]"},{"url":"160.gif",alt:"[咖啡]"},{"url":"161.gif",alt:"[美食]"},{"url":"162.gif",alt:"[动物]"},{"url":"163.gif",alt:"[鲜花]"},{"url":"164.gif",alt:"[枯]"},{"url":"165.gif",alt:"[唇]"},{"url":"166.gif",alt:"[爱]"},{"url":"167.gif",alt:"[分手]"},{"url":"168.gif",alt:"[生日]"},{"url":"169.gif",alt:"[电]"},{"url":"170.gif",alt:"[炸弹]"},{"url":"171.gif",alt:"[刀子]"}],
					// [{"url":"172.gif",alt:"[足球]"},{"url":"173.gif",alt:"[瓢虫]"},{"url":"174.gif",alt:"[翔]"},{"url":"175.gif",alt:"[月亮]"},{"url":"176.gif",alt:"[太阳]"},{"url":"177.gif",alt:"[礼物]"},{"url":"178.gif",alt:"[抱抱]"},{"url":"179.gif",alt:"[拇指]"},{"url":"180.gif",alt:"[贬低]"},{"url":"181.gif",alt:"[握手]"},{"url":"182.gif",alt:"[剪刀手]"},{"url":"183.gif",alt:"[抱拳]"},{"url":"184.gif",alt:"[勾引]"},{"url":"185.gif",alt:"[拳头]"},{"url":"186.gif",alt:"[小拇指]"},{"url":"187.gif",alt:"[拇指八]"},{"url":"188.gif",alt:"[食指]"},{"url":"189.gif",alt:"[ok]"},{"url":"190.gif",alt:"[情侣]"},{"url":"191.gif",alt:"[爱心]"},{"url":"192.gif",alt:"[蹦哒]"},{"url":"193.gif",alt:"[颤抖]"},{"url":"194.gif",alt:"[怄气]"},{"url":"195.gif",alt:"[跳舞]"}],
				],
				cont:""
			}
		},
		onLoad() {
			for(var i = 0; i < 100; i ++){
				this.emoji.push({name:"[" + this.emojiTxt[i] + "]",osrc:`../../static/img/emoji/${i+100}.gif`});
			}
		},
		mounted() {
			
		},
		methods: {
			fabcont(e){
				this.datas.otext = e.detail.value
			},
			biaoq(index){
				this.datas.otext += this.emoji[index].name
			},
			fbImg(index){
				uni.previewImage({
					urls: this.datas.oimg[index].split()
				});
			},
			delImg(index){
				this.datas.oimg.splice(index,1);
			},
			fabiaoBtn(){
				if(this.datas.otext == ""){
					uni.showModal({
						title: '提示',
						content: '输入框不能为空！',
						success: function (res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				}else{
					this.cont = this.datas.otext.replace(/\[([^(\]|\[)]*)\]/g,(item, index)=>{
						for(let i=0;i<this.emoji.length;i++){
							let row = this.emoji[i];
							if(row.name == item){
								return "<img src=" + row.osrc + " />"
							}
						}
					})
				}
			},
			
			xiangce(){
				if(this.datas.oimg.length < 4){
					var me = this;
					uni.chooseImage({
						sourceType: ['album','camera'],
						success: (res)=>{
							me.datas.oimg.push(res.tempFilePaths[0]);
						}
					});
				}else{
					uni.showModal({
						title: '提示',
						content: '最多上传四张图片！'
					});
				}
				
			}
		},
		components:{
			
		}
	}
</script>

<style lang="less">
	@import url("fabiao.less");
</style>
