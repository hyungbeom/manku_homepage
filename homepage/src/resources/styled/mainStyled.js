import styled, {css} from 'styled-components';

export const FullpageContainer = styled.div`
    margin-top: 80px; /* 헤더 높이 만큼 밀어내기 */
    height: calc(100vh - 80px);
    width: 100%; /* 100vw는 스크롤바 때문에 가로 스크롤이 생길 수 있어요 */
    overflow-y: auto;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const Section = styled.section`
    position: relative; /* 절대위치 요소(오버레이·텍스트 등)에 대비 */
    scroll-snap-align: start;
    height: 100%; /* 부모(FullpageContainer) 높이 그대로 */
    width: 100%;
    min-width: 320px;

    /* bgColor · bgImage props 는 그대로 사용 */
    background-color: ${({bgColor}) => bgColor || 'transparent'};
    ${({bgImage}) =>
            bgImage &&
            css`
                background-image: url(${bgImage});
                background-size: cover;
                background-repeat: no-repeat;
                background-position: center center;
            `}
`;


export const FloatingButton = styled.div`
    position: fixed;
    bottom: ${({bottom}) => bottom};
    right: 50px;
    display: flex;
    align-items: center;
    background-color: ${({bgColor}) => bgColor};
    border-radius: 20px; /* pill 모양 */
    overflow: hidden;
    width: 35px; /* 기본엔 아이콘만 보이도록 */
    height: 35px;
    cursor: pointer;
    z-index: 10;
    transition: width 0.3s ease;
    &:hover {
        width: 160px; /* hover 시 넓이 확장 */
    }

    /* hover 시 자식 Text 컴포넌트 opacity */

    &:hover span {
        opacity: 1;
    }
`;

export const FloatingIcon = styled.img`
    width: 35px;
    height: 35px;
    flex-shrink: 0;
`;

export const FloatingText = styled.span`
    margin-left: 5px;
    white-space: nowrap;
    font-size: 10px;
    font-weight: bold;
    color: #191919; /* 검은 텍스트 */
    opacity: 0; /* 기본엔 숨김 */
    transition: opacity 0.3s ease 0.1s;
`;