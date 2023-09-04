//
//
//
//
//             <div>
//                 <div>{name}</div>
//                 <button onClick={()=>changeName('alex')}>alex</button>
//                 <button onClick={()=>changeName('roma')}>roma</button>
//                 <button onClick={()=>changeName('igor')}>igor</button>
//                 <input value=""/>
//             </div>
//             <div>
//                 <div>{color}</div>
//                 <button onClick={()=>changeColor('blue')}>blue</button>
//                 <button onClick={()=>changeColor('green')}>green</button>
//                 <button onClick={()=>changeColor('black')}>black</button>
//                 <button onClick={()=>changeColor('pink')}>pink</button>
//             </div>










import React, {useState} from 'react';

export const ButtonAndUseStateTraining = () => {

	let [car, setCar] = useState('Lada')
	let [name, setName] = useState('Igor')

	const changeCar = (newCar: string) => {
		setCar(newCar)
	}
	const sayHello =()=> {
		setCar('123')
	}
	const changeName =(newName: string)=> {
		setName(newName)
	}

	return (
		<div>
			<div>
				<h2>Cars</h2>
				<div>{car}</div>
				<button onClick={()=>changeCar('WV')}>WV</button>
				<button onClick={()=>changeCar('BMW')}>BMW</button>
				<button onClick={()=>changeCar('Ferrari')}>Ferrari</button>
				<button onClick={sayHello}>Hello</button>
			</div>
			<div>
				<h2>Names</h2>
				<div>{name}</div>
				<button onClick={()=>changeName('Alex')}>Alex</button>
				<button onClick={()=>changeName('Roma')}>Roma</button>
				<button onClick={()=>changeName('Igor')}>Igor</button>
			</div>
		</div>

	);
};