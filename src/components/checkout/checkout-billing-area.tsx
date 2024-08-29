import React from "react";
import ErrorMsg from "../common/error-msg";
import { useSelector } from "react-redux";

const CheckoutBillingArea = ({ register, errors }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="tp-checkout-bill-area">
      <h3 className="tp-checkout-bill-title">Chi tiết hóa đơn</h3>

      <div className="tp-checkout-bill-form">
        <div className="tp-checkout-bill-inner">
          <div className="row">
            <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Họ và tên<span>*</span>
                </label>
                <input
                  {...register("firstName", {
                    required: `Họ Tên không được bỏ trống!`,
                  })}
                  name="firstName"
                  id="firstName"
                  type="text"
                  placeholder="Trần Văn A"
                  defaultValue={user?.firstName}
                />
                <ErrorMsg msg={errors?.firstName?.message} />
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>
                  Tên <span>*</span>
                </label>
                <input
                  {...register("lastName", {
                    required: `lastName is required!`,
                  })}
                  name="lastName"
                  id="lastName"
                  type="text"
                  placeholder="Last Name"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div> */}
            {/* <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Quốc gia <span>*</span>
                </label>
                <input
                  {...register("country", { required: `country is required!` })}
                  name="country"
                  id="country"
                  type="text"
                  placeholder="United States (US)"
                />
                <ErrorMsg msg={errors?.lastName?.message} />
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Địa chỉ</label>
                <input
                  {...register("address", { required: `Địa chỉ không bỏ trống!` })}
                  name="address"
                  id="address"
                  type="text"
                  placeholder="139 Pastuer, Phường Võ Thị Sáu, Quận 3, Tp. Hồ Chí Minh"
                />
                <ErrorMsg msg={errors?.address?.message} />
              </div>
            </div>
            {/* <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Tỉnh/ Thành phố</label>
                <input
                  {...register("city", { required: `City is required!` })}
                  name="city"
                  id="city"
                  type="text"
                  placeholder="City"
                />
                 <ErrorMsg msg={errors?.city?.message} />
              </div>
            </div> */}
            {/* <div className="col-md-6">
              <div className="tp-checkout-input">
                <label>Postcode ZIP</label>
                <input
                  {...register("zipCode", { required: `zipCode is required!` })}
                  name="zipCode"
                  id="zipCode"
                  type="text"
                  placeholder="Postcode ZIP"
                />
                <ErrorMsg msg={errors?.zipCode?.message} />
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Điện thoại <span>*</span>
                </label>
                <input
                  {...register("contactNo", {
                    required: `Số điện thoại không bỏ trống!`,
                  })}
                  name="contactNo"
                  id="contactNo"
                  type="text"
                  placeholder="Số Điện thoại"
                />
                <ErrorMsg msg={errors?.contactNo?.message} />
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>
                  Email address <span>*</span>
                </label>
                <input
                  {...register("email", { required: `Email is required!` })}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                />
                <ErrorMsg msg={errors?.email?.message} />
              </div>
            </div> 
            <div className="col-md-12">
              <div className="tp-checkout-input">
                <label>Order notes (optional)</label>
                <textarea
                  {...register("orderNote", { required: false })}
                  name="orderNote"
                  id="orderNote"
                  placeholder="Notes about your order, e.g. special notes for delivery."
                />
              </div>
            </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutBillingArea;
