import { Link } from "react-router-dom";
import "../styles/RenderSection.scss";

const RenderSection = ({
  sectionPosition,
  sectionName,
  imgLink,
  sectionLink,
}) => {
  const Content = () => {
    if (sectionPosition === "right") {
      return (
        <>
          <h3>{sectionName}</h3>
          <img src={require(`../${imgLink}`)} alt={sectionName} />
        </>
      );
    } else {
      return (
        <>
          <img src={require(`../${imgLink}`)} alt={sectionName} />
          <h3>{sectionName}</h3>
        </>
      );
    }
  };
  return (
    <Link to={`../${sectionLink}`}>

      <section  className={`mainSection mainSection-${sectionPosition}`}>
        <Content />
      </section>
    </Link>
  );
};

export default RenderSection;
