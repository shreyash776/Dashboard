import {Bar} from "react-chartjs-2"
import { useEffect,useContext } from "react";
import {FilterContext } from '../context/filter';
import {FilterNameContext} from "../context/filterName"


import{
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    
    Legend
} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale,  
    BarElement,
    Title,
   

    Legend
)



const Intensity = ({data,darkMode}) => {
 
  const {filter,setFilter} = useContext(FilterContext); 
  const {filterName,setFilterName} = useContext(FilterNameContext); 
 



      const filteredData = data.filter((item) => item[filterName] === filter);



      const xAxis = filteredData.map((item) => {
        const title = item.title;
        if (title.length > 10) {
            return title.slice(0,10) + '...';
        }
        return title;
    });
      const intensities = filteredData.map((item) => item.intensity);
      
  
    
 

 
const barChartData={
  labels:xAxis,
  datasets:[
      {
          label:"Intensity",
          data:intensities,
          backgroundColor: "#f514ad", 
          borderColor: "#f514ad", 
          borderWidth:1,
          borderRadius: 22,
      }
  ],
 
}
 


  
  return (
    
      <div className="graphs ">
    <Bar  data={barChartData} />
    
    </div>
   
  )
}

export default Intensity

