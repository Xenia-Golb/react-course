import { Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';

function Layout() {
    return (<div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['user']}>
                <img className={styles['avatar']} src="/avatar.svg" alt="avatar" />
                <div className={styles['name']}>Mrs. Golbraykh</div>
                <div className={styles['email']}>Meow@ya.ru</div>
            </div>

            <div className={styles['menu']}>
                <Link className={styles['link']} to='/'>
                    <img src="/menu-icon.svg" alt="logo" />
                    Menu</Link>
                <Link className={styles['link']} to='/cart'>
                    <img src="/cart-icon.svg" alt="logo" />
                    Cart</Link>
            </div>
            <Button className={styles['exit']}>
                <img src="/exit-icon.svg" alt="exit" />
                Выход
            </Button>
        </div>
        <div>
            <Outlet />
        </div>
    </div>);
}

export default Layout;