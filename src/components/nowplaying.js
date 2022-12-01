import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNowplaying } from '../redux/slice/nowplayingSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgUrl} from '../apiKeys';
import axios from 'axios';
import "../styles/nowplaying.css";


export default function Nowplaying() {

    const nowplayings = useSelector((state) => state.nowplaying);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchNowplaying());
    }, [])

    console.log(nowplayings);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:3
    }


    return (
        <>
        <div className='Nowplaying'>
            <h1>Now Playing</h1>
        <Slider {...settings}>
            {nowplayings.value !=0 && nowplayings.value.results.map(e => {
                return (
                    <div className='nowplayingimages'>
                        <div className='nowplayinginside'>
                        <img style={{maxHeight: "200px"}} src={imgUrl + "w500" + e.backdrop_path}></img>
                        <h3>{e.title}</h3>
                        </div>
                    </div>
                )
            })}
        </Slider>
        </div>
        </>
    );
}
