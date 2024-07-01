import styles from '../Button/Button.module.css';
import { Buttonprops } from './Button.props';
import cn from 'classnames';

function Button({ children, className, appearence = 'small', ...props }: Buttonprops) {
    console.log('Button');
    return (
        <button className={cn(styles['button'], styles['accent'], className, {
            [styles['small']]: appearence === 'small',
            [styles['big']]: appearence === 'big'
        })}{...props}>{children}</button>
    );
}

export default Button;