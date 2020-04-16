import React from 'react';
import { Layout } from 'antd';
import { GithubFilled } from '@ant-design/icons';

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
      <p>
        <a target='blank' href='https://github.com/Sunnysit/pokemon-guessing'>
          <GithubFilled />
          Github Repo
        </a>
      </p>
    </Footer>
  );
};

export default FooterContent;
