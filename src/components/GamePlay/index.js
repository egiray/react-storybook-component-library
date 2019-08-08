import React from 'react';


const GamePlay = props => {
  return (
    <>
      <div>{props.title}</div>
      <iframe title={props.title} width={props.width} height={props.height} src={props.url}/>
    </>
    
  )
}

GamePlay.propTypes = {

}

export default GamePlay
