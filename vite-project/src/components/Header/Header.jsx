
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header({ changedUser }) {
    const changeUser = (e) => {
        changedUser(e.target.value);
    };
    return (
        <div className='header'>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <h1 className='header-tit'>Personal journal</h1>
            <SelectUser changedUser={changeUser} />
        </div>);
}

export default Header;