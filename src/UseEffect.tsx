import { useState, useEffect } from 'react';

const SampleComponent = () => {
  const [input, setInput] = useState('');
  const [value, setValue] = useState(0);
  console.log('initialize[SampleComponent]...');

  const handleChange1 = (e) => {
    console.log('handleChangeが呼ばれました');
    setInput(e.target.value);
  };

  const handleClick = (e) => {
    setValue(value + 1);
  };

  useEffect(() => {
    console.log('effect[1]...第2引数なし');
    return () => console.log('clean up[1]...第2引数なし');
  });

  useEffect(() => {
    console.log('effect[2]...第2引数空配列');
    return () => console.log('clean up[2]...第2引数空配列');
  }, []);

  useEffect(() => {
    console.log('effect[3]...valueが更新されたのでuseEffect');
    return () => console.log('clean up[3]...valueが更新されたのでuseEffect');
  }, [value]);

  return (
    <div>
      <input type="text" value={input} onChange={handleChange1} />
      <button onClick={handleClick}>+1(SampleComponent)</button>
      Sample Component
    </div>
  );
};

const App = () => {
  const [value, setValue] = useState(0);
  console.log('initialize[App]...');

  const handleClick = (e) => {
    setValue(value + 1);
  };
  const [mounted, setMounted] = useState(true);
  const toggle = () => setMounted(!mounted);

  return (
    <div>
      <button onClick={handleClick}>+1(App)</button>
      <button onClick={toggle}>Show/Hide SampleComponent</button>
      {mounted && <SampleComponent />}
      hoge
    </div>
  );
};

export default App;
