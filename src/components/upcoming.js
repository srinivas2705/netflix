import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUpcoming } from '../redux/slice/upcomingSlice';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { imgUrl} from '../apiKeys';
import axios from 'axios';
import "../styles/upcoming.css";

export default function Upcoming() {

    const upcomings = useSelector((state) => state.upcoming);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchUpcoming());
    }, [])

    console.log(upcomings);

    

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow:4,
        slidesToScroll:3
    }


    return (
        <>
        <div className='Upcoming'>
            <h1>Upcoming</h1>
        <Slider {...settings}>
            {upcomings.value !=0 && upcomings.value.results.map(e => {
                return (
                    <div className='upcomingimages'>
                        <div className='upcominginside'>
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
