import React from 'react';
import { Layout } from 'antd';

const FooterContent = () => {
  const { Footer } = Layout;

  return (
    <Footer>
      <p>
        Designed and Developed by{' '}
        <a target='blank' href='https://sunnyxue.com/'>
          Sunny Xue
        </a>
      </p>
    </Footer>
  );
};

export default FooterContent;
