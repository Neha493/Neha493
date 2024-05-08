
import { sayMessageWithTimer, thinkMessageWithTimer } from "./looks";
import {
  MoveStepsX,
  RotateAntiClockwise,
  RotateClockwise,
} from "./motion";

const functionMap = {

  MOVEX_TEN: MoveStepsX,
  CLOCKWISE_FIFTEEN: RotateClockwise,
  ANTICLOCKWISE_FIFTEEN: RotateAntiClockwise,
  SAY_TEN: sayMessageWithTimer,
  THINK_TEN: thinkMessageWithTimer,
};

export default functionMap;
