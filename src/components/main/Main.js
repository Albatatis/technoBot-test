import React,{useState, useEffect} from 'react'
import Cover from '../cover/Cover'
import './main.css'
import axios from 'axios'

export default function Main(){

    // const [monthId, setMonthId] = useState()
    // const [monthName, setMonthName] = useState()
    // const [bannerText, setBannerText] = useState()

    const [months, setMonths] = useState()
    useEffect(() => {
        axios.get('https://v1.igpods.com/api/social_calendar/all_months')
        .then((res) => {
          setMonths(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[])
   
    return (
        
        <div className='container'>
            <div className='cover'>
                <h3>June 2022</h3>
            </div>
            <ul className='dates'>
                {Array(30).fill(true).map((item, index) => {
                    return (
                        <div className='grid-item' key={index+1}>{index+1}</div>
                    )
                })}
            </ul>
        </div>
    )
}