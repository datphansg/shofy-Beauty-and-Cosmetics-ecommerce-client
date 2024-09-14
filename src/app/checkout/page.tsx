"use client"
import React,{useEffect} from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
// internal

import Wrapper from '@/layout/wrapper';
import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import CheckoutArea from '@/components/checkout/checkout-area';


const CheckoutPage = () => {
  const router = useRouter();
  useEffect(() => {
    // const isAuthenticate = Cookies.get("userInfo");
    // if(!isAuthenticate){
    //   router.push("/login")
    // }
  },[router])
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb name="Thanh toán" subtitle="Thanh toán" bg_clr={true} />
      <CheckoutArea/>
      <Footer style_2={true} />
    </Wrapper>
  );
};

export default CheckoutPage;