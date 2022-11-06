import React from 'react'

export default function Alert(props) {

  const capitalized= (Word)=>{
    const lower = Word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);


  }
  return (
        <div style={{height:'60px'}}>
            { props.alert&&<div className={`alert alert-${props.alert.typ} alert-dismissible fade show`} role="alert">
        <strong>{capitalized(props.alert.typ)}</strong> : {props.alert.msg}
        </div>}

      </div>
  )
  }
