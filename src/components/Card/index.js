import React from 'react'
import './Card.css'

const Card = props => {
  const {title, assetList}  = props;
  const thumb = (assetList !== undefined && assetList.length > 0) ? assetList.pop().name : ""
  
  return (
    <div onClick={()=>props.gameChange(props)}>
      <span>{title}</span>
      <img src={thumb} alt="" style={cardStyles.image}/>
    </div>
  )
}

const cardStyles = {
  image: {
    width: 200,
    height: 200
  }
}

export default Card