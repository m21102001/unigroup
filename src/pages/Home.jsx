import Progress from "../components/Progress"
import LastestPacks from "../components/LastestPacks"
import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"
import BasicExample from "../components/Company"
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <NavScrollExample/>
      <LastestPacks/>
      <Services/>
      <Progress />
      <BasicExample />
      <Team />
    </div>
  )
}

export default Home;