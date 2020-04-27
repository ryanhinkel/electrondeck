// Remote API: https://github.com/electron/electron/blob/master/docs/api/remote.md

const {
  setPresentMode: _setPresentMode,
  setEditMode: _setEditMode,
} = window.require("electron").remote.require("./screenModes.js");

const PRESENT_MODE = "PRESENT_MODE"
const EDIT_MODE = "EDIT_MODE"

const setScreenMode = mode => {
  if (mode === PRESENT_MODE) {
    _setPresentMode()
  } else if (mode === EDIT_MODE) {
    _setEditMode()
  }
}

export default {
  PRESENT_MODE,
  EDIT_MODE,
  setScreenMode,
}
