
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

function JournalList({ items }) {
    if (items.length === 0) {
        return <p>Записей пока нет, добавьте новую</p>;
    }
    const sortItems = (a, b) => {
        if (a.data < b.data) {
            return 1;
        } else {
            return -1;
        }
    };
    return <>
        {items.sort(sortItems).map(el => (
            <CardButton key={el.id}>
                <JournalItem
                    title={el.title}
                    data={el.date}
                    post={el.post}
                />
            </CardButton>
        ))}
    </>;
}

export default JournalList;