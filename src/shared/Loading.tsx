import React from 'react';
import { Spin } from 'antd';

const Loading = () => {
  return (
    <div className='loading-wrapper'>
      <Spin size='large' tip='Loading...' />
    </div>
  );
};

export default Loading;
