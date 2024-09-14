import { useEffect } from 'react';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery';
import 'owl.carousel';

const SliderComponent = () => {
  useEffect(() => {
    // Khởi tạo Owl Carousel sau khi DOM đã sẵn sàng
    $('.owl-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 3,
        },
        1000: {
          items: 5,
        },
      },
    });
  }, []);

  return (
    <div className="owl-carousel owl-theme">
      <div className="item">
        <h4>Slide 1</h4>
      </div>
      <div className="item">
        <h4>Slide 2</h4>
      </div>
      <div className="item">
        <h4>Slide 3</h4>
      </div>
    </div>
  );
};

export default SliderComponent;
