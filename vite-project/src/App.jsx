import './App.css';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalList from './components/JournalList/JournalList';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalForm from './components/JournalForm/JournalForm';
import { useLocalStorage } from './hooks/useLocalStorage.hook';

function mapItems(items) {
  if (!items) {
    return [];
  }
  return items.map(item => ({
    ...item,
    date: new Date(item.i)
  }));
}

function App() {
  const [items, setItems] = useLocalStorage('data');

  const addItem = item => {
    setItems([...mapItems(items), {
      post: item.post,
      title: item.title,
      id: items.length > 0 ? Math.max(...items.map(item => item.id)) + 1 : 1
    }]);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header />
        <JournalAddButton />
        <JournalList
          items={mapItems(items)}
        />
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem} />
      </Body>

    </div>);

}
export default App;
