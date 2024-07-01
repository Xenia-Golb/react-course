import '../Button/Button.module.css';
import { Buttonprops } from './Button.props';
import cn from 'classnames';

function Button({ children, className, ...props }: Buttonprops) {
    console.log('Button');
    return (
        <button className={cn('button accent', className)}{...props}>{children}</button>
    );
}

export default Button;