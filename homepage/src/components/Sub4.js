import ScrollIndicator from "./ScrollIndicator";
import {useState} from "react";

// 샘플 이미지 리스트 및 이미지별 텍스트
const images = [
    {
        src: 'https://picsum.photos/id/1015/600/400',
        topLeftText: 'Mountain',
        bottomLeftText: 'Scenery'
    },
    {
        src: 'https://picsum.photos/id/1025/600/400',
        topLeftText: 'Dog',
        bottomLeftText: 'Playful'
    },
    {
        src: 'https://picsum.photos/id/1035/600/400',
        topLeftText: 'Forest',
        bottomLeftText: 'Misty'
    },
    {
        src: 'https://picsum.photos/id/1045/600/400',
        topLeftText: 'Beach',
        bottomLeftText: 'Sunny'
    },
];


export default function Sub4(){
    const [hoveredIndex, setHoveredIndex] = useState(null);

    // 헤더 높이(px)와 인디케이터 오프셋(px)을 변수로 관리
    const HEADER_HEIGHT = 180; // 예: 45px font-size + 30px padding
    const INDICATOR_BOTTOM = 100;

    return (
        <div
            style={{
                position: 'relative',
                width: '100vw',
                height: '100vh',
                overflow: 'hidden',

            }}
        >

            <div style={{fontSize : 45, fontWeight : 700, padding : 30}}>HANDLING ITEM</div>
            {/* 이미지 갤러리: 높이는 부모에 맞추고 너비만 flex */}
            <div
                style={{
                    position: 'absolute',
                    top: 150,
                    bottom: 0,
                    left: '2.5%',
                    right: '2.5%',
                    display: 'flex',
                    gap: '20px',
                    overflowX: 'auto',
                    overflowY: 'hidden',
                    flexWrap: 'nowrap',
                    zIndex: 1,
                }}
            >

                여기는 기존 그대로 가실건가요?! (아이템 이미지 & 내용들)
            </div>

            {/* 스크롤 인디케이터 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '100px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    color: '#fff',
                    zIndex: 2,
                    pointerEvents: 'none',
                }}
            >
                <ScrollIndicator />
            </div>
        </div>
    );
}
