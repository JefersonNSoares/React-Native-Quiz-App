import React from 'react';
// algoritmo Fisher-Yates
export const numRandom = () => {
  const maxNumbers = 4;
  let list = [];
  for (let i = 0; i < maxNumbers; i++) {
    list[i] = i + 1;
  }
  let randomNumber;
  let tmp;
  for (let i = list.length; i;) {
      randomNumber = Math.random() * i-- | 0;
      tmp = list[randomNumber];
      list[randomNumber] = list[i];
      list[i] = tmp;
  }
  return list; // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
}