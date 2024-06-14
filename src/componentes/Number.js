// components/NumberComponent.js
import React from 'react';
import { useParams } from 'react-router-dom';

const NumberComponent = () => {
  let { number } = useParams();

  return (
    <div>
      <h1>{number}</h1>
    </div>
  );
}

export default NumberComponent;
