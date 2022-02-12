import Link from "next/link";
import Image from "next/image";
import * as cheerio from 'cheerio';
import Nomics from "nomics";
/* import { useRouter } from "next/router"; */
import {  ReactNode, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
var Chance = require('chance');
var chance = new Chance();

/* import ChartLine from "../../public/Chartstabil.png"; */
import SelectDownIcon from "../../public/select-down.png";

import type { NextPage } from "next";
import { randomInt } from "crypto";
const nomics = new Nomics({
  apiKey: "f5b3378230993f0291d6455887fae08ad928666d"
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
interface Props {

  sentence: string;
  coinList?: Array<undefined>;
  datacurrencies?: Array<undefined>;
  currencies?: Array<undefined>;
  }





  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Daily Price Chart',
      },
    },
  };
  const bugun = new Date();
  bugun.setDate(bugun.getDate() );


function getDateItems(hours: number) {
  var toDate = new Date();
  var fromDate = new Date();
  fromDate.setTime(fromDate.getTime() - (hours * 60 * 60 * 1000));
  var result = [];
  
  while (toDate >= fromDate) {
     result.push(("00" + (toDate.getMonth() + 1)).slice(-2) + "-" + ("00" + toDate.getDate()).slice(-2) + " " + ("00" + toDate.getHours()).slice(-2) + ":" + ("00" + toDate.getMinutes()).slice(-2) + ":" + ("00" + toDate.getSeconds()).slice(-2)); 
    //-result.push(("00" + toDate.getDate()).slice(-2) + " " +("00" + (toDate.getMonth() + 1)).slice(-2) + "-" + ("00" + toDate.getHours()).slice(-2) + ":" + ("00" + toDate.getMinutes()).slice(-2) + ":" + ("00" + toDate.getSeconds()).slice(-2));
    // consider using moment.js library to format date
    
    toDate.setTime(toDate.getTime() - (1 * 60 * 60  *1000));
  }

  return result;
}

var labels = getDateItems(24).reverse();
var datesFrom48Hours = getDateItems(48);
  const rakamlarx : any = [];
  const rakamlary : any= [];

  const usdtnumber: Array<Number> = [];

  const usdcnumber:Array<Number>  = [];
  
  for (let i = 0; i < 24; i++) {
    
    usdtnumber.push(chance.integer({ min:0.95, max: 1.1}));

  
    
  }

  for (let i = 0; i < 24; i++) {
    usdcnumber.push(chance.integer({ min: 0.99, max: 1.1}))

    
  }


  /* https://docs.google.com/spreadsheets/d/e/2PACX-1vTFdDx6GqM9bFDv_GsJEX90DUOYImOKx7h5M4rVw7TD9sB59g5rRLfK0TlokXdtgJMuD50foANzxBCy/pub?gid=573999951&single=true&output=csv */
  

  

  export const datachart = {
    labels,
    datasets: [

      {
        label: 'USDT',
        data: labels.map(() => Number(chance.floating({ min: 0.95, max: 1.1 }))),
        borderColor: 'rgba(43, 48, 185, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'USDc',
        data: labels.map(() => Number(chance.floating({ min: 0.95, max: 1.1 }))),
        borderColor: 'rgba(46, 218, 175, 1)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
 
    ],
  };


const ChartContent: NextPage<Props> = (props: {

  sentence: string;  
  coinList?: Array<undefined>;
  datacurrencies?: Array<undefined>;
  currencies?: Array<undefined>;
  
}) => {

console.log(props);


  return (
    <div className="pb-5 ml-6 bg-white rounded shadow-lg xs:ml-0 border-lagrangeborder xxl:w-128 lg:w-128 md:w-128 sm:w-128 xs:w-90">
      <div className="">
        <div className="">
          <p className="pt-4 ml-5 text-lg font-normal">USDT / USDC</p>
  


          {/*           <p className="font-normal">1.00 - 0.00 %</p> */}
          <p className="mt-4 ml-5 text-base font-normal">
            {" "}
            {new Date().getDate()}
            {"/"}
            {new Date().getMonth()}
            {"/"}
            {new Date().getFullYear()}, {new Date().getHours()}:
            {new Date().getMinutes()}
          </p>
        </div>
  
     
        <div className=" h-72">
        <Line options={options} data={datachart} />
        </div>
        <div className="flex items-center justify-between p-2 ml-4 mr-4 rounded bg-lagrangegraybackground">
          {" "}
          <div className="flex flex-wrap items-center self-center justify-center font-normal sm:text-2xl xs:text-xs">
            <Image
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/825.png"
              alt="USDC"
              width={32}
              height={32}
              layout="fixed"
            />
            <p className="px-2 py-2 text-white">USDT</p>
          </div>
          <div className="flex items-center space-x-2 font-normal">
            <p className="pr-2 font-normal text-white">1.00$</p>{" "}
            <p className="pr-2 font-normal text-lagrangered">0.00</p>
            <Image
              src={SelectDownIcon}
              alt="Select Down"
              className="w-8 h-82"
            />
          </div>
        </div>
        <div className="h-6"></div>
        <div className="flex items-center justify-between p-2 ml-4 mr-4 rounded bg-lagrangegraybackground">
          {" "}
          <div className="flex flex-wrap items-center self-center justify-center font-normal sm:text-2xl xs:text-xs">
            <Image
              src="https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png"
              alt="USDC"
              width={32}
              height={32}
              layout="fixed"
            />
            <p className="px-2 py-2 font-normal text-white">USDC</p>
          </div>
          <div className="flex items-center space-x-2">
            <p className="pr-2 font-normal text-white">1.00$</p>{" "}
            <p className="pr-2 font-normal text-green-700">0.00</p>
            <Image
              src={SelectDownIcon}
              alt="Select Down"
              className="w-8 h-82"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChartContent;
