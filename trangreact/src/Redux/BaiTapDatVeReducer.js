const stateDefault=[]
export const BaiTapDatVeReducer =(state=stateDefault,action)=>{
    switch (action.type){
        case 'CHON':{
            let index=state.findIndex(item=>item.soGhe===action.ghe.soGhe);
            if(index!==-1){
                state.splice(index,1)
            }else{
                state.push(action.ghe)
            }
            return [...state]
        }
        default: return [...state]
    }
}