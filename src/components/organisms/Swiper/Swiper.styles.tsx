import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px 15px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

export const SwiperContainer = styled.div`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    touch-action: pan-y;
`

export const SwiperList = styled.ul<{ offsetX: number, isSwiping: boolean }>`
    min-width: 100%;
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    margin: 0;
    transform: translate3d(${({ offsetX }) => offsetX}px, 0, 0);
    transition: ${({ isSwiping }) => isSwiping ? 'none' : 'transform 0.3s ease-out'};
`

export const SwiperIndicator = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 15px 0 0 0;
    padding: 0;
`

export const SwiperIndicatorItem = styled.li`

`