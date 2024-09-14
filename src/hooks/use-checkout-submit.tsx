"use client"
import * as dayjs from "dayjs";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
//internal import
import useCartInfo from "./use-cart-info";
import { set_shipping } from "@/redux/features/order/orderSlice";
import { set_coupon } from "@/redux/features/coupon/couponSlice";
import { notifyError, notifySuccess } from "@/utils/toast";
import {useCreatePaymentIntentMutation,useSaveOrderMutation} from "@/redux/features/order/orderApi";
import { useGetOfferCouponsQuery } from "@/redux/features/coupon/couponApi";
import nodemailer from 'nodemailer';
import { RootState } from "@/redux/store";
import { log } from "console";
const useCheckoutSubmit = () => {
  // offerCoupons
  const { data: offerCoupons, isError, isLoading } = useGetOfferCouponsQuery({});
  // addOrder
  const [saveOrder, {}] = useSaveOrderMutation();
  // createPaymentIntent
  const [createPaymentIntent, {}] = useCreatePaymentIntentMutation();
  // cart_products
  const  cart_products =  useSelector((state:RootState) => state.cart.cart_products);
  // user
  const  user  = useSelector((state: RootState) => state.auth);
  // shipping_info
  const { shipping_info } = useSelector((state:RootState) => state.order);
  // total amount
  const { total, setTotal } = useCartInfo();
  // couponInfo
  const [couponInfo, setCouponInfo] = useState({});
  //cartTotal
  const [cartTotal, setCartTotal] = useState("");
  // minimumAmount
  const [minimumAmount, setMinimumAmount] = useState(0);
  // shippingCost
  const [shippingCost, setShippingCost] = useState(0);
  // discountAmount
  const [discountAmount, setDiscountAmount] = useState(0);
  // discountPercentage
  const [discountPercentage, setDiscountPercentage] = useState(0);
  // discountProductType
  const [discountProductType, setDiscountProductType] = useState("");
  // isCheckoutSubmit
  const [isCheckoutSubmit, setIsCheckoutSubmit] = useState(false);
  // cardError
  const [cardError, setCardError] = useState("");
  // clientSecret
  const [clientSecret, setClientSecret] = useState("");
  // showCard
  const [showCard, setShowCard] = useState(false);
  // coupon apply message
  const [couponApplyMsg,setCouponApplyMsg] = useState("");

  const dispatch = useDispatch();
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  const {register,handleSubmit,setValue,formState: { errors }} = useForm();

  let couponRef = useRef("");

  useEffect(() => {
    if (localStorage.getItem("couponInfo")) {
      const data = localStorage.getItem("couponInfo");
      const coupon = JSON.parse(data);
      setCouponInfo(coupon);
      setDiscountPercentage(coupon.discountPercentage);
      setMinimumAmount(coupon.minimumAmount);
      setDiscountProductType(coupon.productType);
    }
  }, []);

  useEffect(() => {
    if (minimumAmount - discountAmount > total || cart_products.length === 0) {
      setDiscountPercentage(0);
      localStorage.removeItem("couponInfo");
    }
  }, [minimumAmount, total, discountAmount, cart_products]);

  //calculate total and discount value
  useEffect(() => {
    const result = cart_products?.filter(
      (p) => p.productType === discountProductType
    );
    const discountProductTotal = result?.reduce(
      (preValue, currentValue) =>
        preValue + currentValue.price * currentValue.orderQuantity,
      0
    );
    let totalValue = "";
    let subTotal = Number((total + shippingCost).toFixed(2));
    let discountTotal = Number(
      discountProductTotal * (discountPercentage / 100)
    );
    totalValue = Number(subTotal - discountTotal).toString();
    setDiscountAmount(discountTotal);
    setCartTotal(totalValue);
  }, [
    total,
    shippingCost,
    discountPercentage,
    cart_products,
    discountProductType,
    discountAmount,
    cartTotal,
  ]);

  // create payment intent
  useEffect(() => {
    if (cartTotal) {
      // createPaymentIntent({
      //   price: parseInt(cartTotal),
      // })
      //   .then((data) => {
      //     // setClientSecret(data?.data?.clientSecret);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    }
  }, [createPaymentIntent, cartTotal]);

  // handleCouponCode
  const handleCouponCode = (e) => {
    e.preventDefault();

    // if (!couponRef.current>.value) {
    //   notifyError("Please Input a Coupon Code!");
    //   return;
    // }
    if (isLoading) {
      return <h3>Loading...</h3>;
    }
    if (isError) {
      return notifyError("Something went wrong");
    }
    // const result = offerCoupons?.filter(
    //   (coupon) => coupon.couponCode === couponRef.current?.value
    // );

    // if (result.length < 1) {
    //   notifyError("Please Input a Valid Coupon!");
    //   return;
    // }

    // if (dayjs().isAfter(dayjs(result[0]?.endTime))) {
    //   notifyError("This coupon is not valid!");
    //   return;
    // }

    // if (total < result[0]?.minimumAmount) {
    //   notifyError(
    //     `Minimum ${result[0].minimumAmount} USD required for Apply this coupon!`
    //   );
    //   return;
    // } else {
    //   // notifySuccess(
    //   //   `Your Coupon ${result[0].title} is Applied on ${result[0].productType}!`
    //   // );
    //   setCouponApplyMsg(`Your Coupon ${result[0].title} is Applied on ${result[0].productType} productType!`)
    //   setMinimumAmount(result[0]?.minimumAmount);
    //   setDiscountProductType(result[0].productType);
    //   setDiscountPercentage(result[0].discountPercentage);
    //   dispatch(set_coupon(result[0]));
    //   setTimeout(() => {
    //     couponRef.current.value = "";
    //     setCouponApplyMsg("")
    //   }, 5000);
    // }
  };

  // handleShippingCost
  const handleShippingCost = (value) => {
    setShippingCost(value);
  };

  //set values
  useEffect(() => {
    setValue("firstName", shipping_info.firstName);
    setValue("lastName", shipping_info.lastName);
    setValue("country", shipping_info.country);
    setValue("address", shipping_info.address);
    setValue("city", shipping_info.city);
    setValue("zipCode", shipping_info.zipCode);
    setValue("contactNo", shipping_info.contactNo);
    setValue("email", shipping_info.email);
    setValue("orderNote", shipping_info.orderNote);
  }, [user, setValue, shipping_info, router]);

  // submitHandler
  const submitHandler = async (data) => {
    console.log(data);
    dispatch(set_shipping(data));
    setIsCheckoutSubmit(true);

    let orderInfo = {
      name: `${data.firstName} ${data.lastName}`,
      address: data.address,
      contact: data.contactNo,
      email: data.email,
      city: data.city,
      country: data.country,
      zipCode: data.zipCode,
      shippingOption: data.shippingOption,
      status: "Pending",
      cart: cart_products,
      paymentMethod: data.payment,
      subTotal: total,
      shippingCost: shippingCost,
      discount: discountAmount,
      totalAmount: cartTotal,
      orderNote:data.orderNote,
      user: `${user?._id}`,
    };
   
    sendOrderEmail(orderInfo);    
    router.push(`/order`);
  };
  async function sendOrderEmail(orderInfo) {
    try {
      const response = await fetch('/api/sendEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify({
          content: createOrderDetailsHtml(orderInfo) // Chuyển đổi body sang chuỗi JSON
        })
    });
    
  
      if (response.ok) {
          localStorage.removeItem("cart_products")
          localStorage.removeItem("couponInfo");
          setIsCheckoutSubmit(false)
          notifySuccess("Đơn hàng đã hoàn thành");
      } else {
        //alert('Có lỗi xảy ra khi gửi email.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
const createOrderDetailsHtml = (orderInfo: any) => {
  let cartDetails = '';
  orderInfo.cart.forEach((product: any) => {
      cartDetails += `
          <tr>
               <td><a href="https://selly.vn/product/${product._id}" target="_blank" >${product._id}</a></td>
              <td>${product.name}</td>
              <td>${product.orderQuantity}</td>
              <td>${product.price.market.toLocaleString('vi-VN')}</td>
              <td>${(product.price.market * product.orderQuantity).toLocaleString('vi-VN')}</td>
          </tr>
      `;
  });

  return `
      <h2>Chi tiết đơn hàng</h2>
      <p>Tên khách hàng: ${orderInfo.name}</p>
      <p>Địa chỉ: ${orderInfo.address}</p>
      <p>Số điện thoại: ${orderInfo.contact}</p>
      <p>Email: ${orderInfo.email}</p>
      <p>Thành phố: ${orderInfo.city}</p>
      <p>Quốc gia: ${orderInfo.country}</p>
      <p>Mã bưu điện: ${orderInfo.zipCode}</p>
      <p>Ghi chú đơn hàng: ${orderInfo.orderNote || "Không có"}</p>
      <p>Phương thức thanh toán: ${orderInfo.paymentMethod}</p>

      <h3>Sản phẩm đã đặt</h3>
      <table border="1" cellspacing="0" cellpadding="5">
          <thead>
              <tr>
                  <th>ID</th>
                  <th>Sản phẩm</th>
                  <th>Số lượng</th>
                  <th>Giá</th>
                   <th>Thành tiền</th>
              </tr>
          </thead>
          <tbody>
              ${cartDetails}
          </tbody>
      </table>

      <p>Tổng phụ: ${orderInfo.subTotal.toLocaleString('vi-VN')}</p>
      <p>Phí vận chuyển: ${orderInfo.shippingCost}</p>
      <p>Giảm giá: ${orderInfo.discount}</p>
      <p>Tổng cộng: ${orderInfo.totalAmount.toLocaleString('vi-VN')}</p>
  `;
};

  
  
  return {
    handleCouponCode,
    couponRef,
    handleShippingCost,
    discountAmount,
    total,
    shippingCost,
    discountPercentage,
    discountProductType,
    setTotal,
    register,
    errors,
    cardError,
    submitHandler,
    stripe,
    handleSubmit,
    clientSecret,
    setClientSecret,
    cartTotal,
    isCheckoutSubmit,
    couponApplyMsg,
    showCard,
    setShowCard,
  };
};

export default useCheckoutSubmit;
