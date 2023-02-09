import React, { ReactElement } from 'react';
import styles from './UserCard.module.css'

type UserCardPropsType = {
    picture: string,
    name: string,
    email: string
}

export const UserCard = ({picture, name, email}: UserCardPropsType): ReactElement => {
    return (
        <div className={styles.card}>
            <img src={picture} alt="avatar" className={styles.image}/>
            <div className={styles.userInfo}>
                <h3>{name}</h3>
                <p>{email}</p>
            </div>
        </div>
    );
};