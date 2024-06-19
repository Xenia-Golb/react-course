import { useRef } from 'react';
import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useEffect, useReducer } from 'react';
import cn from 'classnames';
import { INITIAL_STATE, formReducer } from './JournalForm.state';
import Input from '../Input/Input';

function JournalForm({ onSubmit }) {
    const [formState, dispatchForm] = useReducer(formReducer, INITIAL_STATE);
    const { isValid, isFormReadyToSubmit, values } = formState;
    const titRef = useRef();
    const dateRef = useRef();
    const postRef = useRef();


    const focusError = (isValid) => {
        switch (true) {
            case !isValid.title:
                titRef.current.focus();
                break;
            case !isValid.post:
                postRef.current.focus();
                break;
            case !isValid.date:
                dateRef.current.focus();
                break;
        }
    };
    useEffect(() => {
        let timerId;
        if (!isValid.date || !isValid.post || !isValid.title) {
            focusError(isValid);
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
            dispatchForm({ type: 'CLEAR' });
        }
    }, [isFormReadyToSubmit, onSubmit, values]);

    const onChange = (e) => {
        dispatchForm({
            type: 'SET_VALUE', payload: { [e.target.name]: e.target.value }
        });
    };
    const addJournalItem = (e) => {
        e.preventDefault();
        dispatchForm({ type: 'SUBMIT' });
    };
    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem} >
            <div>
                <Input
                    type="text"
                    ref={titRef}
                    value={values.title}
                    name='title'
                    onChange={onChange}
                    isValid={isValid.title}
                    appearence='title' />
            </div>

            <div className={styles['form-row']}>
                <label htmlFor="date" className={styles['form-label']}>
                    <img className={styles.svg} src='/calendar-check-svgrepo-com.svg' alt='иконка календаря' />
                    <span>Дата</span>
                </label>
                <Input
                    value={values.date}
                    type="date"
                    ref={dateRef}
                    name='date'
                    id="date"
                    onChange={onChange}
                    isValid={isValid.date} />
            </div>
            <div className={styles['form-row']}>
                <label htmlFor="tag" className={styles['form-label']}>
                    <img className={styles.svg} src='/folder-svgrepo-com.svg' alt='иконка тегов' />
                    <span>Метки</span>
                </label>
                <Input type='text' onChange={onChange} id="tag" value={values.tag} name='tag' />
            </div>

            <textarea
                value={values.post}
                name="post"
                ref={postRef}
                id=""
                cols="30"
                rows="10"
                onChange={onChange}
                className={cn({
                    [styles.input]: true,
                    [styles.invalid]: !isValid.post
                })}
            >
            </textarea>
            <Button text="Сохранить" />
        </form>

    );
}

export default JournalForm;