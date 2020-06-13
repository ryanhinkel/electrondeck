// Remote API: https://github.com/electron/electron/blob/master/docs/api/remote.md
const storeModule = window.require("electron").remote.require("./redux/store.js");

export const { actions, selectors, store } = storeModule
