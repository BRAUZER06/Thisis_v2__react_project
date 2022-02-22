export const reg_AutoValueInput=(value, name)=>{
  return{
    type: 'REG_AUTO_VALUE_INPUT',
    payload:{
      value, 
      name
    }
    
  }
}