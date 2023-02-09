import React from 'react';
import './App.css';
import { InfiniteScroll } from './Modules/InfiniteScroll';

/**
 * Renders root element of the application
 * @constructor
 */
function App() {
    return (
        <div className="App">
            <InfiniteScroll/>
        </div>
    );
}

export default App;
