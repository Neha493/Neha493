import React from "react";
import Repeat from "./control/RepeatCtr";
import BroadcastMessage from "./events/MsgBroadcast";
import SayMessageWithTimer from "./looks/SayMessageWithTimer";
import ThinkTimer from "./looks/ThinkTimer";
import GotoXY from "./motion/GotoXY";
import MoveX from "./motion/MoveX";
import TurnAntiClockwise from "./motion/RotateAntiClockwise";
import TurnClockwise from "./motion/RotateClockwise";

const componentMap = {
  MOVEX_TEN: <MoveX type="MOVEX_TEN" defaultval={10} val1={0} val2={0} />,
  
 
  CLOCKWISE_FIFTEEN: (
    <TurnClockwise type="CLOCKWISE_FIFTEEN" defaultval={15} val1={0} val2={0} />
  ),
  
  ANTICLOCKWISE_FIFTEEN: (
    <TurnAntiClockwise
      type="ANTICLOCKWISE_FIFTEEN"
      defaultval={15}
      val1={0}
      val2={0}
    />
  ),

  GOTO_XY: <GotoXY type="GOTO_XY" val1={0} val2={0} />,

  SAY_TEN: <SayMessageWithTimer type="SAY_TEN" defaultval={10} />,
  
  THINK_TEN: <ThinkTimer type="THINK_TEN" defaultval={10} />,
  
  BROADCAST: <BroadcastMessage />,
 
  REPEAT: <Repeat />,

};

export const fetchComponent = (key, id, val1, val2) => {
  const Component = componentMap[key];
  return Component ? React.cloneElement(Component, { id, val1, val2 }) : null;
};
export default fetchComponent;