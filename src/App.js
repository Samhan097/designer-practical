import './App.css';
import Destination from './Destinations/Destination';
import ExperienceNew from './ExperienceNew/ExperienceNew';
import Footer from './Footer/Footer';
import Appbar from './Header/Appbar/Appbar';
import Header from './Header/Header';
import Offer from './Offers/Offer';
import ImageSlider from './Slider/ImageSlider';
import { SliderData } from './Slider/SliderData';




function App() {
  return (
    <>
    <div className="App" >
      <Header />
      <Appbar />
      <ImageSlider slides={SliderData} />
      <Destination />
      <ExperienceNew />
      <Offer />
      <Footer />
    </div>
    </>
  );
}

export default App;
