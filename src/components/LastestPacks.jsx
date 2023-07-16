import "./Lastest.css"
// import ToolbarBasicExample from "./ToolbarBasicExample"
// import department from "../assets/navbar/department.png"
import { Button, ButtonGroup } from "react-bootstrap"
import { useState,useEffect } from "react"

import axios from "axios"
const LastestPacks = () => {

    const url_api="https://fakestoreapi.com/products"
    const [images ,setImages]=useState([])
    const [selectedCategory, setSelectedCategory] = useState("all");
    useEffect(()=>{
        axios.get(url_api)
        .then((res)=>{
            setImages(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    })

    const handleCategoryFilter = (category) => {
      setSelectedCategory(category);
    };

    const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

    // for(let i=0 ; i<images.length;i++){
    //    if(images[i].category=='mens clothing')
    // }
  return (

    <div className="content">
    <div className="container">
      <div className="head">
          <h1>LATEST PICKS</h1>
          <p>check our latest news project</p>
      </div>
      <div className="header">
        <ButtonGroup>
        <ul>
          <li>
        <Button  className='buttonGroup btn-light' active onClick={() => handleCategoryFilter("all")}>All</Button>

          </li>
          <li>
          <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("men's clothing")}>
                Marketing
              </Button>
          </li>
          <li>
          
          <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("jewelery")}>
                Business
              </Button>

        

          </li>
          <li>
          <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("electronics")}>
                Development
              </Button>
          </li>
          <li>
          <Button className='buttonGroup btn-light' onClick={() => handleCategoryFilter("women's clothing")}>
                Art & Design
              </Button>

          </li>
        </ul>
        </ButtonGroup>
      </div>
      <div className="image">
      {filteredImages.map((data) => {
            return (
              <div className="image-data" key={data.id}>
                <img src={data.image} alt="an error occurred" />
              </div>
            );
          })}

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