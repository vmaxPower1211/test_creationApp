import React from 'react'
import { useEffect,useState } from 'react';
import axios from 'axios'
function Test() {

  const [evens,setevens]=useState([])

    useEffect(()=>{
        // console.log("how")
        const fetchdata= async () =>{
            console.log("how")
            const datas=await axios.get('http://localhost:1234/all');
            console.log(datas.data)
            setevens(datas.data)
        };

        fetchdata();
    }, [])

  return (
    <div className='container'>
      <div className='text-center'><h1>All tests</h1></div>
      <div className='container my-3' style={{justifyContent:"center"}}>
        <div className='row'>
          {
            evens.map((even)=>{
              return(
                <div className='col-md-4' style={{height:"20vh",borderRadius:"1px solid black",width:""}}>
                  <p>Test Id : {even._id}</p>
                    No of question:
                    <p>{even.qid.length}</p>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Test
