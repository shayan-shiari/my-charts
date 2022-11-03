import React, { Component } from 'react';

import AllCharts from './components/AllCharts';
import Header from './components/Header';
import BtmHeader from './components/BtmHeader';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BtmHeader />
                <AllCharts />
            </div>
        );
    }
}

export default App;