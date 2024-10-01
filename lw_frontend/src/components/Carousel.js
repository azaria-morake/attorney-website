import React from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Image = styled.img`
  width: 300px;
  height: 400px;
  object-fit: cover;
  border-radius: 10px;
  margin: 0 1rem;
`;

const Carousel = () => {
  return (
    <CarouselWrapper>
      <Image src="lawyer1.jpg" alt="Lawyer 1" />
      <Image src="lawyer2.jpg" alt="Lawyer 2" />
      <Image src="lawyer3.jpg" alt="Lawyer 3" />
    </CarouselWrapper>
  );
};

export default Carousel;
