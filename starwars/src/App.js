import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';

const App = () => {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [character, setCharacter] = useState([]);

	useEffect(() => {
		axios
			.get(`https://swapi.dev/api/people`)
			.then((res) => {
				console.log(`Resolved: `, res);
				setCharacter(res.data.results);
			})
			.catch((err) => {
				console.log(`Error: `, err);
			});
	}, []);

	// Fetch characters from the API in an effect hook. Remember, any time you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.

	return (
		<div>
			<h1 className='Header'>Characters</h1>
			<div className='App'>
				{character.map((char, i) => {
					return (
						<Character
							key={i}
							name={char.name}
							height={char.height}
							weight={char.mass}
							gender={char.gender}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default App;
