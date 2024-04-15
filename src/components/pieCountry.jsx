import {Pie} from "react-chartjs-2"
import {useContext,useEffect } from "react";
import {FilterContext } from '../context/filter';
import {FilterNameContext} from "../context/filterName"


import{
    Chart as ChartJS,
   Tooltip,
   ArcElement,
    Legend
 } from "chart.js"
    ChartJS.register(
    Tooltip,
     ArcElement,
     Legend
  );

const PieCountry= ({data}) => {
  const {filter,setFilter} = useContext(FilterContext); 
  const {filterName,setFilterName} = useContext(FilterNameContext); 
  

  const filteredData = data.filter((item) => item[filterName] === filter);
  const countryIntensitySum = {};
  filteredData.forEach((item) => {
    const { country, intensity } = item;
    
    
    if (country in countryIntensitySum) {   
      countryIntensitySum[country] += intensity;
    } else {
      countryIntensitySum[country] = intensity;
    }
  });
  

  const country=Object.keys(countryIntensitySum);
  const intensity=Object.values(countryIntensitySum);

 
  
  const PieChartData={
    labels:country,
    datasets:[
        {
            label:"Intensity",
            data:intensity,
            backgroundColor:[
              " rgba(230, 41, 195,0.9)",
              " rgba(230, 41, 195,0.5)",
              " rgba(230, 41, 195,0.8)",
              " rgba(230, 41, 195,0.6)",
              " rgba(230, 41, 195,1)",
              " rgba(230, 41, 195,0.7)",
              " rgba(230, 41, 195,0.45)",
              " rgba(230, 41, 195,0.95)",
              " rgba(230, 41, 195,0.36)",
              " rgba(230, 41, 195,0.1)",
              " rgba(230, 41, 195,0.2)",
              " rgba(230, 41, 195,0.3)",
              " rgba(230, 41, 195,0.4)",

            
            ],
            hoverOffset:20,
        }
    ]
}
  
  return (
    <div  className=" h-auto dark:bg-black  rounded-[1.2rem]  flex justify-center items-center bg-white  ">
    <Pie data={PieChartData} />

    </div>
  )
}

export default PieCountry

