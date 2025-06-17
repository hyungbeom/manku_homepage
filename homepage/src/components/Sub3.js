import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ScrollIndicator from './ScrollIndicator';

// 로고 이미지 리스트 (고유 8개)
const logos = [
    '/brand/brand1.svg',
    '/brand/brand2.svg',
    '/brand/brand3.svg',
    '/brand/brand4.svg',
    '/brand/brand5.svg',
    '/brand/brand6.svg',
    '/brand/brand7.svg',
    '/brand/brand8.svg',
];

const logos2 = [
    '/brand/brand8.svg',
    '/brand/brand7.svg',
    '/brand/brand6.svg',
    '/brand/brand5.svg',
    '/brand/brand4.svg',
    '/brand/brand3.svg',
    '/brand/brand2.svg',
    '/brand/brand1.svg',
];

export default function Sub3() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // 무한 스크롤을 위한 리스트 복제
    const tickerItems = [...logos, ...logos];
    const tickerItems2 = [...logos2, ...logos2];

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',
                background: 'white',
            }}
        >
            {/* 헤더 */}
            <div
                style={{
                    fontSize: 45,
                    fontWeight: 700,
                    padding: 30,
                    color: 'black',
                }}
            >
                MAIN MAKER(사명 리스트만 알려주시면 찾아서 넣어드리겠습니다.)
            </div>

            {/* 애니메이션 keyframes */}
            <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

            {/* 윗줄 틱커: 왼→오 흐름 */}
            <div
                style={{
                    position: 'absolute',
                    top: '40%',
                    left: 0,
                    width: '100%',
                    transform: 'translateY(-50%)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        width: '200%',
                        animation: 'tickerScroll 20s linear infinite',
                    }}
                >
                    {tickerItems.map((src, idx) => (
                        <img
                            key={`top-${idx}`}
                            src={src}
                            alt={`Logo ${idx + 1}`}
                            style={{
                                height: 80,
                                marginRight: 100,
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* 아랫줄 틱커: 오→왼 흐름 */}
            <div
                style={{
                    position: 'absolute',
                    top: '60%',
                    left: 0,
                    width: '100%',
                    transform: 'translateY(-50%)',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        display: 'inline-flex',
                        width: '200%',
                        animation: 'tickerScroll 20s linear infinite reverse',
                    }}
                >
                    {tickerItems2.map((src, idx) => (
                        <img
                            key={`bottom-${idx}`}
                            src={src}
                            alt={`Logo ${idx + 1}`}
                            style={{
                                height: 80,
                                marginRight: 100,
                                objectFit: 'contain',
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* 스크롤 인디케이터 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: 100,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#000',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            >
                <ScrollIndicator />
            </div>
        </div>
    );
}