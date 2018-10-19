import type from '../mutation-types.js'
const state = {
	num:1,
	vueText:'我是首页a'
}

var getters = {
	count: state =>  state.num,
	vueText: state => state.vueText
}

const actions = {
	increase(context){
		context.commit(type.INCREASEMENT,5);
	},
	decrease(context){
		context.commit(type.DECREASEMENT,3);
	},
	dialog(context){
		context.commit(type.DIALOG,'我是来自vuex数据(修改之后)')
	}
}

const mutations = {
	[type.INCREASEMENT](state,n){
        state.num+=n;
    },
    [type.DECREASEMENT](state,n){
        state.num>10?state.num-=n:'';
    },
    [type.DIALOG](state,text){
    	state.vuexText = text;
    }
}

export default {
	namespaced:true,
	state,
	getters,
	actions,
	mutations
}
