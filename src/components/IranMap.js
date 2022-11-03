import React, { useState } from "react";
// Import Highcharts
import Highcharts from "highcharts/highmaps";
import IranGeoData from "@highcharts/map-collection/countries/ir/ir-all.topo.json";
import HighchartsReact from "highcharts-react-official";

//Data 
import Data from '../data/IranMapData.json';

//Images 
import hmg from '../assets/images/hbg.svg';
import img4 from '../assets/images/svg-map.svg';

const IranMap = () => {
  const [options] = useState({
    chart: {
      map: IranGeoData
    },
    credits: {
      enabled:false
  },
    mapNavigation: {
      buttonOptions: {
        alignTo: "spacingBox"
      }
    },
    title: {
      text:''
    },
    colorAxis: {
      min: 1,
      max:1000,
      minColor:'#990000',
      maxColor:'#ff9999'
    },
    series: [
      {
        name: "Random data",
        nullColor: 'yellow',
        states: {
          hover: {
            color: "#BADA55"
          }
        },
        dataLabels: {
          enabled: true,
          format: "{point.name}"
        },
        allAreas: false,
        data:Data.map(item => item.data)
      }
    ]
  });

  return (
    <div className='container'>
      <div>
        <div className="heading">
          <img src={img4} alt="chart" />
          <h3>توزیع آدرس‌های آلوده به بدافزار در کشور</h3>
        </div>
        <img className="hmg" src={hmg} alt="menu" />
      </div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={"mapChart"}
        options={options}
      />
    </div>
  );
};

export default IranMap;
