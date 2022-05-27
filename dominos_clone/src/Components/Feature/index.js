import React from 'react';
import { FeatureContainer, FeatureButton } from './FeatureElements';

function Feature() {
  return (
    <FeatureContainer>
      <h1>Pizza of the day</h1>
      <p>Truffle sausage alfredo topped with 24 carat gold dust</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContainer>
  );
}

export default Feature;
