import React from 'react'
import './Card.css'
import styled from 'styled-components'

const Card = props => {
  const {title, assetList}  = props;
  const thumb = (assetList !== undefined && assetList.length > 0) ? assetList.pop().name : ""
  
  const Image = styled.img`
    width: 210px;
    height: 210px;
  `

  return (
    <div onClick={()=>props.gameChange(props)} className="cardContainer">
      
      <Image src={thumb} alt=""/>
      <span>{title}</span>
    </div>
  )
}

export default Card
