
import SelectUser from '../SelectUser/SelectUser';
import styles from './Header.module.css';

function Header() {
    return (
        <div className='header'>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <h1 className='header-tit'>Personal journal</h1>
            <SelectUser />
        </div>);
}

export default Header;