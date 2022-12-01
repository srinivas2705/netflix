import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopular } from '../redux/slice/popularSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgUrl} from '../apiKeys';
import axios from 'axios';
import "../styles/popular.css";


export default function Popular() {

    const populars = useSelector((state) => state.popular);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopular());
    }, [])

    console.log(populars);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:3
    }


    return (
        <>
        <div className='Popular'>
            <h1>Popular</h1>
        <Slider {...settings}>
            {populars.value !=0 && populars.value.results.map(e => {
                return (
                    <div className='popularimages'>
                        <div className='popularinside'>
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
