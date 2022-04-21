import React from 'react';
import { SwiperItems, SwiperImg } from './SwiperItem.styles';
import { SwiperItemType } from 'types';

export type Props = SwiperItemType;

const SwiperItem = ({ imageSrc, imageAlt }: Props ): any => {
  return (
    <SwiperItems>
        <SwiperImg src={imageSrc} alt={imageAlt} draggable={false}></SwiperImg>
    </SwiperItems>
  )
}

export default SwiperItem 