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
	let [car, setCar] = useState('lada')
 	const changeCar = (newCar: string) => {
		setCar(newCar)
	}
	const sayHello =()=> {
		setCar('123')
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
		</div>
	);
};