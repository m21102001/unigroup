import Progress from "../components/Progress"
import LastestPacks from "../components/LastestPacks"
// import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"
import Footer from "../components/Footer"
// import ToolbarBasicExample from "../components/ToolbarBasicExample"
import Team from "../components/Team"
import Header from "../components/Header";
import Aboutus from "../components/Aboutus"
import Company from "../components/Company";
import Carrers from "./Careers"

const Home = () => {
  return (
    <div>
      <Header />
      {/* <NavScrollExample/> */}
      <LastestPacks/>
      <Services/>
      <Progress />
      <Aboutus />
      <Company />
      <Team/>
      <Footer/>
      <Carrers />
    </div>
  )
}

export default Home;