import {createStore} from 'redux';

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0,action) => {
  switch (action.type) {
    case "ADD":
      return count + 1;
    case "MINUS":
      return count - 1;
    default:
      return count;
  }
};

number.innerText = 0;

const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
  
}

countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({ type: "ADD" });
  console.log("ADD");
}

const handleMinus = () => {
  ConstantSourceNode.dispatch({ type:"MINUS" });
  console.log("MINUS");
}

add.addEventListener("click",() => handleAdd);
minus.addEventListener("click",() => handleMinus);

 