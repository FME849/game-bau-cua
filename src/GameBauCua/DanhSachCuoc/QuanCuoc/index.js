import React from 'react';
import { useDispatch } from 'react-redux';

export default function QuanCuoc(props) {
    const { ma, hinhAnh, diemDatCuoc } = props;
    const dispatch = useDispatch();
    return (
        <div className='my-2'>
            <div className='container'>
                <img src={hinhAnh} alt='' style={{ width: '100%' }} />
            </div>

            <div className='d-flex justify-content-center align-items-center mt-2'>
                <button className='btn btn-info' onClick={() => {
                    dispatch({
                        type: 'THAY_DOI_DIEM_DAT_CUOC',
                        payload: {
                            ma,
                            diem: -100
                        }
                    });
                }}>-</button>
                <div className='bg-light' style={{ padding: '6px 0' }}>
                    <span className='mx-3 d-inline-block'>{diemDatCuoc}</span>
                </div>
                <button className='btn btn-info' onClick={() => {
                    dispatch({
                        type: 'THAY_DOI_DIEM_DAT_CUOC',
                        payload: {
                            ma,
                            diem: 100
                        }
                    });
                }}>+</button>
            </div>
        </div>
    );
};
