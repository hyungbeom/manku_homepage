import React from 'react';


const sectionList = ['MAIN', 'SUB1', 'SUB2', 'SUB3', 'SUB4']

export default function Observer({currentPage, pageCount, onDotClick}) {
    return (
        <div
            style={{
                position: 'fixed',
                top: '50%',
                right: '150px',
                transform: 'translateY(-50%)',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                zIndex: 1000,
                cursor: 'pointer',

            }}
        >
            {Array.from({length: pageCount}).map((_, i) => (
                <div style={{
                    fontSize: 10,
                    lineHeight: 1,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    opacity : currentPage === i ? 1 : 0.1
                }}>
                    <div onClick={() => onDotClick(i)} style={{
                        backgroundColor: 'lightgray',  // gray(128,128,128)에 alpha=0.5
                        padding: '5px 8px',
                        borderRadius: 20,
                        color: 'black',
                        fontWeight : 800
                    }}>
                        {sectionList[i]}
                    </div>
                    <span onClick={() => onDotClick(i)}
                          style={{cursor: 'pointer', color : 'white'}}>
    {currentPage === i ? '●' : '○'}
  </span>
                </div>
            ))}
        </div>
    );
}