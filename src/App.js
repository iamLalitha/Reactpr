import React from 'react';

function Header(props){
  return(
    <header>
      <h1>{props.course}</h1>
    </header>
  );
}

function Content(props){
  return(
    <div>
      <p>{props.part1} {props.exercises1}</p>
      <p>{props.part2} {props.exercises2}</p>
      <p>{props.part3} {props.exercises3}</p>
     </div>
  );
}

function Total(props){
  const totalexercise=props.exercises1+props.exercises2+props.exercises3;
  return(
    <div>
      <p>Number of exercise:{totalexercise}</p>
    </div>
  )
}
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
      <Header course={course}/>

      <Content
      part1={part1} exercises1={exercises1}
      part2={part2} exercises2={exercises2}
      part3={part3} exercises3={exercises3}
      part4={part4} exercises4={exercises4}
      />

      <Total
      exercises1={exercises1}
      exercises2={exercises2}
      exercises3={exercises3}
      exercises4={exercises4}/>
      </div>
     
  );
}

export default App;
