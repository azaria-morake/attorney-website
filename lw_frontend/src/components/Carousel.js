import React from 'react';
import styled from 'styled-components';

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 5px;
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
      <Image src="bigger-smiles-Wu8rbjHVnvg-unsplash.jpg" alt="Lawyer 1" />
      <Image src="renaldo-matamoro-86JiKaHF4I8-unsplash.jpg" alt="Lawyer 2" />
      <Image src="lawyers.jpg" alt="Lawyer 3" />
    </CarouselWrapper>
  );
};

export default Carousel;
