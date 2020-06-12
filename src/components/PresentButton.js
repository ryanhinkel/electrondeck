import React, { useState, useEffect } from "react";

import hostApi from '../services/hostApi'

const { EDIT_MODE, PRESENT_MODE } = hostApi

function PresentButton() {
  const [screenMode, setScreenMode] = useState(EDIT_MODE);
  useEffect(() => {
    hostApi.setScreenMode(screenMode);
  }, [screenMode])

  const togglePresent = () => {
    if (screenMode === EDIT_MODE) {
      setScreenMode(PRESENT_MODE);
    } else {
      setScreenMode(EDIT_MODE);
    }
  };

  return (
    <button onClick={togglePresent}>
      { screenMode === EDIT_MODE ? "Present" : "Stop Presenting" }
    </button>
  );
}

export default PresentButton;
