import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import React, { useState,useEffect } from 'react';
import SearchBar from './SearchBar';
import { SliderData } from './SliderData';
const ImageSlider = ({ slides }) => {
  const [current,setCurrent] = useState(0);
  const length = slides.length;
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut = null;

  useEffect(() => {
    timeOut =
      // eslint-disable-next-line react-hooks/exhaustive-deps
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 2500);
  });

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className='slider' onClick={nextSlide} onMouseEnter={() => {
      setAutoPlay(false);
      clearTimeout(timeOut);
    }}
    onMouseLeave={() => {
      setAutoPlay(true);
    }}>
      {SliderData.map((slide, index) => {
        return (
          <>
          <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}
            onClick={prevSlide}
          >
        
            {index === current && (
                <>
                  <img src={slide.image} alt='travel' className='image' />
                  <ChevronLeft className='left-arrow '  onClick={prevSlide} />
                  <ChevronRight className='right-arrow '  onClick={nextSlide} />
                  <p className="slide-title">{slide.title}</p>
                  <p className="slide-text">{slide.description}</p>
                  <div className='slide-button'>
                  <p  >{slide.button}</p>
                  <SearchBar />
                  </div>

                </>
              
            )}
            
          </div>
          <div className="carousel_pagination">
          {SliderData.map((_, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "pagination_dot pagination_dot-active"
                    : "pagination_dot"
                }
                onClick={() => setCurrent(index)}
              ></div>
            );
          })}
        </div>
          </>
        );
      })}

    </section>
  );
};

export default ImageSlider;