import {
    Dropdown,
    HeaderContainer,
    MenuColumnContainer,
    MenuItem,
    SubmenuWrapper,
    SubmenuColumn,
    Underline
} from "../resources/styled/headerStyled";
import { useEffect, useRef, useState } from "react";

const MENUS    = ['회사소개', '제품소개', '온라인문의', '게시판'];
const SUBMENU  = [
    ['인사말','오시는길','ABOUT MANKU'],
    ['주요MAKER','취급MAKER','대리점'],
    ['온라인문의'],
    ['공지사항','자료실']
];

export default function Header() {
    // ▶ activeIdx를 null로 시작: 클릭 전엔 “선택 메뉴” 없음
    const [activeIdx, setActiveIdx] = useState(null);
    // ▶ hoverIdx 하나로 메인·서브 둘 다 처리
    const [hoverIdx,  setHoverIdx]  = useState(null);
    const [indicator, setIndicator] = useState({ left: 0, width: 0 });
    const menuRefs = useRef([]);

    // ▶ hover 또는 active 기준으로 언더라인 위치 갱신
    useEffect(() => {
        const idx = hoverIdx !== null ? hoverIdx : activeIdx;
        if (idx === null) return;
        const el = menuRefs.current[idx];
        if (!el) return;
        setIndicator({ left: el.offsetLeft, width: el.clientWidth });
    }, [activeIdx, hoverIdx]);

    // ▶ dropdown 오픈 여부는 hoverIdx만으로 판단
    const isOpen = hoverIdx !== null;

    return (
        <>
            <HeaderContainer>
                {/* — 로고 & 타이틀 */}
                <div style={{ width: 250, display: 'flex', alignItems: 'center' }}>
                    <img src="/logo.png" width={80} alt="logo" />
                    <span style={{ fontSize: 14, fontWeight: 700, marginLeft: 8 }}>
            (주)MANKU SOLUTION
          </span>
                </div>

                {/* — 메인 메뉴 */}
                <MenuColumnContainer
                    onMouseLeave={() => setHoverIdx(null)}
                >
                    {MENUS.map((label, i) => (
                        <MenuItem
                            key={label}
                            ref={el => (menuRefs.current[i] = el)}
                            // hover가 있으면 hoverIdx, 없으면 activeIdx
                            className={i === (hoverIdx ?? activeIdx) ? 'active' : ''}
                            onClick={() => setActiveIdx(i)}
                            onMouseEnter={() => setHoverIdx(i)}
                        >
                            {label}
                        </MenuItem>
                    ))}

                    {/* hoverIdx 또는 activeIdx가 있을 때만 */}
                    {(hoverIdx !== null || activeIdx !== null) && (
                        <Underline left={indicator.left} width={indicator.width} />
                    )}
                </MenuColumnContainer>

                {/* — 언어 토글 */}
                <div style={{ width: 250, textAlign: 'right' }}>
          <span style={{
              border: '1px solid lightgray',
              padding: '5px 12px',
              borderRadius: 20,
              fontSize: 13,
              fontWeight: 700,
              cursor: 'pointer'
          }}>
            <span style={{ color: '#ea6310' }}>KO</span> &nbsp;|&nbsp;
              <span>EN</span>
          </span>
                </div>
            </HeaderContainer>

            {/* — 서브메뉴 */}
            <Dropdown
                isOpen={isOpen}
                // dropdown 자체에서는 hoverIdx를 바꾸지 않음
                onMouseEnter={() => {}}
                onMouseLeave={() => setHoverIdx(null)}
            >
                <SubmenuWrapper>
                    {SUBMENU.map((col, colIdx) => (
                        <SubmenuColumn
                            key={colIdx}
                            onMouseEnter={() => setHoverIdx(colIdx)}
                            onMouseLeave={() => setHoverIdx(null)}
                        >
                            {col.map(item => (
                                <div key={item}>{item}</div>
                            ))}
                        </SubmenuColumn>
                    ))}
                </SubmenuWrapper>
            </Dropdown>
        </>
    );
}