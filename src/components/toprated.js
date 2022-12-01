import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchToprated } from '../redux/slice/topratedSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgUrl} from '../apiKeys';
import axios from 'axios';
import "../styles/toprated.css";


export default function Toprated() {

    const toprateds = useSelector((state) => state.toprated);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchToprated());
    }, [])

    console.log(toprateds);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:3
    }


    return (
        <>
        <div className='Toprated'>
            <h1>Top Rated</h1>
        <Slider {...settings}>
            {toprateds.value !=0 && toprateds.value.results.map(e => {
                return (
                    <div className='topratedimages'>
                    <div className='topratedinside'>
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
