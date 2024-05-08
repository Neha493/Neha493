import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { MoveStepsX } from "../../redux/functions/motion";
import { updateHistory } from "../../redux/slice/historySlice";

const MoveX = ({ type, defaultval, compId, val1 }) => {
  const [state, setState] = useState({
    x: val1 > 0 ? val1 : 0,
  });

  const dispatch = useDispatch();
  function gotoHandler() {
    MoveStepsX(state.x);

    try {
      dispatch(updateHistory({ type, val1: state.x }));
    } catch (error) {
      console.log("🚀 ~ gotoHandler ~ error:", error);
    }
  }

  return (
    <div className="movebox" id={compId}>
     Move  X
      <input
        className="moveinput w-[50px]"
        type="number"
        value={state.x}
        onChange={(e) => {
          parseInt(e.target.value) !== 0 &&
            setState({ ...state, x: parseInt(e.target.value) });
        }}
      />
      Steps
      <PlayArrowIcon
        className="moveicon bg-green-600 rounded-full"
        onClick={() => {
          gotoHandler();
        }}
      />
    </div>
  );
};

export default MoveX;
