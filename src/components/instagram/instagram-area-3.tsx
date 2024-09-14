import React from "react";
import Image from "next/image";
/// internal
import insta_1 from "@assets/img/brand/huongthi.jpg";
import insta_2 from "@assets/img/brand/laurasunshine.jpg";
import insta_3 from "@assets/img/brand/moi.jpg";
import insta_4 from "@assets/img/instagram/2/insta-4.jpg";
import insta_icon from "@assets/img/instagram/2/insta-icon.png";

// instagram data
const instagram_data = [
  { id: 1, link: "https://www.facebook.com/dailymypham.dungnguyen/", img: insta_1 },
  { id: 2, link: "https://www.facebook.com/profile.php?id=61563722140431", img: insta_2 },
  { id: 3, link: "https://www.facebook.com/myphammoi.hongocha.hcm", img: insta_3 },
];


const InstagramAreaThree = () => {
  return (
    <>
      <section className="tp-instagram-area tp-instagram-style-3">
        <div className="container-fluid pl-20 pr-20">
          <div className="row row-cols-lg-6 row-cols-sm-2 row-cols-1 gx-2 gy-2 gy-lg-0">
            {instagram_data.map((item) => (
              <div className="col" key={item.id}>
                <div className="tp-instagram-item-2">
                  <Image src={item.img} alt="instagram img" style={{width:'100%',height:'100%'}} />
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

export default InstagramAreaThree;