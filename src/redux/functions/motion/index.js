import { store } from "../../../store";
import { updateAngle } from "../../slice/spriteSlice";


export const MoveStepsX = (x) => {
  const el = document.getElementById(`${store.getState().sprite.active}-div`);
  el.style.position !== "relative" && (el.style.position = "relative");
  const currentLeft = el.offsetLeft;
  el.style.left = currentLeft+x + "px";
};


export const RotateClockwise = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  const currentAngle = store
    .getState()
    .sprite.characters.find(
      (obj) => obj.id === store.getState().sprite.active
    ).angle;

  let angle = 15;
 
  const newAngle = parseInt(currentAngle) + parseInt(angle);

  el.style.transform = `rotate(${newAngle}deg)`;
  store.dispatch(updateAngle(newAngle));
};

export const RotateAntiClockwise = (type) => {
  const el = document.getElementById(`${store.getState().sprite.active}`);
  const currentAngle = store
    .getState()
    .sprite.characters.find(
      (obj) => obj.id === store.getState().sprite.active
    ).angle;

  let angle = 15;
  
  const newAngle = parseInt(currentAngle) - parseInt(angle);

  el.style.transform = `rotate(${newAngle}deg)`;
  store.dispatch(updateAngle(newAngle));
};

export const GotoXY = (x, y) => {
  const el = document.getElementById(`${store.getState().sprite.active}-div`);
  el.style.position !== "relative" && (el.style.position = "relative");
  el.style.left = x + "px";
  el.style.top = y + "px";
};
