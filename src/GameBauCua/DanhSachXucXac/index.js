import React from 'react';
import XucXac from './XucXac';
import { useSelector, useDispatch } from 'react-redux';

export default function DanhSachXucXac(props) {

    const mangXucXac = useSelector(state => state.gameBauCuaReducer.mangXucXac)

    const dispatch = useDispatch();

    return (
        <div className='py-3' >
            <div className='bg-white mx-auto' style={{
                width: 400,
                height: 400,
                borderRadius: '50%',
                position: 'relative'
            }}>
                <div className='row justify-content-center align-items-center' style={{
                    height: '50%',
                    width: '50%',
                    margin: 0,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)'
                }}>
                    <XucXac xucXacItem={mangXucXac[0]} />
                    <XucXac xucXacItem={mangXucXac[1]} />
                    <XucXac xucXacItem={mangXucXac[2]} />
                </div>
            </div>
            <div className='container text-center mt-3'>
                <button
                    onClick={() => {
                        dispatch({
                            type: 'XOC_DIA'
                        })
                    }}
                    style={{
                        padding: 0,
                        border: 'none',
                        backgroundColor: 'transparent'
                    }}>
                    <img src='./img/soc.png' alt='' style={{
                        width: '150px'
                    }} />
                </button>
            </div>
        </div>
    )
}
