import ScrollIndicator from "./ScrollIndicator";
import {useState} from "react";


export default function Sub5() {
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

            <div style={{fontSize: 45, fontWeight: 700, padding: 30}}>CONTACT US(기존 그대로인지)</div>

            <div style={{width : '80%',margin : '0px auto', paddingTop: 50}}>
                <div style={{fontSize : 30, fontWeight : 700}}>문의하시고자 하는 내용을 알려주세요</div>


                <div style={{textAlign :'right', paddingTop : 30}}><span style={{color: 'red'}}>*</span>필수항목입니다.</div>

                <div style={{borderBottom: '3px solid lightBlue', paddingTop : 10}}/>

                <div style={{display: 'grid', gridTemplateColumns: '200px auto', paddingTop : 20, alignItems : 'center'}}>
                    <div style={{fontSize : 18, fontWeight: 800}}>제목<span style={{color: 'red'}}>*</span></div>
                    <div style={{border: '2px solid lightGray', height : 25, width : '90%', padding : 5, borderRadius : 5}}><input type="text" style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none'
                    }}/></div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '200px auto', paddingTop : 20, alignItems : 'center'}}>
                    <div style={{fontSize : 18, fontWeight: 800}}>이름<span style={{color: 'red'}}>*</span></div>
                    <div style={{border: '2px solid lightGray', height : 25, width : '90%', padding : 5, borderRadius : 5}}><input type="text" style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none'
                    }}/></div>
                </div>
                <div style={{display: 'grid', gridTemplateColumns: '200px auto', alignItems : 'center', paddingTop : 20}}>
                    <div style={{fontSize : 18, fontWeight: 800}}>이메일주소<span style={{color: 'red'}}>*</span></div>
                    <div style={{border: '2px solid lightGray', height : 25, width : '90%', padding : 5, borderRadius : 5}}><input type="text" style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none'
                    }}/></div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '200px auto', alignItems : 'center', paddingTop : 20}}>
                    <div style={{fontSize : 18, fontWeight: 800}}>연락처<span style={{color: 'red'}}>*</span></div>
                    <div style={{border: '2px solid lightGray', height : 25, width : '90%', padding : 5, borderRadius : 5}}><input type="text" style={{
                        border: 'none',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none'
                    }}/></div>
                </div>

                <div style={{display: 'grid', gridTemplateColumns: '200px auto', alignItems : 'center', paddingTop : 20}}>
                    <div style={{fontSize : 18, fontWeight: 800}}>문의내용<span style={{color: 'red'}}>*</span></div>
                    <div style={{border: '2px solid lightGray',  width : '90%', padding : 5, borderRadius : 5}}><textarea  rows={10} type="text" style={{
                        border: 'none',
                        resize: 'none',
                        width: '100%',
                        height: '100%',
                        outline: 'none',
                        boxShadow: 'none'
                    }}/></div>
                </div>

            </div>


            <div style={{textAlign : 'center', paddingTop : 50}}>

                <span style={{border : '2px solid lightGray', padding : '15px 25px', borderRadius : 10}}>문의하기</span>
            </div>
        </div>
    );
}
