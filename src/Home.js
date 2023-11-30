import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    const[date, setData]=useState([])
    const[filters, setFilters]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>{
            setData(res.data)
            setFilters(res.data)
        })
        .catch(err=>console.log(err));
    },[])
    const Filter=(e)=>{
        setFilters(date.filter(t=>t.name.toLowerCase().includes(e.target.value)))
    }
  return (
    <div className='p-5 bg-light'>
       <div className='bg-white shadow border'>
        <input type="text" className='from-controle' onChange={Filter} placeholder='Search..'/>
         <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {filters.map((d,i)=>(
                    <tr key={i}>
                        <td>{d.id}</td>
                        <td>{d.name}</td>
                        <td>{d.email}</td>
                        <td>{d.phone}</td>
                    </tr>
                ))}
            </tbody>
         </table>
       </div>
    </div>
  )
}

export default Home
