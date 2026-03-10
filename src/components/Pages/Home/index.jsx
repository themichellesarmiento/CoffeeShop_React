import { homeSectionsData } from "../../../data/homeSections.js";
import Hero from "../../HomeComponents/Hero";
import SectionGroup from "../../HomeComponents/SectionGroup"

const Home = () => {
  return (
    <>
      <Hero />
      <main>
        {homeSectionsData.map(h =>
          <SectionGroup key={h.id} {...h} />
        )}
      </main>
    </>
  )
}

export default Home;