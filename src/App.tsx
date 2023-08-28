import React from "react";
import {Todolist} from "./Todolist";

function App() {
  const tasks1 = [
    { id: 1, taskTitle: "HTML&CSS", isDone: true },
    { id: 2, taskTitle: "JS", isDone: true },
    { id: 3, taskTitle: "ReactJS", isDone: false }
  ]
  const tasks2 = [
    { id: 1, taskTitle: "Titanic", isDone: true },
    { id: 2, taskTitle: "Terminator 2", isDone: true },
    { id: 3, taskTitle: "Jaws", isDone: false }
  ]
  return (
      <div className='App'>
        <Todolist tasks={tasks1} todolistTitle = "What to learn" />
        <Todolist tasks={tasks2} todolistTitle = "What to watch" />
      </div>
  )
}

export default App;