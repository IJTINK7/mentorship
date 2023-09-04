import React, {useState} from 'react';

export const ButtonAndUseStateTraining = () => {

	let [car, setCar] = useState('Lada')
	let [name, setName] = useState('Igor')
	let [color, setColor] = useState('white')

	const changeCar = (newCar: string) => {
		setCar(newCar)
	}
	const sayHello =()=> {
		setCar('123')
	}
	const changeName =(newName: string)=> {
		setName(newName)
	}
	const changeColor = (newColor: string) => {
		setColor(newColor)
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
			<div>
				<h2>Colors</h2>
				<div>{color}</div>
				<button onClick={()=>changeColor('Blue')}>Blue</button>
				<button onClick={()=>changeColor('Green')}>Green</button>
				<button onClick={()=>changeColor('Black')}>Black</button>
				<button onClick={()=>changeColor('Pink')}>Pink</button>
			</div>
		</div>

	);
};