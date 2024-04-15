import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { FilteredArrayProvider } from './context/filteredArray';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <FilteredArrayProvider>
   <App />
   </FilteredArrayProvider>
    
  </React.StrictMode>,
)
