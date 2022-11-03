import React from 'react';

import IranMap from './IranMap';
import BarChart1 from './BarChart1';
import BarChart2 from './BarChart2';
import AreaChart from './AreaChart';
import Side from './Side';

import styles from './AllChart.module.css';

const AllCharts = () => {
    return (
        <div className={styles.container}>
            <IranMap />
            <BarChart1 />
            <AreaChart />
            <BarChart2 />
            <Side />
        </div>
    );
};

export default AllCharts;