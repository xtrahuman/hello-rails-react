import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { getMessagesAction, getMessageSuccessAction } from '../redux/greeting/greet';
const HelloWorld = () => {

  const state = useSelector((state) => state.greetReducer.messages);
  const dispatch = useDispatch();


  const performAction = () => {
    dispatch(getMessagesAction());

    fetch('v1/greetings.json')
    .then((response) => response.json())
    .then((data) => dispatch(getMessageSuccessAction(data)))
    .catch((error) => console.log(error));
  }

    return (
      <div>
         <div>
           Greeting: <button onClick={() => performAction()}>Get Messages</button>
         </div>
          <p> {state[Math.floor(Math.random() * state.length)].greet}</p>
      </div>
    );
}

export default HelloWorld
