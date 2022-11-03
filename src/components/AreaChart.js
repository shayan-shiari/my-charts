import React from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

//Data
import Data from '../data/AreaChartData.json';

//Images
import hmg from '../assets/images/hbg.svg';
import img3 from '../assets/images/svg-area.svg';

const AreaChart = () => {


    const options = {
        chart: {
            type: 'area',
        },
        credits: {
            enabled: false
        },
        title: {
            text: ""
        },
        series: [
            {
                showInLegend: false,
                data: Data.map(item => item.data),
                color: "rgb(46,202,154,75)",
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
            title: {
                text: 'تعداد آدرس آلوده'
            },
            exporting: {
                buttuns: {
                    contextButton: {
                        menuItems: [{
                            text: 'salam'
                        }]
                    }
                }
            }

        },

    }
    return (
        <div className='container' >
            <div>
                <div className='heading'>
                    <img src={img3} alt="chart" />
                    <h3>تعداد آدرس‌های ایرانی آلوده به بدافزار</h3>
                </div>
                <img className='hmg' src={hmg} alt="menu" />
            </div>
            <HighchartsReact highcharts={Highcharts} width={300} options={options} />
        </div>
    );
};

export default AreaChart;