// 예: React 컴포넌트에서 사용
import styled, {keyframes} from 'styled-components';

export const HeaderContainer = styled.div`
    position: fixed;       /* 화면 최상단에 고정 */
    top: 0;
    left: 0;
    width: 100vw;          /* 가로 꽉 채우기 */
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    font-size: 15px;
    z-index: 1000;         /* 다른 콘텐츠 위로 */
`;

export const MenuColumnContainer = styled.nav`
    position: relative;
    display: flex;
    position: relative;
    justify-content: center;  /* 메뉴 그룹을 컨테이너 가운데로 정렬 */
    align-items: center;      /* 높이 방향 중앙 정렬 */
    height : 80px;
   
    
    & > div {
        height: 100%;
        width: 130px;           /* 고정 너비 */
        line-height: 80px;
        text-align: center;     /* 텍스트 중앙 정렬 */
        
        cursor: pointer;        /* 클릭 가능한 커서 */
    }

    & > div:hover {
        color: #61dafb;
    }
`;


export const MenuItem = styled.div`
  position: relative;
  //padding: 10px 15px;
  cursor: pointer;
  &.active { font-weight: bold; }
`;
export const Underline = styled.div`
   position: absolute;
   bottom: 0;               /* 컨테이너 바닥에 딱 붙이기 */
    transition: left 0.25s ease, width 0.25s ease;
    
    left: ${({ left }) => left}px;
    width: ${({ width }) => width}px;
    border-bottom: 2px solid #61dafb;
    pointer-events: none;
`;



export const Dropdown = styled.div`
    position: absolute;
    top: 80px;
    left: 0;
    width: 100vw;
    border-top: 0.3px solid #dcdcdc ;
    overflow: hidden;
    background-color: white;
    z-index: 10;
    
    /* false일 땐 0, true일 땐 최종 높이 (200px) */
    max-height: ${({ isOpen }) => (isOpen ? '200px' : '0')};
    transition: max-height 0.3s ease-out;
`;

export const SubmenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  text-align: center;
  padding-top: 20px;
`;

export const SubmenuColumn = styled.div`
  width: 130px;
  height: 150px;
  font-size: 14px;
  cursor: pointer;

  & > div {
    padding: 13px 0;

    &:hover {
      color: #61dafb;      /* 원하는 호버 컬러 */
      transition: color 0.2s;
    }
  }
`;