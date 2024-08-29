import React from 'react';

import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';
import LoginArea from '@/components/login-register/login-area';

const LoginPage = () => {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb name="Login" subtitle="Login" center={true} />
      <LoginArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default LoginPage;