import React, { useState } from 'react';
import { message } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { GET_POKEMONS } from '../graphql/get-pokemons';
import Pokemons from './Pokemons';
import Question from '../components/Question';
import Score from '../components/Score';
import { Pokemon } from '../type/types';

const Main = () => {
  const numberOfPokemon: number = 151;

  const [randomNumArr, setRandomNumArr] = useState(
    generateRandomNumbers([], numberOfPokemon)
  );

  const [score, setScore] = useState(0);

  const { loading, error, data = { pokemons: [] } } = useQuery(GET_POKEMONS, {
    variables: { first: numberOfPokemon },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  let pickedPokemons: Array<Pokemon> = [];

  randomNumArr.forEach((number) => {
    pickedPokemons.push(data.pokemons[number]);
  });
  let correctPokemon: Pokemon = pickedPokemons[Math.floor(Math.random() * 4)];

  const handleCardClick = (id: string): boolean => {
    if (correctPokemon.id === id) {
      nextRound(setRandomNumArr, numberOfPokemon);
      pickedPokemons.length = 0;
      randomNumArr.forEach((number) => {
        pickedPokemons.push(data.pokemons[number]);
      });
      correctPokemon = pickedPokemons[Math.floor(Math.random() * 4)];
      setScore(score + 1);
      message.success('Correct! Try the next question.', 1.5);
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className='main-content'>
      <Question pokemon={correctPokemon} />
      <Pokemons handleCardClick={handleCardClick} pokemons={pickedPokemons} />
      <Score score={score} />
    </div>
  );
};

export default Main;

const generateRandomNumbers = (
  numberArray: Array<number>,
  maxNumber: number
): Array<number> => {
  while (numberArray.length < 4) {
    const randomNum: number = Math.floor(Math.random() * maxNumber);
    if (!numberArray.includes(randomNum)) numberArray.push(randomNum);
    else generateRandomNumbers(numberArray, maxNumber);
  }

  return numberArray;
};

const nextRound = (
  setRandomNumArr: React.Dispatch<React.SetStateAction<number[]>>,
  maxNumber: number
) => {
  setRandomNumArr(generateRandomNumbers([], maxNumber));
};
