import Progress from "../components/Progress"
import LastestPacks from "../components/LastestPacks"
import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"
import Footer from "../components/Footer"


const Home = () => {
  return (
    <div>
      <NavScrollExample/>
      <LastestPacks/>
      <Progress />
      <Services/>
      <Footer/>
    </div>
  )
}

export default Home;