import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function DiemCuoc(props) {
    const tienThuong = useSelector(state => state.gameBauCuaReducer.tienThuong)
    const dispatch = useDispatch();
    const gameReset = () => {
        dispatch({
            type: 'CHOI_LAI'
        })
    }
    return (
        <div>
            <h3 className='text-center display-4 py-3' style={{ color: 'green' }}>
                BẦU CUA CYBERLEARN
            </h3>
            <div className='text-center mt-4'>
                <span className='p-3 bg-danger text-light' style={{ fontSize: '30px', borderRadius: '10px' }}>Tiền thưởng: <span className='text-warning'>$ {tienThuong.toLocaleString()}</span></span>
            </div>
            <div className='text-center mt-5'>
                <button
                    className='btn p-2 bg-success text-light'
                    onClick={gameReset}
                    style={{
                        fontSize: '25px',
                        borderRadius: '10px',
                        border: 'none'
                    }}>Chơi lại</button>
            </div>
        </div>
    )
};
