import {useEffect, useState,useContext}from 'react'
import {FilterContext} from '../context/filter';
import {FilterNameContext} from "../context/filterName"
// import Intensity from './Intensity';

const Filter = ({data,}) => {
 
  const {filter,setFilter} = useContext(FilterContext); 
  const { filterName,setFilterName} = useContext(FilterNameContext); 

  console.log(filter,"filter");


  //  Safely access data and map over it using optional chaining
   const topicArray = Array.from(new Set(data?.map(item => item.topic) || []));
   const sectorArray = Array.from(new Set(data?.map(item => item.sector) || []));
   const endYearArray = Array.from(new Set(data?.map(item => item.end_year) || []));
   const regionArray = Array.from(new Set(data?.map(item => item.region) || []));
   const countryArray = Array.from(new Set(data?.map(item => item.country) || []));
   const pestleArray = Array.from(new Set(data?.map(item => item.pestle) || []));
   const sourceArray = Array.from(new Set(data?.map(item => item.source) || []));
   const titleArray = Array.from(new Set(data?.map(item => item.title) || []));
  


 const handleFilterChange = (event) => {

  console.log(event.target.value);

    setFilter(event.target.value);
    setFilterName(event.target.name);
}



  return (
    <div className=" p-1.5 backdrop-blur-lg bg-white bg-opacity-70 flex flex-col gap-2 h-auto divide-y divide-zinc-100 rounded-2xl ring-1 ring-zinc-900 ring-opacity-5 dark:divide-zinc-900 dark:bg-zinc-800 dark:ring-zinc-950 dark:ring-opacity-75">
      
    {/* topics */}
   <div className='select-div' >
   <label className='label' id='topic'>Topic:</label>
     <select  className='select' id="topic" name="topic" onChange={handleFilterChange}>
     {topicArray.map((topic, index) => (
        
        <option  key={index} value={topic}>
            {topic}
        </option>
    ))}
         
    </select>

   </div>
 {/* sector  */}
   <div className='select-div'>
   <label className='label' id='sector'>sector:</label>
     <select  className='select'  id="sector" name="sector" onChange={handleFilterChange}>
     {sectorArray.map((sector, index) => (
        
        <option  key={index} value={sector}>
            {sector}
        </option>
    ))}
    
         
    </select>
   </div>
       {/* country */}
   <div className='select-div' >
   <label className='label'  id='country'>Country:</label>
     <select 
     className='select '
      id="country" name="country" onChange={handleFilterChange}>
     {countryArray.map((country, index) => (
        
        <option key={index} value={country}>
            {country}
        </option>
    ))}
    
         
    </select>
   </div>
   {/* end_year */}
   <div className='select-div'  >
   <label className='label' id='year'>end_year:</label>
     <select  className='select'  id="year" name="end_year" onChange={handleFilterChange}>
     {endYearArray.map((end_year, index) => (
        
        <option  key={index} value={end_year}>
            {end_year}
        </option>
    ))}
         
    </select>
   </div>
 {/* region */}
   <div className='select-div'>
   <label className='label' id='region'>Region:</label>
     <select  className='select '  id="region" name="region" onChange={handleFilterChange}>
     {regionArray.map((region, index) => (
        <option  key={index} value={region}>
            {region}
        </option>
    ))}
         
    </select>
   </div>
   {/* pest */}
   <div className='select-div'>
   <label className='label' id='PEST'>PEST:</label>
     <select  className='select' id="PEST" name="pestle" onChange={handleFilterChange}>
     {pestleArray.map((PEST, index) => (
        
        <option key={index} value={PEST}>
            {PEST}
        </option>
    ))}
         
    </select>
    </div>
   
   {/* source */}
    <div className='select-div' 
    

    >

   <label className='label' id='source'>Source:</label>
     <select   className='select' id="source" name="source" onChange={handleFilterChange}>
     {sourceArray.map((source, index) => (
        
        <option  key={index} value={source}>
            {source}
        </option>
    ))}
    </select>
   </div>
    </div>
    
   
    
  )
}
  
export default Filter
