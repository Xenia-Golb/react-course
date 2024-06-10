import styles from './JournalForm.module.css';
import Button from '../Button/Button';
import { useState } from 'react';


function JournalForm({ onSubmit }) {

    const [formValidState, setFormValidState] = useState(
        {
            title: true,
            post: true,
            data: true
        }
    );

    const addJournalItem = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        let isFormValid = true;
        if (!formProps.title?.trim().lenght === 0) {
            setFormValidState(state => ({ ...state, title: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({
                ...state,
                title: true
            }));
        }
        if (!formProps.post?.trim().lenght === 0) {
            setFormValidState(state => ({ ...state, post: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({
                ...state,
                post: true
            }));
        }
        if (!formProps.data) {
            setFormValidState(state => ({ ...state, data: false }));
            isFormValid = false;
        } else {
            setFormValidState(state => ({
                ...state,
                data: true
            }));
        }
        if (!isFormValid) return;
        onSubmit(formProps);
    };
    return (
        <form className={styles['journal-form']} onSubmit={addJournalItem} >
            <input type="title" name='title' className={`${styles['input']} ${formValidState.title ? '' : styles['invalid']} }`} />
            <input type="date" name='data' className={`${styles['input']}  ${formValidState.data ? '' : styles['invalid']} }`} />
            <input type="text" name='tag' />
            <textarea name="post" id="" cols="30" rows="10" className={`${styles['input']}  ${formValidState.post ? '' : styles['invalid']} `} ></textarea>
            <Button text="Сохранить" />
        </form>

    );
}

export default JournalForm;