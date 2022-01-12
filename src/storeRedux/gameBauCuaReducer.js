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
            let mangXucXac = [];
            for (let i = 0; i < 3; i++) {
                mangXucXac[i] = state.danhSachQuanCuoc[Math.floor(Math.random() * 6)];
            }
            state.mangXucXac = mangXucXac;
            const datCuocArr = state.danhSachQuanCuoc.filter(quanCuoc => quanCuoc.diemDatCuoc !== 0); // lấy danh sách quân cược có diemDatCuoc != 0
            const ketQuaArr = datCuocArr.map(quanCuoc => {
                let diemHoanLai = 0;
                let diemThangCuoc = 0;
                state.mangXucXac.forEach(xucXac => {
                    if (xucXac.ma === quanCuoc.ma) {
                        // Nếu mã xúc xắc và mã quân cược trùng nhau lần đầu tiên
                        if (diemHoanLai === 0) {
                            diemHoanLai = quanCuoc.diemDatCuoc;
                        }
                        diemThangCuoc += quanCuoc.diemDatCuoc;
                    }
                })
                return [diemHoanLai, diemThangCuoc];
            });
            let tongDiemThangCuoc = 0;
            ketQuaArr.forEach(item => tongDiemThangCuoc += (item[0] + item[1])); // tính tổng điểm thắng cược = cách cộng tất cả các điểm lại
            state.tienThuong += tongDiemThangCuoc;
            state.danhSachQuanCuoc = initialState.danhSachQuanCuoc;  // reset các diemDatCuoc về 0   
            return { ...state }

        default:
            return { ...state }
    }
}

export default gameBauCuaReducer;