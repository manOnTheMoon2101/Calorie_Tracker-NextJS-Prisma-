"use client";


import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  PointElement,
  LineElement,
  Filler,
  Title
  
} from "chart.js";


import { Line } from "react-chartjs-2";



import React from 'react'
import NavBar from '../components/body/NavBar'




  

  

ChartJS.register(
  Filler,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Title

  );













  async function getData() {
    const res = await fetch("http://localhost:3000/api/posts", { cache: 'no-store' });
  
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
  
    return res.json();
  }


export default async function Graphs() {

  const posts = await getData();
  return (
    <>
    <NavBar/>
   
  


    <Line
   width={600}
    height={400}
    options={{
      
      responsive:false,
     
      
      scales:{
        
        x :{
          ticks:{color:'white'}
        }
      },
      
      plugins:{
      
       
      
      title:{
        display:true,
        text:"October 2023",
        color:'white'
      },
      

    }}}
        data={{
          labels:posts.map((x) => x.date),
          
          datasets:[
          {
            
            
            
            label:'Weight',
            
            
            data: posts.map((x) => x.weight),
            
            backgroundColor:'rgb(233, 184, 36)',
hoverBackgroundColor:'rgb(255, 99, 132)',
borderWidth:4,
fill:true,
            borderColor:'rgb(216, 63, 49)',
            pointBorderColor: '#111',
            pointBackgroundColor: 'rgb(238, 147, 34)',
            pointBorderWidth: 2,
          }
          
        ]}}
          
      />
    </>
   
  )
}
