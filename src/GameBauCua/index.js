import React from 'react';
import './assets/GameBauCua.css';
import DiemCuoc from './DiemCuoc';
import DanhSachCuoc from './DanhSachCuoc';
import DanhSachXucXac from './DanhSachXucXac';

export default function GameBauCua(props) {
    return (
        <div id='main'>
            <DiemCuoc />

            <div className='mx-5 px-5 py-3'>
                <div className='row'>
                    <div className='col-7'>
                        <DanhSachCuoc />
                    </div>
                    <div className='col-5'>
                        <DanhSachXucXac />
                    </div>
                </div>
            </div>
        </div>
    )
}
