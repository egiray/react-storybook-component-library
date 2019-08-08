import React from 'react'

const Container = props => {
  return (
    <div style={style}>
      {props.children}
    </div>
  )
}

const style = {
  display: "flex",
  flexWrap : "wrap"
}



export default Container
