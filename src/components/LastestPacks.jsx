import "./Lastest.css"
// import ToolbarBasicExample from "./ToolbarBasicExample"
// import department from "../assets/navbar/department.png"
// import { Button, ButtonGroup } from "react-bootstrap"
import { useState,useEffect } from "react"

import axios from "axios"
const LastestPacks = () => {

    const url_api="https://fakestoreapi.com/products"
    const [images ,setImages]=useState([])
    useEffect(()=>{
        axios.get(url_api)
        .then((res)=>{
            setImages(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })
  return (

    <div className="content">
    <div className="container">
      <div className="head">
          <h1>LATEST PICKS</h1>
          <p>check our latest news project</p>
      </div>
      <div className="header">
        <ul>
          <li>
            <a href="./all" className="all"> <button>All</button> </a>
          </li>
          <li>
       <a href="./marketing"> <button>Marketing</button></a>
          </li>
          <li>
          
          <a href="./business"><button>Business</button></a>
        

          </li>
          <li>
           <a href="./development"><button>Development</button> </a>
          </li>
          <li>
            <a href="./art"> <button>Art & Designe</button></a>
          </li>
        </ul>
      </div>
      <div className="image">
          {
              images.map((data)=>{
                  return (
                      <div className="image-data" key={data.id}><img src={data.image} alt ="an error ocuure"/></div>
                  )

              })
          }

      </div>

    </div>
  </div>








    // <>
    // <h2 className="LastestPicks">Lastest Picks</h2>
    // <p className="check-our">check our latest news project</p>
    // <ToolbarBasicExample/>

    // <img src={department} alt="department" className="image-depart" />
    // </>
  )
}

export default LastestPacks