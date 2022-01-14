import React from 'react';
import '../../assets/GameBauCua.css';
import { useSpring, animated } from 'react-spring';

export default function XucXac(props) {

    const { hinhAnh } = props.xucXacItem;

    const quayXucXac = useSpring({
        to: { rotate3d: 'rotate3d(1, 1, 1, 720deg)' },
        from: { rotate3d: 'rotate3d(180, 90, 90, 0deg)' },
        config: {
            duration: 500,
        },
        reset: true
    })

    return (
        <div className='col-6'>
            <animated.div id="xucxac-component" className='mx-auto' style={{
                transform: quayXucXac.rotate3d
            }}>
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
            </animated.div>

        </div>
    )
}
