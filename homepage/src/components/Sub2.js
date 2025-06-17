import ScrollIndicator from "./ScrollIndicator";
import {useState} from "react";

// 샘플 이미지 리스트 및 이미지별 텍스트
const images = [
    {
        src: '/about/global.jpg',
        topLeftText: <span>DIRECT DEALING</span>,
        bottomLeftText: <span>
            We directly deal with local agencies with <br/>
manufacturers in the United States Europe, Japan<br/>
and around the world.
        </span>
    },
    {
        src: '/about/price.jpg',
        topLeftText: <span>REASONABLE PRICE</span>,
        bottomLeftText: <span>
          We supply as a competitive price for<br/>
foreign materials, parts, and electronic products<br/>
that customers want.
        </span>
    },
    {
        src: '/about/coworker.jpg',
        topLeftText: <span>DIRECT DEALING</span>,
        bottomLeftText: <span>
            We directly deal with local agencies with <br/>
manufacturers in the United States Europe, Japan<br/>
and around the world.
        </span>
    },    {
        src: '/about/global.jpg',
        topLeftText: <span>EXPREDITE PROCESS</span>,
        bottomLeftText: <span>
           Manku Trading Co., Ltd. Grows together with customers <br/>
based on many years of experience and know-how.
        </span>
    },
];


export default function Sub2() {
    // 1) 클릭·초기 강조용
    const [activeIndex, setActiveIndex] = useState(0);
    // 2) hover 강조용
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

            <div style={{fontSize: 45, fontWeight: 700, padding: 30}}>ABOUT MANKU(내용 알려주시면 반영하겠습니다.)</div>
            {/* 이미지 갤러리: 높이는 부모에 맞추고 너비만 flex */}
            <div
                style={{
                    position: 'absolute',
                    top: 180,
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
                {images.map((img, index) => {
                    const isHovered = hoveredIndex === index;

                    // 변경된 brightness 로직!
                    const brightness = isHovered ? 1 : 0.6;

                    // hover된 카드만 flexGrow 3, 아니면 1
                    const flexGrow = isHovered ? 3 : 1;

                    return (
                        <div
                            key={index}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                position: "relative",
                                flexGrow,
                                flexBasis: "0%",
                                height: "calc(100% - 150px)",
                                cursor: "pointer",
                                overflow: "hidden",
                                transition: "flex-grow 0.3s ease-out",
                            }}
                        >
                            <img
                                src={img.src}
                                alt=""
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    objectFit: "cover",
                                    borderRadius: 10,
                                    transition: "transform 0.3s ease, filter 0.3s ease",
                                    transform: isHovered ? "scale(1.05)" : "scale(1)",
                                    filter: `brightness(${brightness})`,  // 여기에만 집중!
                                }}
                            />

                            {/* 텍스트 컨테이너 */}
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: 20,
                                    left: 20,
                                    display: "flex",
                                    flexDirection: "column",
                                    overflow: "hidden",
                                }}
                            >
                                <div style={{
                                    color: "#fff",
                                    fontSize: 35,
                                    fontWeight: "bold",
                                    lineHeight: 1.2
                                }}>
                                    {img.topLeftText}
                                </div>
                                <div style={{
                                    color: "#fff",
                                    fontSize: 16,
                                    marginTop: 8,
                                    opacity: isHovered ? 1 : 0,
                                    maxHeight: isHovered ? "200px" : "0px",
                                    transition: "opacity 0.3s ease, max-height 0.3s ease"
                                }}>
                                    {img.bottomLeftText}
                                </div>
                            </div>
                        </div>
                    );
                })}
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
                <ScrollIndicator/>
            </div>
        </div>
    );
}
