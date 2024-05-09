
import './App.css';
import Button from './components/Button/Button';
import JournalItem from './components/JournalItem/JournalItem';
import CardButton from './components/CardButton/CardButton';
function App() {
  const data = [
    {
      title: 'Подготовка к обновлению курсов',
      data: new Date(),
      txt: 'Горные походы открывают удивительные природные ландшафты'
    },
    {
      title: 'Поход в горы',
      data: new Date(),
      txt: 'Думал очень много времени ...'
    }
  ];
  return (
    <>
      <h1>Title</h1>
      <p>TXT</p>
      <Button />
      <CardButton>
        <JournalItem
          title={data[0].title}
          data={data[0].data}
          txt={data[0].txt}

        />
      </CardButton>
      <CardButton>
        <JournalItem
          title={data[1].title}
          data={data[1].data}
          txt={data[1].txt}

        />
      </CardButton>
    </>);
}

export default App;
