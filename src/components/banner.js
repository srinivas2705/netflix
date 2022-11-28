import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Carousel } from 'antd';
import { fetchBanners } from '../redux/slice/bannerSlice';
import { baseUrl } from '../apiKeys';
import { imgUrl } from "../apiKeys";
import "../styles/banner.css";
import { PlayCircleOutlined, InfoCircleOutlined } from '@ant-design/icons';

export default function Banner() {
  const banners = useSelector((state) => state.banner);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBanners());
  }, [])
  console.log(banners);

  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel afterChange={onChange} autoplay>
      {banners.value.results && banners.value.results.map(e => {
        return (
          <div className='carousel'>
            <img src={imgUrl + "original" + e.backdrop_path}></img>
            <h1 className='title'>{e.title}</h1>
            <h3 className='language'>{e.original_language}</h3>
            <p className='overview'>{e.overview}</p>
            <p className='buttons'><button className='button1'> <PlayCircleOutlined /> Play</button> 
            <button className='button2'>More Info <InfoCircleOutlined /></button></p>

          </div>
        )
      })}
    </Carousel>
  )
}
