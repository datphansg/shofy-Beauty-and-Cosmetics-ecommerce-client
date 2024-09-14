import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
// internal
import { clearCart } from '@/redux/features/cartSlice';
import CartCheckout from './cart-checkout';
import CartItem from './cart-item';
import RenderCartProgress from '../common/render-cart-progress';
import { RootState } from '@/redux/store'; // Ensure correct import of RootState

const CartArea = () => {
  const cart_products = useSelector((state: RootState) => state.cart.cart_products || []); // Access cart_products correctly

  const dispatch = useDispatch()
  return (
    <>
      <section className="tp-cart-area pb-120">
        <div className="container">
          {cart_products.length === 0 &&
            <div className='text-center pt-50'>
              <h3>Không có sản phẩm trong giỏ hàng</h3>
              <Link href="/shop" className="tp-cart-checkout-btn mt-20">Tiếp tục mua sắm</Link>
            </div>
          }
          {cart_products.length > 0 &&
            <div className="row">
              <div className="col-xl-9 col-lg-8">
                <div className="tp-cart-list mb-25 mr-30">
                  <div className="cartmini__shipping">
                    {/* <RenderCartProgress /> */}
                  </div>
                  <table className="table">
                    <thead>
                      <tr>
                      <th className="tp-cart-header-product"></th>
                        <th className="tp-cart-header-product">Sản phẩm</th>
                        <th className="tp-cart-header-price">Giá</th>
                        <th className="tp-cart-header-quantity">Số lượng</th>
                        <th className="tp-cart-header-price">Thành tiền</th>
                        <th className="tp-cart-header-price"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart_products.map((item, i) => (
                        <CartItem key={i} product={item} />
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="tp-cart-bottom">
                  <div className="row align-items-end">
                    <div className="col-xl-6 col-md-8">
                      {/* <div className="tp-cart-coupon">
                        <form action="#">
                          <div className="tp-cart-coupon-input-box">
                            <label>Coupon Code:</label>
                            <div className="tp-cart-coupon-input d-flex align-items-center">
                              <input type="text" placeholder="Enter Coupon Code" />
                              <button type="submit">Apply</button>
                            </div>
                          </div>
                        </form>
                      </div> */}
                    </div>
                    <div className="col-xl-6 col-md-4">
                      <div className="tp-cart-update text-md-end mr-30">
                        <button onClick={() => dispatch(clearCart())} type="button" className="tp-cart-update-btn">Xóa giỏ hàng</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6">
                <CartCheckout />
              </div>
            </div>
          }
        </div>
      </section>
    </>
  );
};

export default CartArea;