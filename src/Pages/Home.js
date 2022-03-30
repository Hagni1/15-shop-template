import Contact from "../components/Contact";
import "../styles/Home.scss";
import data from "../data/homeData.json";
import RenderSection from "../components/RenderSection";

const Home = () => {
  console.log(data)
  return (
    <>
      <header className="homee">
        <h1>find your style</h1>
      </header>
      <main className="mainHome">
        {data.map((el) => (
          <RenderSection
            key={el.id}
            sectionName={el.sectionName}
            imgLink={el.imgLink}
            sectionPosition={el.sectionPosition}
            sectionLink={el.sectionLink}
          />
        ))}
      </main>

      <Contact />
    </>
  );
};

export default Home;
