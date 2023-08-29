import React from 'react';

export const WishList = () => {
	return (
		<div>
			<h1>WishList:</h1>
			<div style={{display: "flex", margin: "20px", gap: "20px"}}>
				<div>
					<strong>Phone</strong>
					<div>Bought: <input type="checkbox" checked={false}/> </div>
					<div>Model:</div>
					<div>Price:</div>
					<div>Status:</div>
				</div>
				<div>
					<strong>Car</strong>
					<div>Bought: <input type="checkbox" checked={false}/> </div>
					<div>Model:</div>
					<div>Price:</div>
					<div>Status:</div>
				</div>
				<div>
					<strong>Notebook</strong>
					<div>Bought: <input type="checkbox" checked={false}/> </div>
					<div>Model:</div>
					<div>Price:</div>
					<div>Status:</div>
				</div>
				<div>
					<strong>Oven</strong>
					<div>Bought: <input type="checkbox" checked={false}/> </div>
					<div>Model:</div>
					<div>Price:</div>
					<div>Status:</div>
				</div>
			</div>
		</div>
	);
};

// type PropsType = {
// 	phone: PhoneType
// 	car: CarType
// 	notebook: NotebookType
// 	oven: OvenType
// }
//
// type PhoneType={
// 	model: string
// 	price: number
// 	status: string
// 	bought: boolean
// }
// type CarType={
// 	model: string
// 	price: number
// 	status: string
// 	bought: boolean
// }
// type NotebookType={
// 	model: string
// 	price: number
// 	status: string
// 	bought: boolean
// }
// type OvenType={
// 	model: string
// 	price: number
// 	status: string
// 	bought: boolean
// }
// export const WishList = (props: PropsType) => {
// 	return (
// 		<div>
// 			<div style={{display: "flex", margin: "20px", gap: "20px"}}>
// 				<div>
// 					<strong>Phone</strong>
// 					<div>Bought: <input type="checkbox" checked={props.phone.bought}/> </div>
// 					<div>Model: {props.phone.model}</div>
// 					<div>Price: {props.phone.price}</div>
// 					<div>Status: <u>{props.phone.status}</u></div>
// 				</div>
// 				<div>
// 					<strong>Car</strong>
// 					<div>Bought: <input type="checkbox" checked={props.car.bought}/> </div>
// 					<div>Model: {props.car.model}</div>
// 					<div>Price: {props.car.price}</div>
// 					<div>Status: <u>{props.car.status}</u></div>
// 				</div>
// 				<div>
// 					<strong>Notebook</strong>
// 					<div>Bought: <input type="checkbox" checked={props.notebook.bought}/> </div>
// 					<div>Model: {props.notebook.model}</div>
// 					<div>Price: {props.notebook.price}</div>
// 					<div>Status: <u>{props.notebook.status}</u></div>
// 				</div>
// 				<div>
// 					<strong>Oven</strong>
// 					<div>Bought: <input type="checkbox" checked={props.oven.bought}/> </div>
// 					<div>Model: {props.oven.model}</div>
// 					<div>Price: {props.oven.price}</div>
// 					<div>Status: <u>{props.oven.status}</u></div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };