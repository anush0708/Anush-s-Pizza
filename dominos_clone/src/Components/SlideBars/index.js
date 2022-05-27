import React, { useState } from 'react';
import {
  SlideContainer,
  ProductContainer,
  ProductImage,
  ProductContent,
  FwdIcon,
  BwdIcon,
  SliderHeader,
} from './SlideBarElements';

function SlideBars({ Heading, Products }) {
  console.log('products', Products);
  const [slide, setSlide] = useState(0);
  const nextSlide = () => {
    setSlide(slide === Products.length - 1 ? 0 : slide + 1);
    console.log(slide, 'incr');
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? Products.length - 1 : slide - 1);
    console.log(slide, 'dec');
  };
  return (
    <>
      <SliderHeader>{Heading}</SliderHeader>
      <SlideContainer>

        <BwdIcon onClick={prevSlide} />
        {Products?.map((prd, id) => (id === slide && (
          <ProductContainer>
            <ProductImage src={prd.img} alt={prd.alt} />
            <ProductContent>
              <p>{prd.name}</p>
              <p>{prd.desc}</p>
              <p>{prd.price}</p>
            </ProductContent>
          </ProductContainer>
        )))}

        <FwdIcon onClick={nextSlide} />

      </SlideContainer>
    </>
  );
}

export default SlideBars;
