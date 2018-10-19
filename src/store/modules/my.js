import type from '../mutation-types.js'

const state = {
    num: 8,
    Text: '我是mybtn页面'
}
var getters = {
    count: state => state.num,
    text: state => state.Text
}

const actions = {
    increase(context) {
        context.commit(type.CHENGDENG, 5);
    },
    decrease(context) {
        context.commit(type.CHUDENG, 3);
    },

}

const mutations = {
    [type.CHENGDENG](state, n) {
        state.num *= n;
    },
    [type.CHUDENG](state, n) {
        state.num > 10 ? state.num /= n : '';
    },

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}