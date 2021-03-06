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
    ],
    dangQuay: false,
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
            const datCuocArr = state.danhSachQuanCuoc.filter(quanCuoc => quanCuoc.diemDatCuoc !== 0); // l???y danh s??ch qu??n c?????c c?? diemDatCuoc != 0
            const ketQuaArr = datCuocArr.map(quanCuoc => {
                let diemHoanLai = 0;
                let diemThangCuoc = 0;
                state.mangXucXac.forEach(xucXac => {
                    if (xucXac.ma === quanCuoc.ma) {
                        // N???u m?? x??c x???c v?? m?? qu??n c?????c tr??ng nhau l???n ?????u ti??n
                        if (diemHoanLai === 0) {
                            diemHoanLai = quanCuoc.diemDatCuoc;
                        }
                        diemThangCuoc += quanCuoc.diemDatCuoc;
                    }
                })
                return [diemHoanLai, diemThangCuoc];
            });
            let tongDiemThangCuoc = 0;
            ketQuaArr.forEach(item => tongDiemThangCuoc += (item[0] + item[1])); // t??nh t???ng ??i???m th???ng c?????c = c??ch c???ng t???t c??? c??c ??i???m l???i
            state.tienThuong += tongDiemThangCuoc;
            state.danhSachQuanCuoc = initialState.danhSachQuanCuoc;  // reset c??c diemDatCuoc v??? 0   
            return { ...state }

        default:
            return { ...state }
    }
}

export default gameBauCuaReducer;