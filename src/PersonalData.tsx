import React from 'react';

export const PersonalData = () => {
	return (
		<div>
			<strong>Personal data:</strong>
			<p></p>
			<div>Hello my name is {<strong>(add name)</strong>}</div>
			<div>I am {<strong>(add age)</strong>} years old</div>
			<div>I am a {<strong>(add profession)</strong>}</div>
			<div>My address is: {<strong>(add address)</strong>}</div>

		</div>
	);
};

// type PropsType = {
// 	human: HumanType
// }
//
// type HumanType = {
// 	name: string
// 	age: number
// 	profession: string
// 	address: AddressType
// }
//
// type AddressType = {
// 	country: string
// 	city: string
// 	currentAddress: CurrentAddressType
// }
// type CurrentAddressType = {
// 	street: string
// 	house: number
// }

// export const PersonalData = (props: PropsType) => {
// 	return (
// 		<div>
// 			<strong>Personal data:</strong>
// 			<p></p>
// 			<div>Hello my name is {<strong>{props.human.name}</strong>}</div>
// 			<div>I am {<strong>{props.human.age}</strong>} years old</div>
// 			<div>I am a {<strong>{props.human.profession}</strong>}</div>
// 			<div>My address is: {<strong>{props.human.address.country}, {props.human.address.city}, {props.human.address.currentAddress.street} {props.human.address.currentAddress.house} </strong>}</div>
//
// 		</div>
// 	);
// };