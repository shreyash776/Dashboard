import {useState,useEffect,useContext} from 'react'
import Intensity from './Intensity';
import Likelihood from './Likelihood';
import Relevance from './Relevance';
import PieCountry from './pieCountry';
import PieGraph from './Pie';
import Years from './Years';
import { FilterProvider } from '../context/filter';
import { FilterNameProvider } from '../context/filterName';
import {FilteredArrayContext} from "../context/filteredArray"
import { FilterContext } from '../context/filter';
import { FilterNameContext } from '../context/filterName';
import Filter from './Filter';
import "../index.css"
import { Pie } from 'react-chartjs-2';
const Layout = () => {
  const {filter,setFilter} = useContext(FilterContext); 
  const {filterName,setFilterName} = useContext(FilterNameContext); 
  const {filteredArray, setFilteredArray} = useContext(FilteredArrayContext);
  const [darkMode, setDarkMode] = useState(false);
  const [domainDropdownOpen, setDomainDropdownOpen] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode((prevDarkMode) => !prevDarkMode);
    };
    const handleDropdownToggle = () => {
        setDomainDropdownOpen(!domainDropdownOpen);
    };
     
     const toggleDropdown = () => {
        setDomainDropdownOpen(!domainDropdownOpen);
    };
    
    //fetching data
    const [data, setData] = useState([]);
    useEffect(() => {
      fetchData();
    }, []);
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/data');
        const jsonData = await response.json();
        setData(jsonData);
            } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    };
    useEffect(() => {
  }, [data]);
  

  


  return (
    
   
         
      <div
 className={darkMode ? 'dark' : ''}
>
  {/* <!-- Page Container --> */}
  <div
    id="page-container"
    className="mx-auto flex min-h-screen w-full min-w-[320px] flex-col bg-zinc-100 dark:bg-zinc-900 dark:text-zinc-100"
  >
    {/* <!-- Page Header --> */}
    <header
      id="page-header"
      className="fixed end-0 start-0 top-0 z-50 flex flex-none items-center"
    >
      <div className="container mx-auto pt-4 sm:px-2 lg:pt-8 xl:max-w-6xl">
        <div
          className="flex justify-between bg-zinc-200/80 px-4 py-2.5 backdrop-blur-sm dark:bg-zinc-800/80 sm:rounded-2xl sm:px-6"
        >
         
          <div className="flex items-center">
           
            <a
              href="#"
              className="group inline-flex items-center gap-1.5 text-lg font-extrabold tracking-wide text-zinc-900 active:text-zinc-600 dark:text-zinc-100 dark:active:text-zinc-400"
            >
              <svg
                className="hi-mini hi-chart-bar inline-block h-5 w-5 origin-bottom-left text-pink-500 transition group-hover:-rotate-6 group-active:rotate-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z"
                />
              </svg>
              <span>Blackcoffer</span>
            </a>
            {/* <!-- END Logo --> */}
          </div>
          {/* <!-- END Left Section --> */}

          {/* <!-- Right Section --> */}
          <div className="flex items-center gap-2">
            {/* <!-- Doamin Dropdown --> */}
            <div className="relative inline-block">
              {/* <!-- Dropdown Toggle Button --> */}
              <button
                type="button"
                className="group flex items-center justify-between gap-1.5 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-900 hover:bg-white hover:text-zinc-950 active:bg-opacity-50 dark:text-zinc-100 dark:hover:bg-zinc-950/50"
                id="dropdown-domains"
                aria-haspopup="true"
                aria-expanded={domainDropdownOpen} 
            onClick={handleDropdownToggle} 
              >
                <span className='lg:text-xl text-sm'>Filters</span>
                <svg
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  className="hi-solid hi-chevron-down inline-block h-5 w-5 text-zinc-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              {/* <!-- END Dropdown Toggle Button --> */}

              {/* <!-- Dropdown --> */}
             
             { domainDropdownOpen &&( <div
                role="menu"
                aria-labelledby="dropdown-domains"
                className="absolute end-0 mt-2 w-48 origin-top rounded-2xl shadow-xl shadow-zinc-200 dark:shadow-zinc-950"
              >
               
                <Filter  darkMode={darkMode} data={data} />
              </div>
              )
             }
              {/* END Dropdown  */}
            </div>
            {/* <!-- END Doamin Dropdown --> */}
          </div>
          {/* <!-- END Right Section --> */}
        </div>
      </div>
    </header>
    {/* <!-- END Page Header --> */}

    {/* <!-- Page Content --> */}
    <main
      id="page-content"
      className="flex max-w-full flex-auto flex-col pt-[74px] lg:pt-[90px]"
    >
      <div className="container mx-auto p-4 lg:p-8 xl:max-w-6xl">
        <div
          className="mb-6 flex items-center justify-between gap-4 border-b border-dashed border-zinc-300 pb-2 dark:border-zinc-700"
        >
          {/* <!-- Page Heading --> */}
          <h1 className="text-lg font-bold">Dashboard</h1>

          <div className="flex items-center justify-center gap-1">
            {/* <!-- Dark Mode Toggle --> */}
            <button
              type="button"
              className="flex items-center justify-between gap-1.5 rounded-xl px-2 py-2 text-sm font-semibold text-zinc-400 hover:bg-zinc-200 hover:text-zinc-600 active:bg-zinc-200 active:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-400 dark:active:bg-zinc-700 dark:active:text-zinc-300"
              onClick={toggleDarkMode}
            >
              <svg
                x-show="darkMode"
                className="hi-mini hi-sun inline-block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z"
                />
              </svg>
              <svg
               
                view="!darkMode"
                className="hi-mini hi-moon inline-block h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* <!-- END Dark Mode Toggle --> */}
  
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-12 lg:gap-8">
          {/* <!--  Status --> */}
          <div
            className="rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-6 xl:col-span-3"
          >
           
            <dl>
              <dt className="text-xl font-extrabold">{data.length}</dt>
              <dd
                className="text-sm font-medium text-emerald-500"
              >
                Total data
              </dd>
            </dl>
          </div>
          <div
            className="rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-6 xl:col-span-3"
          >
           
            <dl>
              <dt className="text-xl font-extrabold">{filteredArray.length}</dt>
              <dd
                className="text-sm font-medium text-rose-500"
              >
                Filtered data
              </dd>
            </dl>
          </div>
          <div
            className="rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-6 xl:col-span-3"
          >
           
            <dl>
              <dt className="text-xl font-extrabold">{filterName}</dt>
              <dd
                className="text-sm font-medium text-emerald-500 "
              >
                Current category
              </dd>
            </dl>
          </div>
          <div
            className="rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-6 xl:col-span-3"
          >
           
            <dl>
              <dt className="text-xl font-extrabold">{filter}</dt>
              <dd
                className="text-sm font-medium text-emerald-500"
              >
                Current filter
              </dd>
            </dl>
          </div>
          {/* <!-- END Quick Stats --> */}

          {/* <!-- Pageviews --> */}
          <div
            className="overflow-hidden rounded-2xl  bg-white lg:p-6 ring-1 shadow shadow-zinc-200 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 sm:col-span-12"
          >
            <div className=" sm:mb-1 h-full flex flex-col flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-extrabold">
                Intensity Vs Title
                
              </h2>
             <Intensity mode={darkMode} data={data} />
            </div>
          </div>
          <div
            className="overflow-hidden rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-12"
          >
            <div className="mb-6 flex flex-col flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-extrabold">
                Likelihood Vs Title
                
              </h2>
             <Likelihood data={data} />
            </div>
          </div>
         
          <div
            className="overflow-hidden rounded-2xl bg-white p-6 shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-12"
          >
            <div className="mb-6 flex flex-col flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-extrabold">
                Relevance Vs Title
                
              </h2>
             <Relevance data={data} />
            </div>
          </div>
          <div
            className="overflow-hidden rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-12"
          >
            <div className="mb-6 flex flex-col flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-extrabold">
                End-year Vs Title
                
              </h2>
             <Years data={data} />
            </div>
          </div>

  <div
            className="overflow-hidden rounded-2xl bg-white p-6 shadow shadow-zinc-200 ring-1 ring-zinc-200 ring-opacity-10 dark:bg-zinc-800 dark:shadow-zinc-800 sm:col-span-12"
          >
            <div className="mb-6 flex flex-col flex-wrap items-center justify-between gap-4">
              <h2 className="text-xl font-extrabold">
                Countries with their intensities
                
              </h2>
             <PieCountry data={data} />
            </div>
          </div>
          

   </div>
      </div>
    </main>
    {/* <!-- END Page Content --> */}

    {/* <!-- Page Footer --> */}
    <div id="page-div" className="flex flex-none items-center">
      <div className="container mx-auto px-4 lg:px-8 xl:max-w-6xl">
        <div
          className="flex flex-col gap-2 pb-8 pt-4 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400 md:flex-row md:justify-between md:text-start"
        >
          <div>© <span className="font-semibold">Blackcoffer</span></div>
        </div>
      </div>
    </div>
    {/* <!-- END Page Footer --> */}
  </div>
  {/* <!-- END Page Container --> */}
</div>


  )
}

 export default Layout
