import React from 'react';

const TextLineBr = ({text}) => {
  return text.split('\n').map((str, i) => <p key={i}>{str}</p>);
};

export default TextLineBr