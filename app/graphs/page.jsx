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

import { useCallback,useRef } from "react";
import { Line } from "react-chartjs-2";
import styles from '../page.module.css'


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













  async function getJanuary() {
    const res = await fetch("http://localhost:3000/api/posts/getJanuary", { cache: 'no-store' });
  
    if(!res.ok) {
        throw new Error("Failed to fetch data")
    }
  
    return res.json();
  }

 



export default async function Graphs() {

  const date = new Date();
  const month = date.toLocaleString('default', { month: 'long' });
  const day = date.getUTCDate()
  const year = date.getFullYear()

  const ref = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const dowN = useCallback(()=>{

    const link = document.createElement('a');
    link.download = `${day} ${month} ${year}`;
    link.href = ref.current.toBase64Image();
    link.click();

  },[]);

  const dowN2 = useCallback(()=>{

    const link = document.createElement('a');
    link.download = `${day} ${month} ${year}`;
    link.href = ref2.current.toBase64Image();
    link.click();

  },[]);
  const posts = await getJanuary();


  
  
  return (
    <>
    <NavBar/>
   
  

<button className={styles.downloadB} onClick={dowN}>Download January Graph</button>


    <Line
    ref={ref}

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
        text:"January 2024",
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
