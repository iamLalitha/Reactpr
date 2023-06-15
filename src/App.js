import React from 'react';

function App() {
  const course='Half Stack application development';
  const part1='Fundamentals of React';
  const exercises1=10;
  const part2='Using props to pass data';
  const exercises2=7;
  const part3='State of a component';
  const exercises3=14;
  const part4='Number of exercises';
  const exercises4=31;
  return (
    <div>
      <h1>{course}</h1>
      <p>{part1} {exercises1}</p>
      <p>{part2} {exercises2}</p>
      <p>{part3} {exercises3}</p>
      <p>{part4} {exercises4}</p>
    </div>
  )
}

export default App;
