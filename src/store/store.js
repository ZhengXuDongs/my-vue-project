import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count: 1
}


const mutations = {
	add(state, n) {
		state.count += n;
	},
	reduce(state) {
		state.count -= 1;
	}
}

const getters = {
	count: function(state) {
		return state.count += 0;
	}
}

const actions = {
	addAction(context) {
		context.commit('add', 10)
	},
	reduceAction({
		commit
	}) {
		commit('reduce')
	},

}

export default new Vuex.Store({
	state,
	mutations,
	getters,
	actions,
});