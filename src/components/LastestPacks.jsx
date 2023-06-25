import "./Lastest.css"
import ToolbarBasicExample from "./ToolbarBasicExample"
import department from "../assets/navbar/department.png"
const LastestPacks = () => {
  return (
    <>
    <h2 className="LastestPicks">Lastest Picks</h2>
    <p className="check-our">check our latest news project</p>
    <ToolbarBasicExample/>
    <img src={department} alt="department" className="image-depart" />
    </>
  )
}

export default LastestPacks