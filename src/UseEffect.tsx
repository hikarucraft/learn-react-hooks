import { useState, useEffect } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  console.log('initialize...');

  const handleChange1 = (e) => {
    console.log('handleChangeが呼ばれました');
    setInput1(e.target.value);
  };

  useEffect(() => {
    console.log('effect...レンダーのたびに毎回呼ばれる');
    return () => console.log('clean up...');
  }, []);
  return (
    <div>
      <input type="text" value={input1} onChange={handleChange1} />
      hoge
    </div>
  );
};

export default App;
