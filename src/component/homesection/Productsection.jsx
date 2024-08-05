import React from 'react'
import { useMediaQuery } from 'react-responsive';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import s1 from '../../assets/oscar_image/b-tshirt.jpeg'
const Productsection = () => {

    const CustomNextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%', right: '10px' }}
            onClick={onClick}
          />
        );
      };
      
      const CustomPrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: 'block', background: 'gray', borderRadius: '50%', left: '10px' }}
            onClick={onClick}
          />
        );
      };
    const items = [
      { id: 1, label: 'Clothing & Textiles', image: s1 },
      { id: 2, label: 'Invitation', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 3, label: 'Folders & Leaflets', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 4, label: 'Cards', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 5, label: 'Clothing & Textiles', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 6, label: 'Gifts', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 7, label: 'Cards', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 8, label: 'Clothing & Textiles', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
      { id: 9, label: 'Gifts', image: 'https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1722556800&semt=sph' },
    ];
  
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isLaptopOrDesktop = useMediaQuery({ minWidth: 1024 });
  
    const slidesToShow = isMobile ? 2 : isTablet ? 4 : 6;
  
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow,
      slidesToScroll: 2,
      autoplay: false,
      autoplaySpeed: 2000,
      nextArrow: isLaptopOrDesktop ? <CustomNextArrow /> : null,
      prevArrow: isLaptopOrDesktop ? <CustomPrevArrow /> : null,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 1023,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        }
      ]
    };
  return (
    <div className="mt-10 overflow-hidden py-2 px-0 lg:px-14">
    <Slider {...settings} className='md:px-10 px-2 sm:px-4 gap-x-4 flex items-center justify-center'>
      {items.map((item) => (
       
        <div  key={item.id} className=' flex flex-col items-center text-center justify-center rounded-full p-2 w-fit'>
    <div className=''><img className=' w-36 h-36 rounded-full mx-auto' src={item.image} alt={item.label} /></div>
    <p className='text-base sm:text-lg 2xl:text-xl mt-2 font-medium text-[#000000]'>{item.label}</p>
  </div>
      ))}
    </Slider>
  </div>  
  )
}

export default Productsection