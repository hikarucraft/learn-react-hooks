import React, { useState } from 'react';

const MemoTitle = React.memo(() => {
  console.log('[Memo] Title Component...');
  return <div>This is Title with memo.</div>;
});

const MemoButton = React.memo(({ handleClick, contentValue }) => {
  console.log('[Memo] Button component...');
  return (
    <button type="button" onClick={handleClick}>
      {contentValue}
    </button>
  );
});

const MemoCount = React.memo(({ text, countState }) => {
  console.log('[Memo] Count component...');
  return (
    <p>
      {text}:{countState}
    </p>
  );
});

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
        <h1>These are Memo Components.</h1>
        <MemoTitle />
        <MemoCount
          text={'value of +1 button(firstCountState)'}
          countState={firstCountState}
        />
        <MemoCount
          text={'value of +10 button(secondCountState)'}
          countState={secondCountState}
        />
        <MemoButton
          handleClick={incrementFirstCounter}
          contentValue={'+1 button (1st countState)'}
        />
        <MemoButton
          handleClick={incrementSecondCounter}
          contentValue={'+10 button (2nd countState)'}
        />
      </div>
    </>
  );
};

export default Counter;
