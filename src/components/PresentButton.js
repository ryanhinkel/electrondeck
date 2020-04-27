import React, { useState } from "react";

import hostApi from '../services/hostApi'

const { setScreenMode, EDIT_MODE, PRESENT_MODE } = hostApi

function PresentButton() {
  const [screenMode, setScreenModeLocal] = useState(EDIT_MODE);

  const togglePresent = () => {
    if (screenMode === EDIT_MODE) {
      setScreenMode(PRESENT_MODE);
      setScreenModeLocal(PRESENT_MODE);
    } else {
      setScreenMode(EDIT_MODE);
      setScreenModeLocal(EDIT_MODE);
    }
  };

  return (
    <button onClick={togglePresent}>
      { screenMode === EDIT_MODE ? "Present" : "Stop Presenting" }
    </button>
  );
}

export default PresentButton;
