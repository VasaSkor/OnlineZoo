import React from 'react';
import styles from './MyButton.module.scss';

interface MyButtonProps {
    text: string;
    id: string;
}

const MyButton: React.FC<MyButtonProps> = ({ text, id }) => {
    return (
        <button id={id} className={styles.myBtn}>
            {text}
        </button>
    );
};

export default MyButton;
