import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
// below i am creating for images importing only
import Image from "../images/sandan.jpg"
import ImageRajgad from "../images/Rajgad_Gallery6SP.jpg"
import ImagesRafting from "../images/Rafting.jpg"
import ImageCamping from "../images/Camping.jpg"
import ImageBikeriding from "../images/Bikeriding.jpg"
// import Image from "../images/Rajgad_Gallery6SP.jpg"

function Cards() {
  
  return (
  
    <div className='container'>
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards_container'>
        <div className='cards_wrapper'>
          <ul className='cards_items'>
            <CardItem
              src={Image}
              text='Sandhan Valley: Valley of Shadows'
              label='Rs: 1000'
              path='/Info_sadan'
            />
            <CardItem
              // src='/images/Rajgad_Gallery6SP.jpg'
              src = {ImageRajgad}
              text='Raigad: When you are enthusiastic, the mountain also looks like a clay pile'
              label='Rs: 1200'
              path='/Info_raigad'
              
            />

          </ul>
          <ul className='cards_items'>
            <CardItem
              // src='/images/Bikeriding.jpg'
              src = {ImageBikeriding}
      
              text='The land of high passes and white land LADAKH'
              label='coming soon'
              path='/services'
            />
            <CardItem
              // src='images/Camping.jpg'
              src = {ImageCamping}
          
              text='Get Ready for green grass, warm days and campfire nights'
              label='coming soon'
              path='/products'
              
              
            />
            <CardItem
              // src='/images/Rafting.jpg'
              src = {ImagesRafting}
              text='Life is either daring advanture or nothing at all #Rafting'
              label='coming soon'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Cards;


