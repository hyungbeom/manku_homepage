import {FloatingButton, FloatingIcon, FloatingText, FullpageContainer, Section} from "../resources/styled/mainStyled";
import {useEffect, useRef, useState} from "react";
import Observer from "../components/Observer";
import Sub1 from "../components/Sub1";
import Sub2 from "../components/Sub2";
import Sub3 from "../components/Sub3";
import Sub4 from "../components/Sub4";
import Sub5 from "../components/Sub5";


const PAGES = [Sub1, Sub2, Sub3, Sub4, Sub5];

export default function Main() {
    const [currentPage, setCurrentPage] = useState(0);
    const containerRef = useRef(null);
    const sectionRefs = useRef([]);

    // 스크롤할 때마다 현재 페이지 업데이트
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const onScroll = () => {
            const idx = Math.round(container.scrollTop / container.clientHeight);
            setCurrentPage(idx);
        };

        container.addEventListener('scroll', onScroll);
        return () => container.removeEventListener('scroll', onScroll);
    }, []);

    // 원하는 페이지로 부드럽게 이동
    const goToPage = (idx) => {
        const container = containerRef.current;
        if (!container) return;
        const top = container.clientHeight * idx;
        container.scrollTo({ top, behavior: 'smooth' });
    };

    return (
        <>
            {/* 풀페이지 스크롤 컨테이너 */}
            <FullpageContainer ref={containerRef}>
                {PAGES.map((PageComponent, i) => (
                    <Section key={i}>
                        {/* 각 페이지 컴포넌트가 내부에서 레이아웃과 배경을 책임집니다 */}
                        <PageComponent />
                    </Section>
                ))}
            </FullpageContainer>
            {/* ●/○ Indicator */}
            <Observer
                currentPage={currentPage}
                pageCount={PAGES.length}
                onDotClick={goToPage}
            />


            <FloatingButton bottom={'150px'} bgColor={'#84FC6F'} onClick={() => {/* 카카오톡 채팅 열기 로직 */}}>
                <FloatingIcon src="/Phone.svg" alt="카카오톡 문의" />
                <FloatingText>010-8636-2553</FloatingText>
            </FloatingButton>

            <FloatingButton bottom={'100px'} bgColor={'#1D6FF2'} onClick={() => {/* 카카오톡 채팅 열기 로직 */}}>
                <FloatingIcon src="/Mail.svg" alt="카카오톡 문의" />
                <FloatingText>sales@manku.co.kr</FloatingText>
            </FloatingButton>


            <FloatingButton bottom={'50px'} bgColor={'#fee500'} onClick={() => {/* 카카오톡 채팅 열기 로직 */}}>
                <FloatingIcon src="/kakaotalk.svg" alt="카카오톡 문의" />
                <FloatingText>ID : MankuTrading</FloatingText>
            </FloatingButton>
        </>
    );
}