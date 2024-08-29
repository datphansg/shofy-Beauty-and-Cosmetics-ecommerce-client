import React from 'react';

import HeaderTwo from '@/layout/headers/header-2';
import Footer from '@/layout/footers/footer';
import Wrapper from '@/layout/wrapper';
import CompareArea from '@/components/compare/compare-area';
import CommonBreadcrumb from '@/components/breadcrumb/common-breadcrumb';

const ComparePage = () => {
  return (
    <Wrapper>
      <HeaderTwo style_2={true} />
      <CommonBreadcrumb name="Compare" subtitle="Compare" />
      <CompareArea/>
      <Footer primary_style={true} />
    </Wrapper>
  );
};

export default ComparePage;