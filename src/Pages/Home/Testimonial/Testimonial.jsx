import { useEffect, useState } from "react";
import HeadingTitle from "../../../component/HeadingTitle/HeadingTitle";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules\
import { Navigation } from 'swiper/modules';


import '@smastrom/react-rating/style.css'
import { Rating } from "@smastrom/react-rating";


const Testimonial = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <section className="my-16">
            <HeadingTitle
                heading="TESTIMONIALS"
                subHeading="What Our Clients Say"
            ></HeadingTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center px-20 text-center">
                            <Rating style={{ maxWidth: 180 }} value={review.rating} readOnly />
                            <p>{review.details}</p>
                            <h3 className="text-[#CD9003] text-3xl mt-1">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonial;