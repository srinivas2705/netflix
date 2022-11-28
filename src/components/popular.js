import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../redux/slice/popularSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgUrl} from '../apiKeys';
import axios from 'axios';


export default function Popular() {

    const populars = useSelector((state) => state.populars);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopular());
    }, [])

    console.log(populars);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }


    return (
        <>
        <div className='Popular'>
            <h1>Popular</h1>
        <Slider {...settings}>
            {populars.value && populars.value.results.map(e => {
                return (
                    <div>
                        <img src={imgUrl + "original" + e.backdrop_path}></img>
                        <h1 className='title'>{e.title}</h1>
                    </div>
                )
            })}
        </Slider>
        </div>
        </>
    );
}
