
import styles from './Header.module.css';

function Header() {

    return (
        <div className='header'>
            <img className={styles.logo} src="/logo.svg" alt="logo" />
            <h1 className='header-tit'>Personal journal</h1>
        </div>);
}

export default Header;