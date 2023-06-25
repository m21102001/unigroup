import Aboutus from "../components/Aboutus"
import LastestPacks from "../components/LastestPacks"
import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"


const Home = () => {
  return (
    <div>
      <NavScrollExample/>
      <LastestPacks/>
      <Services/>
      <Aboutus/>
    </div>
  )
}

export default Home