import Progress from "../components/Progress"
import LastestPacks from "../components/LastestPacks"
import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"
import Footer from "../components/Footer"
import ToolbarBasicExample from "../components/ToolbarBasicExample"
import Team from "../components/Team"


const Home = () => {
  return (
    <div>
      <NavScrollExample/>
      <LastestPacks/>
      <Services/>
      <Progress />
      <ToolbarBasicExample />
      <Team/>
      <Footer/>
    </div>
  )
}

export default Home;