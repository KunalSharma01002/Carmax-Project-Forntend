export const SHOW_MODAL="SHOW_MODAL"
export const HIDE_MODAL="HIDE_MODAL"

export const showMODAL=(msg)=>{
    
    
    return {type:SHOW_MODAL, payload:{msg}}}
export const hideMODAL=()=>{return {type:HIDE_MODAL}}