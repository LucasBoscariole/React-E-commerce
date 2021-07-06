import React from 'react';
import styled from 'styled-components';
import { PageHero } from '../components';

import { Link } from 'react-router-dom';

const CheckoutPage = () => {
  return (
    <main>
      <PageHero title='checkout' />
      <Wrapper className='page'>
        <Link to='/' className='btn'>
          back home
        </Link>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default CheckoutPage;
