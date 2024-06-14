import React from 'react';
import { useParams } from 'react-router-dom';

const StyledWord = () => {
  const { word, color, bgColor } = useParams();

  const style = {
    color: color,
    backgroundColor: bgColor,
    padding: '20px',
    borderRadius: '10px'
  };

  return (
    <div style={style}>
      <h1>{word}</h1>
    </div>
  );
};

export default StyledWord;
