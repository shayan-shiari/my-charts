import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//Data
import Data from '../data/BarChart2Data.json';

//Images
import img2 from '../assets/images/svg-bar2.svg';
import hmg from '../assets/images/hbg.svg';

const BarChart2 = () => {

    const options = {
        chart: {
            type: 'column',
        },
        credits: {
            enabled:false
        },
        title: {
            text: ""
        },
        series: [
            {
                showInLegend: false,
                data: Data.map(item => item.data),
                color: "#3f4254",
                borderRadius: 7,
                states: {
                    hover: {
                        color: '#ff2'
                    }
                }
            }
        ],
        xAxis: {
            categories: Data.map(item => item.categories),

        },

        
        yAxis: {
            gridLineWidth: 0,
            title : {
                text: 'تعداد'
            },
            exporting: {
                buttuns: {
                    contextButton: {
                        menuItems: [{
                            text:''
                        }]
                    }
                }
            }

        },

    }
    return (
        <div className='container'>
            <div>
                <div className='heading'>
                    <img src={img2} alt="chart" />
                    <h3 >شایع‌ترین بدافزارهای فعال کشور</h3>
                </div>
                <img className='hmg' src={hmg} alt="menu" />
            </div>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default BarChart2;