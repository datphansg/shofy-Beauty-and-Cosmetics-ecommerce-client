'use client'
import React, { useState } from 'react';
import ReviewForm from '../forms/review-form';
import ReviewItem from './review-item';

const DetailsTabNav = ({ product }) => {
  const { _id, desc, additionalInformation, reviews } = product || {};
  const [activeTab, setActiveTab] = useState('desc'); // Quản lý trạng thái tab hiện tại

  // handleActive
  const handleActive = (tab) => {
    setActiveTab(tab);
  };

  // NavItem component
  function NavItem({ isActive = false, id, title }) {
    return (
      <button
        className={`nav-link ${isActive ? "active" : ""}`}
        id={`nav-${id}-tab`}
        data-bs-toggle="tab"
        data-bs-target={`#nav-${id}`}
        type="button"
        role="tab"
        aria-controls={`nav-${id}`}
        aria-selected={isActive ? "true" : "false"}
        onClick={() => handleActive(id)}
      >
        {title}
      </button>
    );
  }

  return (
    <>
      <div className="tp-product-details-tab-nav tp-tab">
        <nav>
          <div className="nav nav-tabs justify-content-center p-relative tp-product-tab" id="navPresentationTab" role="tablist">
            <NavItem isActive={activeTab === 'desc'} id="desc" title="Mô tả" />
            <NavItem isActive={activeTab === 'additional'} id="additional" title="Additional information" />
            {/* <NavItem isActive={activeTab === 'review'} id="review" title={`Reviews (${reviews.length})`} /> */}
          </div>
        </nav>
        <div className="tab-content" id="navPresentationTabContent">
          {/* nav-desc */}
          {activeTab === 'desc' && (
            <div className="tab-pane fade show active" id="nav-desc" role="tabpanel" aria-labelledby="nav-desc-tab">
              <div className="tp-product-details-desc-wrapper pt-60">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="tp-product-details-desc-item">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="tp-product-details-desc-content">
                            <div dangerouslySetInnerHTML={{ __html: desc.toString() }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* addInfo */}
          {activeTab === 'additional' && (
            <div className="tab-pane fade show active" id="nav-additional" role="tabpanel" aria-labelledby="nav-additional-tab">
              <div className="tp-product-details-additional-info">
                <div className="row justify-content-center">
                  <div className="col-xl-10">
                    <table>
                      <tbody>
                        {additionalInformation?.map((item, i) => (
                          <tr key={i}>
                            <td>{item.key}</td>
                            <td>{item.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* review */}
          {activeTab === 'review' && (
            <div className="tab-pane fade show active" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab">
              <div className="tp-product-details-review-wrapper pt-60">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="tp-product-details-review-statics">
                      {/* reviews */}
                      {/* <div className="tp-product-details-review-list pr-110">
                        <h3 className="tp-product-details-review-title">Rating & Review</h3>
                        {reviews.length === 0 && <h3 className="tp-product-details-review-title">
                          There are no reviews yet.
                        </h3>}
                        {reviews.length > 0 && reviews.map(item => (
                          <ReviewItem key={item._id} review={item} />
                        ))}
                      </div> */}
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="tp-product-details-review-form">
                      <h3 className="tp-product-details-review-form-title">Review this product</h3>
                      <p>Your email address will not be published. Required fields are marked *</p>
                      {/* form start */}
                      <ReviewForm product_id={_id} />
                      {/* form end */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default DetailsTabNav;
