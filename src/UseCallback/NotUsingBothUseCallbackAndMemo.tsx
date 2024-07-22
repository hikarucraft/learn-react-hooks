import React, { useState } from 'react';

const Title = () => {
  console.log('Title Component...');
  return <div>This is Title without memo.</div>;
};

const Button = ({ handleClick, contentValue }) => {
  console.log('Button component...');
  return (
    <button type="button" onClick={handleClick}>
      {contentValue}
    </button>
  );
};

const Count = ({ text, countState }) => {
  console.log('Count component...');
  return (
    <p>
      {text}:{countState}
    </p>
  );
};

const Counter = () => {
  const [firstCountState, setFirstCountState] = useState(0);
  const [secondCountState, setSecondCountState] = useState(10);

  const incrementFirstCounter = () => {
    console.log('incrementFirstCounter');
    setFirstCountState(firstCountState + 1);
  };
  const incrementSecondCounter = () => {
    console.log('incrementSecoundCounter');
    setSecondCountState(secondCountState + 10);
  };
  return (
    <>
      <div>
        <h1>These are Not Memo Components.</h1>
        <Title />
        <Count
          text="value of +1 button(firstCountState)"
          countState={firstCountState}
        />
        <Count
          text="value of +10 button(secondCountState)"
          countState={secondCountState}
        />
        <Button
          handleClick={incrementFirstCounter}
          contentValue={'+1 button (1st countState)'}
        />
        <Button
          handleClick={incrementSecondCounter}
          contentValue={'+10 button (2nd countState)'}
        />
      </div>
    </>
  );
};

export default Counter;
