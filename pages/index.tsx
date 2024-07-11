import React from 'react';
import Image from 'next/image';
import SwiperComponent from '../components/SwiperComponent';

const Home: React.FC = () => {
  return (
    <div className='bg-white'>
      <header className='shadow'>
        <div className='max-w-800 py-3 flex justify-between items-center mx-4 sm:mx-auto'>
          <Image src='/logo.png' alt='Logo' width={107} height={17}/>
          <div className='flex font-medium items-center'>
            <a className='mr-9 hidden sm:block' href='#'><p>Home</p></a>
            <a className='mr-4 hidden sm:block' href='#'><p>Features</p></a>
            <a className='mr-4 hidden sm:block' href='#'><p>Community</p></a>
            <a className='mr-4 hidden sm:block' href='#'><p>Blog</p></a>
            <a className='mr-4 hidden sm:block' href='#'><p>Pricing</p></a>
            <a href='#'>
              <div className='px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-center flex items-center text-white hover:bg-[var(--color-shade-2)]'>
                Register Now
                <Image className='ml-1.5' src='/arrow-left.svg' alt='arrow' width={8} height={4}/>
              </div>
            </a>
          </div>
        </div>
      </header>
      <div className='bg-[var(--color-silver)] w-full'>
        <SwiperComponent />
      </div>

      <section className='max-w-800 pt-7 pb-8 mx-4 sm:mx-auto flex flex-col items-center'>
        <h2>Our Clients</h2>
        <p className='mt-1.5'>We have been working with some Fortune 500+ clients</p>
        <div className='flex justify-between mt-7 w-full'>
          <Image src='/logo1.png' alt='logo1' width={33.4} height={33.4}/>
          <Image src='/logo2.png' alt='logo2' width={33.4} height={33.4}/>
          <Image src='/logo3.png' alt='logo3' width={33.4} height={33.4}/>
          <Image src='/logo4.png' alt='logo4' width={33.4} height={33.4}/>
          <Image src='/logo5.png' alt='logo5' width={33.4} height={33.4}/>
          <Image src='/logo6.png' alt='logo6' width={33.4} height={33.4}/>
          <Image src='/logo3.png' alt='logo7' width={33.4} height={33.4}/>
        </div>

        <h2 className='mt-7 text-center'>Manage your entire community in a single system</h2>
        <p className='mt-1.5 text-center'>Who is Nextcent suitable for?</p>

        <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-20 mt-3'>
          <div className='w-64 sm:w-52 rounded-md shadow-sm py-4 flex flex-col items-center text-center'>
            <Image src='/icon-member-ship.png' alt='icon1' width={45} height={39}/>
            <h3 className='mt-2.5'>Membership Organisations</h3>
            <p className='mt-1.5'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='w-64 sm:w-52 rounded-md shadow-sm py-4 flex flex-col items-center text-center'>
            <Image src='/icon-national.png' alt='icon2' width={45} height={39}/>
            <h3 className='mt-2.5'>National Associations</h3>
            <p className='mt-1.5'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
          <div className='w-64 sm:w-52 rounded-md shadow-sm py-4 flex flex-col items-center text-center'>
            <Image src='/icon-club-and-group.png' alt='icon3' width={45} height={39}/>
            <h3 className='mt-2.5'>Clubs And Groups</h3>
            <p className='mt-1.5'>Our membership management software provides full automation of membership renewals and payments</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-around items-center mt-7 w-full'>
          <Image src='/login-interface-illustration1.png' alt='login-interface-illustration1' width={307} height={301}/>
          <div className='sm:w-1/2 flex flex-col items-center sm:items-start'>
            <h2>The unseen of spending three years at Pixelgrade</h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <a href='#'>
              <div className='mt-5 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-white inline-block hover:bg-[var(--color-shade-2)]'>
                Learn More
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className='bg-[var(--color-silver)]'>
        <div className='max-w-800 mx-auto flex flex-wrap justify-between py-11'>
          <div className='sm:w-5/12 my-auto mx-4 sm:mx-0'>
            <h2>Helping a local <br/><span className='text-[var(--color-primary)]'>business reinvent itself</span></h2>
            <p className='mt-1.5'>We reached here with our hard work and dedication</p>
          </div>
          <div className='grid grid-cols-2 mt-4 sm:mt-0 w-full sm:w-5/12 mx-4 sm:mx-0'>
            <div className='flex items-center'>
              <Image className='mr-3' src='/icon-member.png' alt='icon1' width={33.41} height={33.41}/>
              <div>
                <h3>2,245,341</h3>
                <p>Members</p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image className='mr-3' src='/icon-club.png' alt='icon2' width={33.41} height={33.41}/>
              <div>
                <h3>46,328</h3>
                <p>Clubs</p>
              </div>
            </div>
            <div className='flex items-center mt-7'>
              <Image className='mr-3' src='/icon-event-booking.png' alt='icon3' width={33.41} height={33.41}/>
              <div>
                <h3>828,867</h3>
                <p>Event Bookings</p>
              </div>
            </div>
            <div className='flex items-center mt-7'>
              <Image className='mr-3' src='/icon-payments.png' alt='icon4' width={33.41} height={33.41}/>
              <div>
                <h3>1,926,436</h3>
                <p>Payments</p>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className='max-w-800 mx-auto py-8'>
        <div className='mx-4 sm:mx-auto flex flex-wrap justify-around items-center'>
          <Image src='/login-interface-illustration2.png' alt='login-interface-illustration2' width={307} height={301}/>
          <div className='mt-6 sm:mt-0 sm:w-1/2 flex flex-col items-center sm:items-start'>
            <h2>How to design your site footer like we did</h2>
            <p className='mt-3'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <a href='#'>
              <div className='mt-5 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-white inline-block hover:bg-[var(--color-shade-2)]'>
                Learn More
              </div>
            </a>
          </div>
        </div>
      </section>

      <section className='w-full bg-[var(--color-silver)]'>
        <div className='max-w-800 mx-4 sm:mx-auto py-6 flex flex-wrap sm:flex-nowrap justify-between'>
          <Image className='shadow-md rounded-md sm:mr-12 mx-auto sm:mx-0' src='/image1.jpg' alt='image1' width={227} height={227}/>
          <div className='mt-6 sm:mt-0'>
            <p className='font-medium'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
            <p className='text-sm font-semibold text-[var(--color-primary)] mt-3'>Tim Smith</p>
            <p className='mt-1.5'>British Dragon Boat Racing Association</p>
            <div className='flex flex-col sm:flex-row mt-7'>
              <div className='flex justify-between w-full sm:mr-6'>
                <Image src='/logo7.png' alt='logo1' width={33.4} height={33.4}/>
                <Image src='/logo2.png' alt='logo2' width={33.4} height={33.4}/>
                <Image src='/logo3.png' alt='logo3' width={33.4} height={33.4}/>
                <Image src='/logo4.png' alt='logo4' width={33.4} height={33.4}/>
                <Image src='/logo5.png' alt='logo5' width={33.4} height={33.4}/>
              </div>
              <div className='flex items-center text-[var(--color-primary)] whitespace-nowrap'>
                Meet all customers
                <div className='ml-1.5'>
                  <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.52569 5.4707L8.2448 3.7516C8.44868 3.54772 8.44868 3.21716 8.2448 3.01328L6.52569 1.29418M8.09189 3.38244L0.434936 3.38244" stroke="currentColor" stroke-width="0.765676" stroke-linecap="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='max-w-800 mx-4 sm:mx-auto pt-8 pb-16 text-center'>
          <h2>Caring is the new marketing</h2>
          <p className='mt-1.5  max-w-[430px] mx-auto'>The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​</p>
          <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mt-3'>
            <div>
              <Image className='rounded-md w-full' src='/image2.jpg' alt='image2' width={256} height={200}/>
              <div className='shadow-md rounded-md p-3 inline-block mx-4 text-center relative mt-[-68px] bg-white'>
                <p className='text-sm'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href='#'>
                  <div className='flex items-center text-[var(--color-primary)] mx-auto justify-center mt-3'>
                    Readmore
                    <div className='ml-1.5'>
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.52569 5.4707L8.2448 3.7516C8.44868 3.54772 8.44868 3.21716 8.2448 3.01328L6.52569 1.29418M8.09189 3.38244L0.434936 3.38244" stroke="currentColor" stroke-width="0.765676" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <Image className='rounded-md w-full' src='/image3.jpg' alt='image3' width={256} height={200}/>
              <div className='shadow-md rounded-md p-3 inline-block mx-4 text-center relative mt-[-68px] bg-white'>
                <p className='text-sm'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href='#'>
                  <div className='flex items-center text-[var(--color-primary)] mx-auto justify-center mt-3'>
                    Readmore
                    <div className='ml-1.5'>
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.52569 5.4707L8.2448 3.7516C8.44868 3.54772 8.44868 3.21716 8.2448 3.01328L6.52569 1.29418M8.09189 3.38244L0.434936 3.38244" stroke="currentColor" stroke-width="0.765676" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <Image className='rounded-md w-full' src='/image4.jpg' alt='image4' width={256} height={200}/>
              <div className='shadow-md rounded-md p-3 inline-block mx-4 text-center relative mt-[-68px] bg-white'>
                <p className='text-sm'>Creating Streamlined Safeguarding Processes with OneRen</p>
                <a href='#'>
                  <div className='flex items-center text-[var(--color-primary)] mx-auto justify-center mt-3'>
                    Readmore
                    <div className='ml-1.5'>
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.52569 5.4707L8.2448 3.7516C8.44868 3.54772 8.44868 3.21716 8.2448 3.01328L6.52569 1.29418M8.09189 3.38244L0.434936 3.38244" stroke="currentColor" stroke-width="0.765676" stroke-linecap="round"/>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className='w-full bg-[var(--color-silver)]'>
        <div className='max-w-800 mx-4 sm:mx-auto py-6 text-center'>
          <h1>Pellentesque suscipit <br/> fringilla libero eu.</h1>
          <a href='#' className='flex justify-center'>
            <div className='mt-6 px-6 py-2.5 rounded-sm bg-[var(--color-primary)] text-center flex items-center text-white hover:bg-[var(--color-shade-2)]'>
              Get a Demo
              <Image className='ml-1.5' src='/arrow-left.svg' alt='arrow' width={8} height={4}/>
            </div>
          </a>
        </div>
      </section>

      <footer className='w-full bg-[var(--color-black)]'>
        <div className='max-w-800 mx-4 sm:mx-auto pt-11 pb-14 flex flex-wrap justify-between'>
          <div className='mx-auto sm:mx-0 mb-6 sm:mb-0'>
            <Image src='/logo-white.png' alt='logo' width={133} height={21}/>
            <div className='hidden sm:block'>
              <p className='mt-7 text-[var(--color-silver)]'>Copyright © 2020 Landify UI Kit.</p>
              <p className='mt-1.5 text-[var(--color-silver)]'>All rights reserved</p>
            </div>
            <div className='hidden sm:block'>
              <div className='mx-auto sm:mx-0 mt-3 sm:mt-7 flex'>
                <a href='#'><Image className='mr-3' src='/instagram.png' alt='inst' width={23} height={23}/></a>
                <a href='#'><Image className='mr-3' src='/web-site.png' alt='site' width={23} height={23}/></a>
                <a href='#'><Image className='mr-3' src='/twitter.png' alt='twitter' width={23} height={23}/></a>
                <a href='#'><Image src='/youtube.png' alt='yotube' width={23} height={23}/></a>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className='w-[110px]'>
              <p className='font-semibold text-sm text-[var(--color-white)]'>Company</p>
              <a href='#'><p className='mt-4 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>About us</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Blog</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Contact us</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Pricing</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Testimonials</p></a>
            </div>
            <div className='w-[110px]'>
              <p className='font-semibold text-sm text-[var(--color-white)]'>Support</p>
              <a href='#'><p className='mt-4 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Help center</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Terms of service</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Legal</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Privacy policy</p></a>
              <a href='#'><p className='mt-2 text-[var(--color-silver)] hover:text-[var(--color-grey-blue)]'>Status</p></a>
            </div>
            <div className='w-177px]'>
              <p className='font-semibold text-sm text-[var(--color-white)]'>Stay up to date</p>
              <div className='mt-4 flex justify-between rounded-sm bg-[#40494d] text-[#D9DBE1] text-[10px] items-center'>
                <input 
                  className='py-1.5 px-2 bg-[#40494d] rounded-l-sm' 
                  placeholder='Your email address' 
                  type="email" 
                  id="email" 
                  pattern=".+@example\.com" 
                  required 
                />
                <Image className='mr-2' src='/send.png' alt='send' width={11} height={11} />
              </div>
              <div className='sm:hidden mx-auto sm:mx-0 mt-3 sm:mt-7 flex'>
                <a href='#'><Image className='mr-3' src='/instagram.png' alt='inst' width={23} height={23}/></a>
                <a href='#'><Image className='mr-3' src='/web-site.png' alt='site' width={23} height={23}/></a>
                <a href='#'><Image className='mr-3' src='/twitter.png' alt='twitter' width={23} height={23}/></a>
                <a href='#'><Image src='/youtube.png' alt='yotube' width={23} height={23}/></a>
              </div>
            </div>
          </div>

          <div className='sm:hidden mx-auto'>
            <p className='mt-7 text-[var(--color-silver)]'>Copyright © 2020 Landify UI Kit.</p>
            <p className='mt-1.5 text-[var(--color-silver)]'>All rights reserved</p>
          </div>
        </div>
      </footer>
     
    </div>
  );
};

export default Home;