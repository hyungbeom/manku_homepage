// Sub1.jsx
import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import ScrollIndicator from './ScrollIndicator';

// 1) 교체할 이미지 URL 리스트
const IMAGES = [
    '/about/global.jpg',
    '/mainImage.jpg',
    // …필요한 만큼 추가
];

// 2) zoom 애니메이션: 1.2배 → 1배
const zoomAnim = keyframes`
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
`;

// 3) 매번 리마운트되며 애니메이션 재생되는 배경 컴포넌트
const ZoomBackground = styled.div`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* 교체될 때마다 zoomAnim 1s 재생 */
  animation: ${zoomAnim} 1s ease-out;
`;

export default function Sub1() {
    const [current, setCurrent] = useState(0);

    // 4) 3초마다 이미지 순환
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(idx => (idx + 1) % IMAGES.length);
        }, 4500);
        return () => clearInterval(timer);
    }, []);

    return (
        <div
            style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                overflow: 'hidden',
            }}
        >
            {/* 5) key를 current로 주면 이미지 교체 때마다 리마운트 */}
            <ZoomBackground key={current} image={IMAGES[current]} />

            {/* 어두운 오버레이 */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: 'rgba(0,0,0,0.45)',
                }}
            />

            {/* 중앙 텍스트 */}
            <div
                style={{
                    fontWeight: 800,
                    position: 'absolute',
                    top: '45%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    zIndex: 1,
                    color: 'white',
                    textAlign: 'center',
                }}
            >
                <div style={{ fontSize: 50 }}>Manku Solution</div>
                <div style={{ paddingTop: 30, fontSize: 50 }}>원가절감의 시작</div>
                <div style={{ fontSize: 50 }}>MAKE IT GREAT WAY</div>
                <div style={{ fontSize: 50, paddingTop: 10 }}>
                    (주)만쿠솔루션이 열어 나갑니다.
                </div>
            </div>

            {/* 스크롤 유도 인디케이터 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: 'white',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            >
                <img src="/mouse.svg" width={16} alt="Scroll icon" />
                <div style={{ fontSize: 10, marginTop: 8 }}>S C R O L L</div>
                <ScrollIndicator />
            </div>
        </div>
    );
}