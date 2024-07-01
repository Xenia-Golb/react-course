import Headling from '../../components/Headling/Headling';
import ProductCard from '../../components/ProductCard/ProductCard';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';


function Menu() {
    return (<>
        <div className={styles['head']}>
            <Headling>Menu</Headling>
            <Search placeholder='Enter dish ' />
        </div>
        <div>
            <ProductCard
                id={1}
                title='Pizza Italy'
                description='Italian Pizza with tomato sauce, mozzarella, and basil'
                rating={4.5}
                price={2.99}
                image='/pizza.svg'
            />
        </div>
    </>);

}

export default Menu;