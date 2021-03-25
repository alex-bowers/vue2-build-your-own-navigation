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
        addBlockToColumn(state, payload) {
            const chosenColumnKeys = Object.keys(state.columnsContent[payload - 1])
            const lastBlockString = chosenColumnKeys[chosenColumnKeys.length - 1]
            let newBlockString = 'block-1'
            if (lastBlockString) {
                let previousBlockNumber = parseInt(
                    lastBlockString.slice(lastBlockString.length - 1)
                    , 10
                )

                newBlockString = `block-${previousBlockNumber + 1}`
            }

            Vue.set(state.columnsContent[payload - 1], newBlockString, {})
        },
        addColumnObjects(state, payload) {
            for (let i = 1; i < payload; i++) {
                if (!state.columnsContent[i]) {
                    Vue.set(state.columnsContent, i, {})
                }
            }
        },
        removeBlockFromColumn(state, payload) {
            Vue.delete(state.columnsContent[payload.column - 1], payload.block)
        },
        removeColumnObjects(state, payload) {
            Vue.set(state, 'columnsContent', state.columnsContent.splice(0, payload))
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
