import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import React from "react";
import { useDispatch } from "react-redux";
import { sayMessageWithTimer } from "../../redux/functions/looks";
import { updateHistory } from "../../redux/slice/historySlice";

const SayMessageWithTimer = ({ type, }) => {
  const dispatch = useDispatch();

  const displayMsg = () => {
    sayMessageWithTimer(type);

    try {
      dispatch(
        updateHistory({
          type,
          val1: 10,
        })
      );
    } catch (error) {
      console.log("🚀 ~ displayMsg ~ error:", error);
    }
  };

  return (
   <div elevation={3}>
      <div className="messagebox">
        <div className="text-white">Say Hello for
         10 seconds</div>

        <PlayArrowIcon
          className="moveicon bg-green-600 rounded-full"
          onClick={() => {
            displayMsg();
          }}
        />
      </div>
    </div>
  );
};

export default SayMessageWithTimer;
