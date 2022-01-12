import React from 'react';
import '../../assets/GameBauCua.css';

export default function XucXac(props) {

    const { hinhAnh } = props.xucXacItem;

    return (
        <div className='col-6'>
            <div id="xucxac-component" className='mx-auto'>
                <div className="face front">
                    <img src={hinhAnh} alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="face back">
                    <img src='./img/ca.png' alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="face right">
                    <img src='./img/cua.png' alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="face left">
                    <img src='./img/ga.png' alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="face top">
                    <img src='./img/nai.png' alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
                <div className="face bottom">
                    <img src='./img/tom.png' alt='' style={{ width: '100%', objectFit: 'cover' }} />
                </div>
            </div>

        </div>
    )
}
