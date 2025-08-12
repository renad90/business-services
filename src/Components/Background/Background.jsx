import "./Background.css";
import Video from "../../Assets/Video.mp4";
import image1 from "../../Assets/image1.webp";
import image2 from "../../Assets/image2.webp";
import image3 from "../../Assets/image3.jpg";
export default function Background({ playStatus, heroCount }) {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={Video} type="Video/mp4" />
      </video>
    );
  } else if (heroCount == 0) {
    return <img src={image1} className="background" alt="" />;
  } else if (heroCount == 1) {
    return <img src={image2} className="background" alt="" />;
  } else if (heroCount == 2) {
    return <img src={image3} className="background" alt="" />;
  }
}
