const initialState = {
    danhSachQuanCuoc: [
        {
            ma: 'bau',
            hinhAnh: './img/bau.png',
            diemDatCuoc: 0,
        },
        {
            ma: 'ca',
            hinhAnh: './img/ca.png',
            diemDatCuoc: 0,
        },
        {
            ma: 'cua',
            hinhAnh: './img/cua.png',
            diemDatCuoc: 0,
        },
        {
            ma: 'ga',
            hinhAnh: './img/ga.png',
            diemDatCuoc: 0,
        },
        {
            ma: 'nai',
            hinhAnh: './img/nai.png',
            diemDatCuoc: 0,
        },
        {
            ma: 'tom',
            hinhAnh: './img/tom.png',
            diemDatCuoc: 0,
        },
    ],
    tienThuong: 1000,
    mangXucXac: [
        {
            ma: 'bau',
            hinhAnh: './img/bau.png',
        },
        {
            ma: 'ca',
            hinhAnh: './img/ca.png',
        },
        {
            ma: 'cua',
            hinhAnh: './img/cua.png',
        },
    ]
}

const gameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'THAY_DOI_DIEM_DAT_CUOC':
            // console.log(action.payload.ma, action.payload.diem)
            let danhSachQuanCuoc = [...state.danhSachQuanCuoc];
            const index = danhSachQuanCuoc.findIndex(item => item.ma === action.payload.ma);
            if (danhSachQuanCuoc[index].diemDatCuoc === 0 && action.payload.diem < 0) {
                return { ...state }
            } else if (state.tienThuong <= 0 && action.payload.diem > 0) {
                return { ...state }
            }
            const diemNew = danhSachQuanCuoc[index].diemDatCuoc + action.payload.diem;
            state.tienThuong -= action.payload.diem;
            danhSachQuanCuoc[index] = { ...danhSachQuanCuoc[index], diemDatCuoc: diemNew }
            state.danhSachQuanCuoc = danhSachQuanCuoc;
            return { ...state }

        case 'CHOI_LAI':
            state = initialState;
            return { ...state }

        case 'XOC_DIA':
            let mangXucXacIndex = [];
            console.log(action.type)
            for (let i = 0; i < 3; i++) {
                mangXucXacIndex[i] = Math.floor(Math.random() * state.danhSachQuanCuoc.length);
            }
            const mangXucXac = mangXucXacIndex.map((indexItem) => {
                return state.danhSachQuanCuoc[indexItem];
            })
            state.mangXucXac = mangXucXac;
            return { ...state }

        default:
            return { ...state }
    }
}

export default gameBauCuaReducer;