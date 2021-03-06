import React, { useState, useEffect } from 'react'
import Card from '../Card'
import axios from 'axios'
import cardData from './List.data.json'
import './List.css'
import Container from '../Container'

const List = props => {
  const [listItems, setListItems] = useState(cardData)

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://catalog.api.gamedistribution.com/api/v1.0/rss/All/?collection=best&categories=${props.category}&type=all&amount=24&page=1&format=json`);
      const data = result.data
      if(data !== undefined && data.length)
        setListItems(result.data);
    };

    fetchData();
    console.log("listItems")
  }, [props.category]);

  return (
    <Container className="Gallery">
      {(listItems.length > 0) ? listItems.map(item => <Card key={item.url} {...item} gameChange={props.gameChange} />) : 'empty'}
    </Container>
  )
}

export default List
