const { createStore } = require('redux')

const TOGGLE_MODE = 'TOGGLE_MODE'

function reducer(state = false, action) {
  switch (action.type) {
    case TOGGLE_MODE:
      return !state
    default:
      return state
  }
}

let store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

const actions = {}

actions.toggleMode = () => {
  return { type: TOGGLE_MODE }
}

const selectors = {}
selectors.getPresentingSelector = state => state

module.exports = {
  store,
  actions,
  selectors,
}
