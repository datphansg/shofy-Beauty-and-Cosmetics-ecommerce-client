import React from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import Link from "next/link";
// internal
import { Close, Minus, Plus } from "@/svg";
import { add_cart_product, quantityDecrement, remove_product } from "@/redux/features/cartSlice";
import slugify from 'slugify';
const CartItem = ({product}) => {
  const {_id, img,name,price, orderQuantity = 0, shareImages } = product || {};

  const dispatch = useDispatch();

    // handle add product
    const handleAddProduct = (prd) => {
      dispatch(add_cart_product(prd))
    }
    // handle decrement product
    const handleDecrement = (prd) => {
      dispatch(quantityDecrement(prd))
    }
  
    // handle remove product
    const handleRemovePrd = (prd) => {
      dispatch(remove_product(prd))
    }

  return (
    <tr>
      {/* img */}
      <td className="tp-cart-img">
        <Link href={`/product-details/${slugify(name  || "default-name", { lower: true })}/${_id}`}>
        {shareImages && shareImages[0] && <Image src={shareImages[0]} alt="product img" width={70} height={100} />}
        </Link>
      </td>
      {/* title */}
      <td className="tp-cart-title">
        <Link href={`/product-details/${slugify(name  || "default-name", { lower: true })}/${_id}`}>{name}</Link>
      </td>
      {/* price */}
      <td className="tp-cart-price">
        <span>{(price.market).toLocaleString('vi-VN')}</span>
      </td>
      {/* quantity */}
      <td className="tp-cart-quantity">
        <div className="tp-product-quantity mt-10 mb-10">
          <span onClick={()=> handleDecrement(product)} className="tp-cart-minus">
            <Minus />
          </span>
          <input className="tp-cart-input" type="text" value={orderQuantity} readOnly />
          <span onClick={()=> handleAddProduct(product)} className="tp-cart-plus">
            <Plus />
          </span>
        </div>
      </td>
      <td className="tp-cart-price">
        <span>{(price.market * orderQuantity).toLocaleString('vi-VN')}</span>
      </td>
      {/* action */}
      <td className="tp-cart-action">
        <button onClick={()=> handleRemovePrd({name,id:_id})} className="tp-cart-action-btn">
          <Close />
          <span>{" "}Xóa</span>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
