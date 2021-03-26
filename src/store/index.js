import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        columns: 1,
        columnsContent: [
            {
                blocks: {},
                position: 1
            }
        ]
    },
    mutations: {
        addBlockToColumn(state, payload) {
            const chosenColumnKeys = Object.keys(state.columnsContent[payload - 1].blocks)
            const lastBlockString = chosenColumnKeys[chosenColumnKeys.length - 1]
            let newBlockString = 'block-1'
            if (lastBlockString) {
                let previousBlockNumber = parseInt(
                    lastBlockString.slice(lastBlockString.length - 1)
                    , 10
                )

                newBlockString = `block-${previousBlockNumber + 1}`
            }

            Vue.set(state.columnsContent[payload - 1].blocks, newBlockString, {})
        },
        addColumnObjects(state, payload) {
            for (let i = 1; i < payload; i++) {
                if (!state.columnsContent[i]) {
                    Vue.set(state.columnsContent, i, {
                        blocks: {},
                        position: i + 1
                    })
                }
            }
        },
        removeBlockFromColumn(state, payload) {
            const { block, column } = payload

            Vue.delete(state.columnsContent[column - 1].blocks, block)
        },
        removeColumnObjects(state, payload) {
            Vue.set(state, 'columnsContent', state.columnsContent.splice(0, payload))
        },
        setColumnsCount: (state, payload) => state.columns = payload,
        updateColumnContent(state, payload) {
            const { block, column, data } = payload

            Vue.set(state.columnsContent[column - 1].blocks, block, data)
        },
        updateColumnPosition(state, payload) {
            const { column, newPosition } = payload

            Vue.set(state.columnsContent[column - 1], 'position', parseInt(newPosition))
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
