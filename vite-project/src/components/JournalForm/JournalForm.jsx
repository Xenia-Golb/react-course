import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';

// const INITIAL_STATE = {
//     title: true,
//     post: true,
//     data: true
// };

function JournalForm({ onSubmit }) {
    // const [formValidState, setFormValidState] = useState(INITIAL_STATE);
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;

    useEffect(() => {
        let timerId;
        if (!isValid.title || !isValid.post || !isValid.data) {
            timerId = setTimeout(() => {
                dispatchForm({ type: 'RESET_VALIDITY' });
            }, 2000);

        }
        return () => {
            clearTimeout(timerId);
        };
    }, [isValid]);

    useEffect(() => {
        if (isFormReadyToSubmit) {
            onSubmit(values);
        }
    }, [isFormReadyToSubmit]);

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        dispatchForm({ type: 'SUBMIT', payload: formProps });
    };
    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem} >
            <div>
                <input type="title" name='title'
                    className={cn(styles['input-title'], {
                        [styles['invalid']]: !isValid.title
                    })} />
            </div>

            <div className={styles['form-row']}>
                <label htmlFor="data" className={styles['form-label']}>
                    <img className={styles.svg} src='/calendar-check-svgrepo-com.svg' alt='иконка календаря' />
                    <span>Дата</span>
                </label>
                <input type="date" name='data' id="data" className={cn(styles['input'], {
                    [styles['invalid']]: !isValid.data
                })} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img className={styles.svg} src='/folder-svgrepo-com.svg' alt='иконка тегов' />
                    <span>Метки</span>
                </label>
                <input type="text" id='tag' name='tag' className={styles['input']} />
            </div>

            <textarea name="post" id="" cols="30" rows="10" className={cn(styles['input'], {
                [styles['invalid']]: !isValid.post
            })}></textarea>
            <Button text="Сохранить" />
        </form>

    );
}

export default JournalForm;