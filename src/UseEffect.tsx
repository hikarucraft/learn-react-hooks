import { useState, useEffect } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  const [value, setValue] = useState(0);
  console.log('initialize...');

  const handleChange1 = (e) => {
    console.log('handleChangeが呼ばれました');
    setInput1(e.target.value);
  };

  const handleClick = (e) => {
    setValue(1);
  };

  useEffect(() => {
    console.log('effect...レンダーのたびに毎回呼ばれる');
    return () => console.log('clean up...');
  }, [value]);
  return (
    <div>
      <input type="text" value={input1} onChange={handleChange1} />
      <button onClick={handleClick}></button>
      hoge
    </div>
  );
};

export default App;
