// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Card = styled.div`
	display: flex;
	border: 2px black solid;
	border-radius: 10px;
	padding: 1% 0.5%;
	font-size: 1.5rem;
	justify-content: center;
	margin: 1% 5%;
	width: 30%;
	background-color: black;
	color: #5924d4;
	opacity: 0.8;
	transition: ease-in-out 0.5s;
	:hover {
		color: white;
		background-color: #5924d4;
		transform: scale(1.2);
		opacity: 0.9;
	}
`;

const Character = (props) => {
	return (
		<Card>
			<div>
				<div>Name: {props.name}</div>
				<p>Height: {props.height}</p>
				<p>Weight: {props.weight}</p>
				<p>Gender: {props.gender}</p>
			</div>
		</Card>
	);
};

export default Character;
