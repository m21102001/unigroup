import "./Lastest.css"
import ToolbarBasicExample from "./ToolbarBasicExample"
import department from "../assets/navbar/department.png"
// import { Button, ButtonGroup } from "react-bootstrap"
const LastestPacks = () => {
  return (
    <>
    <h2 className="LastestPicks">Lastest Picks</h2>
    <p className="check-our">check our latest news project</p>
    <ToolbarBasicExample/>
    {/* <div className="container text-center">
  <div className="row">
    <div className="col">
    <ButtonGroup className="department me-5" aria-label="First group">
        <Button className='buttonGroup' variant='' active>All</Button> 
      </ButtonGroup>
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
    <div className="col">
      Column
    </div>
  </div>
</div> */}
    <img src={department} alt="department" className="image-depart" />
    </>
  )
}

export default LastestPacks