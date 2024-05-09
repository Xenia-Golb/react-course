import './JournalItem.css';
function JournalItem({ title, data, txt }) {
    const formatedDate = new Intl.DateTimeFormat('ru-RU').format(data);

    return (
        <>
            <h2 className="journal-item__header">{title}</h2>
            <h2 className="journal-item__body">
                <div className="journal-item__data">{formatedDate}</div>
                <div className="journal-item__txt">{txt}</div>
            </h2>


        </>);
}

export default JournalItem;