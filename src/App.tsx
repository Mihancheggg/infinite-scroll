import React, { useEffect, useState } from 'react';
import './App.css';
import { RootObjectResults } from './Types/RandomUserResponseType';
import { UserCard } from './Components/UserCard';
import { InfiniteScroll } from './Modules/InfiniteScroll';

//component
function App() {
    return (
        <div className="App">
            <InfiniteScroll/>
        </div>
    );
}

export default App;
