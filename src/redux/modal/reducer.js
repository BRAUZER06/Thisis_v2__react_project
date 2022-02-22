const initState = {
  flagonChangeTrigger: null,
 

}

export function modalReducer(state = initState, action){
  
    
  switch(action.type){
    case 'ON_CLICK_MENU_TOGGLE':
      return{...state, flagonChangeTrigger : !state.flagonChangeTrigger}
     

      case 'CLOSE_MENU':
        return { ...state, flagonChangeTrigger: null}
      default:
        return state
  }
}
