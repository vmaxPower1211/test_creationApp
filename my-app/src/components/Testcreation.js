import React from 'react'
import { useState } from 'react'

function Testcreation() {

    const [isshown, setishown] = useState(false)
    const [type,settype]=useState(null)
    const [dif,setdif]=useState(null)
    const [datas,setdata]=useState([])

    const [qids,setqids]=useState({questioids:[]})
    
    async function selectc (){
        const data1={
            type:type,
            difficulty:dif,
        }

        const res = await fetch('http://localhost:1234/fet', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        const data = await res.json()
        setdata(data)
        console.log(data)

    }

    const handlechange = (e) =>{
        const {value,checked}=e.target;
        const {questioids}=qids;
        
        //user check the checkbox
        if(checked){
            setqids({
                questioids:[...questioids,value]
            });
        }

        else{
            setqids({
                questioids:questioids.filter((e) => e !== value)
            })
        }

    }

    async function createtest(){
        // console.log(qids.questioids)
        const data1={
            qids:qids.questioids
        }
        

        const res = await fetch('http://localhost:1234/store', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data1)
        })
        alert("Test is successfully created")
        const data=await res.json()
        if(data.status === 'ok')
        {
            window.location.href = "/tests"
        }
        else{
            console.log("error")
        }
        

        
    }

    return (
        <>
            <div className='container' style={{ height: "20vh" }}>
                <div>
                    <h1 className='text-center'>Test Creation Platform</h1>
                </div>
                <div className='container text-center my-3'>
                    <button onClick={() => setishown(!isshown)} className='text-center' type='submit'>Create New Test</button>
                </div>

            </div>

            {
                isshown &&
                <div className='container text-center' style={{ marginTop: "20px" }}>
                    <div className='row'>
                        <div><h1>Select the category</h1></div>
                        <div className='text-center' style={{display:"flex",justifyContent:"center"}}>
                        <div style={{margin:"30px"}}>
                            <select onChange={(e)=>settype(e.target.value)} name="type" id="type">
                                <option value="hindi">Hindi</option>
                                <option value="english">English</option>
                                <option value="math">Math</option>
                                
                            </select>
                        </div>
                        <div style={{margin:"30px"}}>
                            <select onChange={(e)=>setdif(e.target.value)} name="difficulty" id="difficulty">
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        </div>
                        <div className='text-center'>
                        <button className='' style={{width:"200px"}} onClick={selectc} type="submit">Submit</button>
                        </div>
                    </div>
                    <div className='container' style={{marginTop:"40px"}}>
                        <ul type='checkbox'>
                            {
                                (datas.map((data)=>{
                                    return(
                                        <label for="fourth">
                    <input value={data._id} type="checkbox" id={data._id} onChange={handlechange} />
                    {data.discription}
                </label>
                                    )
                                }))
                            }
                        </ul>

                        <button style={{width:"200px"}} onClick={createtest}>Create Test</button>
                    </div>

                </div>
            }

        </>
    )
}

export default Testcreation