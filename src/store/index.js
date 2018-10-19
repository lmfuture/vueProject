import vue from 'vue'
import vuex from 'vuex'
import shouye from './modules/shouye.js'
import myvuex from './modules/my.js'

vue.use(vuex);

export default new vuex.Store({
	modules:{
		shouye,
		myvuex
	}	
})


