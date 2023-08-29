import React from 'react';


// export const GroceryStore = () => {
// 	return (
//
// 		<div>
// 			<h1>GroceryStore:</h1>
// 			<div><strong>Fruits:</strong></div>
// 			<ol>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 			</ol>
// 			<div><strong>Vegetables:</strong></div>
// 			<ul>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 				<li><input type="checkbox" checked={true}/> <span>name</span>, price: 123 </li>
// 			</ul>
// 		</div>
// 	);
// };

type PropsType ={
	fruits: FruitsType[]
	vegetables: VegetablesType[]
}

type FruitsType = {
	fruitName: string
	price: number
	bought: boolean
}
type VegetablesType = {
	vegetableName: string
	price: number
	bought: boolean
}
export const GroceryStore = (props: PropsType) => {
	return (
		<div>
			<h1>GroceryStore:</h1>
			<div><strong>Fruits:</strong></div>
			<ol>
				<li><input type="checkbox" checked={props.fruits[0].bought}/> <span>{props.fruits[0].fruitName}</span>, price: {props.fruits[0].price} </li>
				<li><input type="checkbox" checked={props.fruits[1].bought}/> <span>{props.fruits[1].fruitName}</span>, price: {props.fruits[1].price} </li>
				<li><input type="checkbox" checked={props.fruits[2].bought}/> <span>{props.fruits[2].fruitName}</span>, price: {props.fruits[2].price} </li>
			</ol>
			<div><strong>Vegetables:</strong></div>
			<ul>
				<li><input type="checkbox" checked={props.vegetables[0].bought}/> <span>{props.vegetables[0].vegetableName}</span>, price: {props.vegetables[0].price} </li>
				<li><input type="checkbox" checked={props.vegetables[1].bought}/> <span>{props.vegetables[1].vegetableName}</span>, price: {props.vegetables[1].price} </li>
				<li><input type="checkbox" checked={props.vegetables[2].bought}/> <span>{props.vegetables[2].vegetableName}</span>, price: {props.vegetables[2].price} </li>
			</ul>
		</div>
	);
};