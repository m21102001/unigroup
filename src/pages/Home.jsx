import Progress from "../components/Progress"
import LastestPacks from "../components/LastestPacks"
import NavScrollExample from "../components/NavScrollExample"
import Services from "../components/Services"


const Home = () => {
  return (
    <div>
      <NavScrollExample/>
      <LastestPacks/>
      <Services/>
      <Progress />
      <BasicExample />
    </div>
  )
}

export default Home;