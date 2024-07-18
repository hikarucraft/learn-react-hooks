import { useState } from 'react';

const App = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleChange1 = (e) => {
    setInput1(e.target.value);
  };
  const handleChange2 = (e) => {
    setInput2(e.target.value);
  };
  return (
    <div>
      <input type="text" value={input1} onChange={handleChange1} />
      <input type="text" value={input2} onChange={handleChange2} />
    </div>
  );
};

export default App;
