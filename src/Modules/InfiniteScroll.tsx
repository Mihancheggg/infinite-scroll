import React, { useEffect, useState } from 'react';
import { RootObjectResults } from '../Types/RandomUserResponseType';
import { UserCard } from '../Components/UserCard';
import { UsersAPI } from '../API/UsersAPI';

/**
 * Component renders amount of users cards according to data from server
 * @constructor
 */
export const InfiniteScroll = () => {
    const [profiles, setProfiles] = useState<RootObjectResults[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [numberOfResults, setNumberOfResults] = useState<number>(10);
    const [fetching, setFetching] = useState<boolean>(true);


    useEffect(() => {
        if (fetching) {
            UsersAPI.getUsers(currentPage, numberOfResults)
                .then(response => response.json()).then(users => {
                    setProfiles((prev) => profiles.length ? [...prev, ...users.results] : users.results);
                    setCurrentPage(prevPage => prevPage + 1);
                }
            ).finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)

        return function () {
            document.removeEventListener('scroll', scrollHandler)
        }
    }, [])

    /**
     * The function determines when user reaches the bottom of the page and turns fetching status on
     * @param {any} event scrolling event, generated automatically
     */
    const scrollHandler = (event: any): void => {
        if (event.target.documentElement.scrollHeight - (event.target.documentElement.scrollTop + window.innerHeight) < 60) {
            setFetching(true)
        }
    }

    return (
        <div>
            {profiles.map((el, index) =>
                <UserCard key={index} picture={el.picture.large} name={el.name.first} email={el.email}/>
            )}
        </div>
    );
};