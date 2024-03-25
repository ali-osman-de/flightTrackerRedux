import React, { useEffect } from 'react';
import { MDBTypography } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '../../actions/fetchNews';
import { Carousel } from 'antd';


function NewsComponent() {
    const news = useSelector(state => state.news);
    const carNews = news?.news?.articles;
    const dispatch = useDispatch();
    // console.log(news)
    const contentStyle = {
        height: '300px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };

    useEffect(() => {
        dispatch(fetchNews());
    }, []);

    // console.log(carNews)

    return (
        <>
            <MDBTypography tag='div' className='display-4 mt-5 text-center'>
                News
            </MDBTypography>

            <div className='p-5 my-3'>
                <Carousel effect="fade" autoplay>
                    {carNews?.map((item, index) => (
                        <div key={index}>
                            <h3 style={contentStyle}>
                                <img
                                    src={item.urlToImage}
                                    className='d-block w-100'
                                    alt='image'
                                />
                            </h3>
                            <div>
                                <h5 className='text-light text-center'>{item.title}</h5>
                                <p className='text-light text-center'>{item.description}</p>
                            </div>

                        </div>
                    ))}
                </Carousel >
            </div >
        </>
    );
}

export default NewsComponent;
