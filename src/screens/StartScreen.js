import { Slider } from '../components/Slider';
import { Link } from 'react-router-dom';
import './StartScreen.css';
import slides from "../dataForSlider/sliderData.json";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/clipart-clothes-fashion.png";

const StartScreen = () => {
return (
    <div>
          <div className='start__screen'>
            <Slider data={slides} />
        </div>
        
       
      
     
        <div className="home-container">
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Life Is The Party.<br></br>Dress Like It.
          </h1>
          <p className="primary-text">
          "You can have anything you want in life if you dress for it."<br></br><br></br>
          <span className='margin'><i>-Edith Head</i> </span> 
          </p>
        
        
          
          <button className="secondary-button">
          <Link className='text-decor' to="/buy">Order Now</Link>
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="models" />
        </div>
      </div>
      
    </div>
  
        </div>
      
)
}

export default StartScreen;