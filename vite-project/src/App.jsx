import './App.css';
import { useState } from 'react';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';

const INITIAL_DATA = [
  //{
  //   id: 1,
  //   title: 'Подготовка к обновлению курсов',
  //   data: new Date(),
  //   txt: 'Горные походы открывают удивительные природные ландшафты'
  // },
  // {
  //   id: 2,
  //   title: 'Поход в горы',
  //   data: new Date(),
  //   txt: 'Думал очень много времени ...'
  // }
];
function App() {
  const [items, setItems] = useState(INITIAL_DATA);
  const addItem = item => {
    setItems(oldItems => [...oldItems, {
      txt: item.text,
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
