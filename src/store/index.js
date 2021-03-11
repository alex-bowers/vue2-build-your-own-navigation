import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        columns: 1,
        columnsContent: [
            {}
        ]
    },
    mutations: {
        addColumnObjects(state, payload) {
            for (let i = 1; i < payload; i++) {
                if (!state.columnsContent[i]) {
                    Vue.set(state.columnsContent, i, {})
                }
            }
        },
        removeColumnObjects(state, payload) {
            while (payload !== state.columnsContent.length) {
                state.columnsContent.splice(state.columnsContent.length, 1)
            }
        },
        setColumnsCount: (state, payload) => state.columns = payload,
        updateColumnContent(state, payload) {
            const { block, column, data } = payload

            Vue.set(state.columnsContent[column - 1], block, data)
        }
    },
    actions: {
        updateNumberOfColumns({ commit, state }, payload) {
            commit('setColumnsCount', payload)

            const currentColumnLength = state.columnsContent.length

            if (payload > currentColumnLength) {
                commit('addColumnObjects', payload)
            } else if (payload < currentColumnLength) {
                commit('removeColumnObjects', payload)
            }
        }
    }
})
