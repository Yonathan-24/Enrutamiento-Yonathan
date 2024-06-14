import React from 'react';
import { useParams } from 'react-router-dom';

const DisplayWord = () => {
  const { word } = useParams();

  return (
    <div>
      {isNaN(word) ? <h1>{word}</h1> : <h1>Invalid word</h1>}
    </div>
  );
}

export default DisplayWord;
