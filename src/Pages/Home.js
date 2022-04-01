import Contact from "../components/Contact";
import "../styles/Home.scss";
import data from "../data.json";
import RenderSection from "../components/RenderSection";

const Home = () => {
  const newData = [...data[2].data];
  return (
    <>
      <header className="homee">
        <h1>find your style</h1>
      </header>
      <main className="mainHome">

        {newData.map((el) => (
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
