<template>
  <view class="demo">
    <ss-select-city :hotCitys="hotCitys" v-model="value" @on-select="onSelect"></ss-select-city>
  </view>
</template>

<script>
  import ssSelectCity from '../../../components/ss-select-city/ss-select-city.vue'
  export default {
    data() {
      return {
        hotCitys: ['北京', '上海', '广州', '天津', '深圳', '杭州', '成都', '重庆', '厦门'],
        value: this.$store.state.dizhi
      }
    },
		onLoad() {
			if(this.value == ''){
				this.value = '未设置'
			}
		},
    components: {
      ssSelectCity
    },
    methods: {
      onSelect(city) {
        console.log(city)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>
