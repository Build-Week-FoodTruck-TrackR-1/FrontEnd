import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import { axiosWithAuth } from '../../utils/axioswithAuth';

import TruckList from './Truck-List';


const FavoritesPage = props => {
    const [truckList, setTruckList] = useState([]);
    const getTrucks = () =>{
          axiosWithAuth().get('') // add when available
          .then(res => {
              setTruckList(res.data)
               console.log(res.data)
              })
          .catch(err => console.log(err))
      }
      useEffect(()=>{
        getTrucks()
     },[]);
 
   return (
     <>
       <TruckList trucks={truckList} updateTrucks={setTruckList} />
       <Trucks trucks={truckList} />
 
       <Link to="/Login">Login </Link>
     </>
   );
 };
 
 export default FavoritesPage;