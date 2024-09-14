import React from 'react';
import { Delivery, Discount, Refund, Support } from '@/svg';

export const feature_data = [
  {
    icon: <Delivery />,
    title: 'Giao hàng miễn phí',
    subtitle: 'Áp dụng cho mọi đơn hàng'
  },
  {
    icon: <Refund />,
    title: 'Hoàn trả & Hoàn tiền',
    subtitle: 'Đảm bảo hoàn tiền'
  },
  {
    icon: <Discount />,
    title: 'Giảm giá cho thành viên',
  },
  {
    icon: <Support />,
    title: 'Hỗ trợ 24/7',
    subtitle: 'Liên hệ với chúng tôi 0933 686 604'
  },
]



const FeatureAreaTwo = () => {
  return (
    <section className={`tp-feature-area tp-feature-border-2 pb-80`}>
      <div className="container">
        <div className="tp-feature-inner-2">
          <div className="row align-items-center">
            {feature_data.map((item, i) => (
              <div key={i} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                <div className="tp-feature-item-2 d-flex align-items-start mb-40">
                  <div className="tp-feature-icon-2 mr-10">
                    <span>
                      {item.icon}
                    </span>
                  </div>
                  <div className="tp-feature-content-2">
                    <h3 className="tp-feature-title-2">{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureAreaTwo;