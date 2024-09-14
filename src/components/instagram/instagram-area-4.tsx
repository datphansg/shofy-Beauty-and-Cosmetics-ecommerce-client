import React from 'react';
import Image from 'next/image';
// internal
import insta_1 from "@assets/img/brand/huongthi.jpg";
import insta_2 from "@assets/img/brand/laurasunshine.jpg";
import insta_3 from "@assets/img/brand/moi.jpg";
import insta_4 from "@assets/img/instagram/2/insta-4.jpg";
import insta_icon from "@assets/img/instagram/2/insta-icon.png";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.facebook.com/dailymypham.dungnguyen/", img: insta_1 },
  { id: 2, link: "https://www.facebook.com/profile.php?id=61563722140431", img: insta_2 },
  { id: 3, link: "https://www.facebook.com/myphammoi.hongocha.hcm",img: insta_3 },
];


const InstagramAreaFour = () => {
  return (
    <>
      <section className="tp-instagram-area tp-instagram-style-4 pt-110 pb-10">
        <div className="container-fluid pl-20 pr-20">
          <div className="row">
            <div className="col-xl-12">
              <div className="tp-section-title-wrapper-4 mb-50 text-center">
                <h3 className="tp-section-title-4">Trends on image feed</h3>
                <p>After many months design and development of a modern online retailer</p>
              </div>
            </div>
          </div>
          <div className="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
            {instagram_data.map((item, i) => (
              <div className="col" key={i}>
                <div className="tp-instagram-item-2 w-img">
                  <Image src={item.img} alt="instagram img" style={{ width: '100%', height: '100%' }} />
                  <div className="tp-instagram-icon-2">
                    <a href={item.link} target="_blank" className="popup-image">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default InstagramAreaFour;