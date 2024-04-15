import {Pie} from "react-chartjs-2"
import {useContext } from "react";
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

const PieGraph = ({data}) => {
  const {filter,setFilter} = useContext(FilterContext); 
  const {filterName,setFilterName} = useContext(FilterNameContext); 
  

  const filteredData = data.filter((item) => item[filterName] === filter);
  const regionIntensitySum = {};
  filteredData.forEach((item) => {
    const { region, intensity } = item;
    
    
    if (region in regionIntensitySum) {   
      regionIntensitySum[region] += intensity;
    } else {
      regionIntensitySum[region] = intensity;
    }
  });
  

  const region=Object.keys(regionIntensitySum);
  const intensity=Object.values(regionIntensitySum);

 
  
  const PieChartData={
    labels:region,
    datasets:[
        {
            label:"Intensity",
            data:intensity,
            backgroundColor:[
              "#ff6384", 
              "#36a2eb",  
              "#4bc0c0", 
              "#ffce56",
              "#9966ff", 
              "#c0c0c0", // Color 
              "#ffd700", // Color 
              "#f0a30a", // Color 9 
              "#cc33cc", // Color 10 
              "#ff3333", // Color 
              "#33cc33", // Color 12
              "#f1a9a0", // Color 13 (bright peach)
              "#3f51b5", // Color 14 (bright blue)
              "#ba68c8", // Color 15 (bright purple)
              "#00bfa5", // Color 16 (bright teal)
              "#29b6f6", // Color 17 (bright blue)
              "#ffa726", // Color 18 (bright orange)
              "#9e9d24"  // Color 19 (bright olive)
               
            ],
            hoverOffset:20,
        }
    ]
}
  
  return (
    <div  className="lg:w-1/4 h-auto md:w-1/3 w-full rounded-[1.2rem] bg-white sm:h-52 flex justify-center items-center">
    <Pie  data={PieChartData} />

    </div>
  )
}

export default PieGraph

