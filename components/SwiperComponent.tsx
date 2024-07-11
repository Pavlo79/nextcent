import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Image from 'next/image';

import { Pagination } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="max-w-800 mx-auto"
        style={{
          '--swiper-pagination-color': 'var(--color-primary)',
          '--swiper-pagination-bullet-inactive-color': 'var(--color-primary)',
          '--swiper-pagination-bullet-inactive-opacity': '0.3',
        }}>
        <SwiperSlide>
          <div className='max-w-800 mx-4 sm:mx-auto flex flex-wrap justify-between mt-6 mb-12 sm:my-16'>
            <div className=''>
              <h1>Lessons and insights <br/> <span className='text-[var(--color-primary)]'>from 8 years</span></h1>
              <p className='mt-2.5'>Where to grow your business as a photographer: site or social media?</p>
              <a href='#'>
                <div className='mt-5 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-white inline-block hover:bg-[var(--color-shade-2)]'>
                  Register
                </div>
              </a>
            </div>
            <Image className='mt-4 sm:mt-0 mx-auto sm:mx-0' src='/Illustration.png' alt='illustration' width={272} height={283} />
          </div>
        </SwiperSlide>
       
        <SwiperSlide>
          <div className='max-w-800 mx-4 sm:mx-auto flex flex-wrap justify-between mt-6 mb-12 sm:my-16'>
            <div className=''>
              <h1>Lessons and insights <br/> <span className='text-[var(--color-primary)]'>from 8 years</span></h1>
              <p className='mt-2.5'>Where to grow your business as a photographer: site or social media?</p>
              <a href='#'>
                <div className='mt-5 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-white inline-block hover:bg-[var(--color-shade-2)]'>
                  Register
                </div>
              </a>
            </div>
            <Image className='mt-4 sm:mt-0 mx-auto sm:mx-0' src='/Illustration.png' alt='illustration' width={272} height={283} />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='max-w-800 mx-4 sm:mx-auto flex flex-wrap justify-between mt-6 mb-12 sm:my-16'>
            <div className=''>
              <h1>Lessons and insights <br/> <span className='text-[var(--color-primary)]'>from 8 years</span></h1>
              <p className='mt-2.5'>Where to grow your business as a photographer: site or social media?</p>
              <a href='#'>
                <div className='mt-5 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-white inline-block hover:bg-[var(--color-shade-2)]'>
                  Register
                </div>
              </a>
            </div>
            <Image className='mt-4 sm:mt-0  mx-auto sm:mx-0' src='/Illustration.png' alt='illustration' width={272} height={283} />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}