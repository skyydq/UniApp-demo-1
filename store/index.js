import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: { 
        dizhi: '未设置',
		ziliao:{
			ojianjie:'请设置个人签名',
			osrc:'../../static/toux2.png'
		},
		nicheng:{
			oname:'请设置昵称'
		},
		otext:""
    },
    mutations: {
        dizhi(state, newName) {
            state.dizhi = newName;
        },
		ziliao(state2, newName2){
			state2.ziliao = newName2
		},
		nicheng(state3, newName3){
			state3.nicheng.oname = newName3
		},
		otext(state4, newName4){
			state4.otext = newName4
		}
    },
    actions: { }
})

export default store