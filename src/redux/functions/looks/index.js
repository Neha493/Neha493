import { store } from "../../../store";

export const sayMessageWithTimer = (type) => {
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
 

  el.style.display = "block";
  el.style.position = "relative";

  el.innerHTML = "Hello";

  let time = 10;
 
  window.setTimeout(() => {
    el.style.display = "none";
  }, time * 1000);
};


export const thinkMessageWithTimer = (type) => {
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
  

  el.style.display = "inline-block";
  el.style.position = "relative";

  let time = 10;
  
  el.innerHTML = "Hmmm...";
  window.setTimeout(() => {
    el.style.display = "none";
  
  }, time * 1000);
};

export const hideMessage = () => {
  window.clearTimeout();
  const el = document.getElementById(
    `${store.getState().sprite.active}-message-box`
  );
  const el2 = document.getElementById(
    `${store.getState().sprite.active}-message-box1`
  );
  el.style.display = "none";
  el2.style.display = "none";
};
