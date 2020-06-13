import React from "react";
import { connect } from "react-redux"

import { actions, selectors } from '../services/hostApi'

const mapState = state => ({
  presenting: selectors.getPresentingSelector(state),
})

const mapDispatch = dispatch => ({
  toggleMode: () => dispatch(actions.toggleMode()),
})

function PresentButton({ presenting, toggleMode }) {
  return (
    <button onClick={toggleMode}>
      { presenting ? "Stop Presenting" : "Present" }
    </button>
  );
}

export default connect(mapState, mapDispatch)(PresentButton)
