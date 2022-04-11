import { getRefValue, useStateRef } from 'lib/hooks';
import React, { useRef, useState } from 'react';
import { SwiperItemType } from 'types';
import { Container, SwiperContainer, SwiperList, SwiperIndicator,SwiperIndicatorItem } from './Swiper.styles';
import SwiperItem from './SwiperItem';
import { getTouchEventData } from '../../../lib/dom'

export type Props = {
    items: Array<SwiperItemType>
}

export const MIN_SWIPE_REQUIRED = 40;

export const Swiper = ({ items }: Props): JSX.Element => {
    const containerRef = useRef<HTMLUListElement>(null);
    const containerWidthRef = useRef(0);
    const minOffsetXRef = useRef(0);
    const currentOffsetXRef = useRef(0);
    const startXRef = useRef(0);

    const [offsetX, setOffsetX, offsetXRef] = useStateRef(0);
    const [isSwiping, setIsSwiping] = useState(false);
    const [currentIdx, setCurrentIdx] = useState(0);

    const onTouchMove = (e: TouchEvent | MouseEvent):void => {
        const currentX = getTouchEventData(e).clientX;
        const diff = getRefValue(startXRef) - currentX;
        let newOffsetX = getRefValue(currentOffsetXRef) - diff;

        const maxOffsetX = 0;
        const minOffsetX = getRefValue(minOffsetXRef)

        if (newOffsetX > maxOffsetX) {
            newOffsetX = 0;
        }

        if (newOffsetX < minOffsetX) {
            newOffsetX = minOffsetX;
        }

        setOffsetX(newOffsetX);
    }


    const onTouchEnd = ():void => {
        const containerWidth = getRefValue(containerWidthRef);
        const currentOffsetX = getRefValue(currentOffsetXRef);
        let newOffsetX = getRefValue(offsetXRef);

        const diff = currentOffsetX - newOffsetX;
        console.log(diff);

        if (Math.abs(diff) > MIN_SWIPE_REQUIRED) {
            if (diff > 0) {
                newOffsetX = Math.floor(newOffsetX / containerWidth) * containerWidth;
            } else {
                newOffsetX = Math.ceil(newOffsetX / containerWidth) * containerWidth;
            }
        } else {
            newOffsetX = Math.round(newOffsetX / containerWidth) * containerWidth;
        }        

        setIsSwiping(false);
        setOffsetX(newOffsetX);
        setCurrentIdx(Math.abs(newOffsetX / containerWidth));

        window.removeEventListener('touchmove', onTouchMove);
        window.removeEventListener('touchend', onTouchEnd);
        window.removeEventListener('mousemove', onTouchMove);
        window.removeEventListener('mouseup', onTouchEnd);
    }

    const onTouchstart = (e: React.TouchEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>):void => {
        setIsSwiping(true);

        currentOffsetXRef.current = getRefValue(offsetXRef);
        startXRef.current = getTouchEventData(e).clientX;

        const containerEl = getRefValue(containerRef);
        const containerWidth = containerEl.offsetWidth;

        containerWidthRef.current = containerWidth;
        minOffsetXRef.current = containerWidth - containerEl.scrollWidth;

        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);
        window.addEventListener('mousemove', onTouchMove);
        window.addEventListener('mouseup', onTouchEnd);
    }

    const indicatorOnClick = (idx: number):void => {
        const containerEl = getRefValue(containerRef);
        const containerWidth = containerEl.offsetWidth;

        setCurrentIdx(idx);
        setOffsetX(-(containerWidth * idx));
    }

    return (
        // <Container> is from App. I have to change it later.
        <Container>
            <SwiperContainer onTouchStart={onTouchstart} onMouseDown={onTouchstart}>
                <SwiperList ref={containerRef} offsetX={offsetX} isSwiping={isSwiping}>
                    {items.map((item, idx) => (
                        <SwiperItem key={idx} {...item}/> 
                    ))}
                </SwiperList>
                <SwiperIndicator>
                    {items.map((_item, idx) => (
                        // <SwiperIndicatorItem key={idx} />
                        <li onClick={() => indicatorOnClick(idx)} key={idx}
                        data-testid="indicator"
                        className={` ${
                            currentIdx === idx ? 'active' : ''
                          }`}
                        style={{ 
                            backgroundColor: `${idx === currentIdx ? '#007E7A' : '#cccccc'}`,
                            width: '12px',
                            height: '12px',
                            margin: '0 4px',
                            borderRadius: '50%',
                            cursor: 'pointer',
                        }}/>
                    ))}
                </SwiperIndicator>
            </SwiperContainer>
        </Container> 
    )
}
