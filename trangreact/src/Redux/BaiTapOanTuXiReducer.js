const stateDefault = {
    banChon: "./img/imgGame1/Keo.png",
    mayChon: "./img/imgGame1/Keo.png",
    soBanThang: 0,
    soBanChoi: 0,
}
export const BaiTapOanTuXiReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'CHON': {
            state.banChon = action.banChon
            return { ...state }
        }
        case 'PLAY': {
            let soNN = Math.floor(Math.random() * 3);
           
            if (soNN === 1) { state.mayChon = "./img/imgGame1/Bua.png" }
            if (soNN === 2) { state.mayChon = "./img/imgGame1/Bao.png" }
            if (soNN === 0) { state.mayChon = "./img/imgGame1/Keo.png" }
            return {...state}
        }
        case 'END':{
            if ((state.banChon === "./img/imgGame1/Keo.png" && state.mayChon === "./img/imgGame1/Bao.png") || (state.banChon === "./img/imgGame1/Bua.png" && state.mayChon === "./img/imgGame1/Keo.png") || (state.banChon === "./img/imgGame1/Bao.png" && state.mayChon === "./img/imgGame1/Bua.png")) {
                state.soBanThang += 1
            }
            state.soBanChoi += 1

            return { ...state }
        }

        default: return state
    }
}