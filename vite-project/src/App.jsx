import './App.css';
import { useEffect, useState } from 'react';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if (data) {
      setItems(data.map(item => ({
        ...item,
        data: new Date(item.data)
      })));
    }
  }, []);
  useEffect(() => {
    if (items.length) {
      localStorage.setItem('data', JSON.stringify(items));
    }

  }, [items]);


  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      post: item.post,
      title: item.title,
      data: new Date(item.data),
      id: oldItems.length > 0 ? Math.max(...oldItems.map(item => item.id)) + 1 : 1
    }]);
  };
  const sortItems = (a, b) => {
    if (a.data < b.data) {
      return 1;
    } else {
      return -1;
    }
  };
  let list = <p>Записей пока нет, добавьте новую</p>;
  if (items.length > 0) {
    list = items.sort(sortItems).map(el => (
      <CardButton key={el.id}>
        <JournalItem
          title={el.title}
          data={el.data}
          txt={el.txt}
        />
      </CardButton>
    ));
  }
  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList>
          {list}
        </JournalList>

      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>);

}
export default App;
