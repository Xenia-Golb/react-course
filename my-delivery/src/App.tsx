
import { MouseEvent } from 'react';

import Button from './components/Button/Button';

function App() {
  // const [counter, setCounter] = useState<number>();
  const addCounter = (e: MouseEvent) => {
    console.log(e);
  };


  return (
    <>
      <Button onClick={addCounter}>Кнопка</Button >
    </>
  );
}

export default App;
