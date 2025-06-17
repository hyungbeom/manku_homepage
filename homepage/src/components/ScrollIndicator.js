import styled, { keyframes } from 'styled-components';

/* 1) 화살표 바운스 + 페이드 keyframes */
const arrowBounce = keyframes`
  0%   { transform: translateY(0);   opacity: 1; }
  50%  { transform: translateY(10px); opacity: 0.6; }
  100% { transform: translateY(0);   opacity: 1; }
`;

/* 2) 컨테이너: 두 개의 화살표를 세로로 쌓고, 가운데 정렬 */
const ArrowWrapper = styled.div`
  position: absolute;
  bottom: -30px;           /* 원하는 위치로 조절 */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;   /* 클릭 이벤트 방해하지 않도록 */
`;

/* 3) 개별 화살표 스타일 */
const Arrow = styled.span`
  font-size: 20px;
  color: white;           /* 섹션 배경 따라 바꿔주세요 */
  animation: ${arrowBounce} 1.5s ease-in-out infinite;
`;

/* 4) 두 번째 화살표만 딜레이 주기 */
const ArrowDelayed = styled(Arrow)`
  animation-delay: 0.75s;
`;

export default function ScrollIndicator() {
    return (
        <ArrowWrapper>
            <ArrowDelayed>↓</ArrowDelayed>
        </ArrowWrapper>
    );
}