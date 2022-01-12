import React from 'react'
import QuanCuoc from './QuanCuoc';
// import { connect } from 'react-redux';
import { useSelector } from 'react-redux';

export default function DanhSachCuoc(props) {
    const danhSachQuanCuoc = useSelector(state => state.gameBauCuaReducer.danhSachQuanCuoc)

    const renderQuanCuoc = () => {
        return danhSachQuanCuoc.map((quanCuoc, index) => {
            return (
                <div className='col-4' key={index}>
                    <QuanCuoc ma={quanCuoc.ma} hinhAnh={quanCuoc.hinhAnh} diemDatCuoc={quanCuoc.diemDatCuoc} />
                </div>
            )
        })
    }

    return (
        <div>
            <div className='row'>
                {renderQuanCuoc()}
            </div>
        </div>
    )
}