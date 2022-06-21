import Navbar from "../Navbar/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-parent">
        <div className="left">
          Welcome To <br />
          Court Case Monitoring System
        </div>
        <div className="right">
          <img
            src="https://i.postimg.cc/W42fC3T9/distmap.png"
            alt="map"
            className="map"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;