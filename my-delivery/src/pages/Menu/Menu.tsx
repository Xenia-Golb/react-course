import Headling from '../../components/Headling/Headling';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';


function Menu() {
    return (<>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search placeholder='Enter dish ' />
        </div>
    </>);

}

export default Menu;