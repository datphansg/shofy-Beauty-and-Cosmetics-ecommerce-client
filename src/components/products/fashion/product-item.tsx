"use client"
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "react-simple-star-rating";
import Link from "next/link";
// internal
import { Cart, CompareThree, QuickView, Wishlist } from "@/svg";
import { handleProductModal } from "@/redux/features/productModalSlice";
import { add_cart_product } from "@/redux/features/cartSlice";
import { add_to_wishlist } from "@/redux/features/wishlist-slice";
import { add_to_compare } from "@/redux/features/compareSlice";
import slugify from 'slugify';

const ProductItem = ({ product, style_2 = false }) => {
  const { _id, shareImages, category, name, reviews, price, discount, tags, status } = product || {};
  // const  cart_products = [] ; // useSelector((state) => state.cart);
  // const wishlist  = [] ; // useSelector((state) => state.wishlist);
  const isAddedToCart = true;// cart_products.some((prd) => prd._id === _id);
  const isAddedToWishlist = true;//wishlist.some((prd) => prd._id === _id);
  //const dispatch = useDispatch();
  
  // handle add product
  const handleAddProduct = (prd) => {
    //dispatch(add_cart_product(prd));
  };
  // handle wishlist product
  const handleWishlistProduct = (prd) => {
   // dispatch(add_to_wishlist(prd));
  };

  // handle compare product
  const handleCompareProduct = (prd) => {
    //dispatch(add_to_compare(prd));
  };

  return (
    <div className={`tp-product-item-2 ${style_2 ? "" : "mb-40"}`}>
      <div className="tp-product-thumb-2 p-relative z-index-1 fix">
        <Link href={`/product-details/${slugify(name  || "default-name", { lower: true })}/${_id}`}>
          <Image
            src={shareImages[0]}
            alt="product img"
            width={284}
            height={302}
          />
        </Link>
        <div className="tp-product-badge">
          {status === 'out-of-stock' && <span className="product-hot">out-stock</span>}
        </div>
        {/* product action */}
        {/* <div className="tp-product-action-2 tp-product-action-blackStyle">
          <div className="tp-product-action-item-2 d-flex flex-column">
            {isAddedToCart ? (
              <Link
                href="/cart"
                className={`tp-product-action-btn-2 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn`}
              >
                <Cart />
                <span className="tp-product-tooltip tp-product-tooltip-right">
                  Giỏ hàng
                </span>
              </Link>
            ) : (
              <button
                type="button"
                onClick={() => handleAddProduct(product)}
                className={`tp-product-action-btn-2 ${isAddedToCart ? 'active' : ''} tp-product-add-cart-btn`}
                disabled={status === 'out-of-stock'}
              >
                <Cart />
                <span className="tp-product-tooltip tp-product-tooltip-right">
                  Add to Cart
                </span>
              </button>
            )}
            <button
              onClick={() => dispatch(handleProductModal(product))}
              className="tp-product-action-btn-2 tp-product-quick-view-btn"
            >
              <QuickView />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Quick View
              </span>
            </button>
            <button disabled={status === 'out-of-stock'} onClick={() => handleWishlistProduct(product)} className={`tp-product-action-btn-2 ${isAddedToWishlist ? 'active' : ''} tp-product-add-to-wishlist-btn`}>
              <Wishlist />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add To Wishlist
              </span>
            </button>
            <button disabled={status === 'out-of-stock'} onClick={() => handleCompareProduct(product)} className="tp-product-action-btn-2 tp-product-add-to-compare-btn">
              <CompareThree />
              <span className="tp-product-tooltip tp-product-tooltip-right">
                Add To Compare
              </span>
            </button>
          </div>
        </div> */}
      </div>
      <div className="tp-product-content-2 pt-15">
        <h3 className="tp-product-title-2">
          <Link href={`/product-details/${slugify(name  || "default-name", { lower: true })}/${_id}`}>{name}</Link>
        </h3>
        <div className="tp-product-price-wrapper-2">
          {discount > 0 ? (
            <>
              <span className="tp-product-price-2 new-price">
                {price.market.toLocaleString('vi-VN')}đ{" "}
              </span>
              <span className="tp-product-price-2 old-price">
                {" "}${(Number(price) - (Number(price) * Number(discount)) / 100).toFixed(2)}
              </span>
            </>
          ) : (
            <span className="tp-product-price-2 new-price">
              {price.market.toLocaleString('vi-VN')}đ
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
