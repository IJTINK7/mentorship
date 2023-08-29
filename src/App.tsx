//Mentorship 01 - 28.08.2023
// import React from "react";
// import {Todolist} from "./Todolist";
// import {PersonalData} from "./PersonalData";
// import {GroceryStore} from "./GroceryStore";
//
// function App() {
//   const tasks1 = [
//     { id: 1, taskTitle: "HTML&CSS", isDone: true },
//     { id: 2, taskTitle: "JS", isDone: true },
//     { id: 3, taskTitle: "ReactJS", isDone: false }
//   ]
//   const tasks2 = [
//     { id: 1, taskTitle: "Titanic", isDone: true },
//     { id: 2, taskTitle: "Terminator 2", isDone: true },
//     { id: 3, taskTitle: "Jaws", isDone: false }
//   ]
//   return (
//       <div className='App'>
//         {/*<Todolist tasks={tasks1} todolistTitle = "What to learn" />*/}
//         {/*<Todolist tasks={tasks2} todolistTitle = "What to watch" />*/}
//       </div>
//   )
// }
//
// export default App;


// Mentorship 02 - 29.08.2023
import React from "react";
import {PersonalData} from "./PersonalData";
import {GroceryStore} from "./GroceryStore";
import {WishList} from "./WishList";

function App() {
    const fruits = [
        { fruitName: "apple", price: 10, bought: false },
        { fruitName: "pineapple", price: 15, bought: true },
        { fruitName: "watermelon", price: 20, bought: true },
    ]
    const vegetables = [
        { vegetableName: "potato", price: 8, bought: false },
        { vegetableName: "onion", price: 12, bought: true },
        { vegetableName: "eggplant", price: 16,bought: false }
    ]
     const human = {
        name: "Alex",
        age: 50,
        profession: "doctor",
        address:{
            country: "Belarus",
            city: "Minsk",
            currentAddress:{
                street: "Kirova",
                house: 17
            }
        }
    }
    const phone =   {model: 'Samsung Galaxy S23', price: 799, status: "usual", bought: true}
    const car = {model: 'Tesla X', price: 88490, status: "important", bought: false}
    const notebook = {model: 'MSI Titan', price: 8100, status: "important", bought: false}
    const oven = {model: 'Gefest 622', price: 200, status: "usual", bought: false}
    return (
        <div className='App'>
            <GroceryStore fruits={fruits} vegetables={vegetables}/>
            <hr/>
            <PersonalData human={human}/>
            <hr/>
            <WishList phone={phone} car={car} notebook={notebook} oven={oven}/>
        </div>
    )
}

export default App;