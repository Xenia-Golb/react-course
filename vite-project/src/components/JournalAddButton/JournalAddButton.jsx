import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';

function JournalAddButton() {

    return (
        <CardButton className="journal-add">
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 12H20M12 4V20" stroke="rgba(255, 255, 255, 0.40)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
            Новое воспоминание
        </CardButton >);
}

export default JournalAddButton;