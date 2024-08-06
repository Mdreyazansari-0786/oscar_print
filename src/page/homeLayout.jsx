import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import HeroSection from '../component/homesection/HeroSection';
import Productsection from '../component/homesection/Productsection';
import CardDesign from '../component/homesection/CardDesign';
import ProductTab from '../component/homesection/ProductTab';
import OscarProduct from '../component/homesection/Section_1';
import TestomonialSection from '../component/homesection/testomonial/TestomonialSection';
const Home = () => {

    const services = [
  {
    title: 'Packaging Solutions',
    items: ['Custom Boxes', 'Custom Packaging', 'Labels and Stickers', 'Tags and Hangings'],
    imageUrl: 'path-to-your-image-1.jpg'
  },
  {
    title: 'Promotional Items',
    items: ['Pens and Stationery', 'Mugs and Drinkware', 'Keychains and Accessories', 'Custom Apparel'],
    imageUrl: 'path-to-your-image-2.jpg'
  },
  {
    title: 'Marketing Materials',
    items: ['Brochures and Flyers', 'Postcards and Mailers', 'Door Hangers', 'Catalogs and Booklets'],
    imageUrl: 'path-to-your-image-3.jpg'
  },
  {
    title: 'Banners and Signage',
    items: ['Vinyl Banners', 'Retractable Banners', 'Posters', 'Yard Signs'],
    imageUrl: 'path-to-your-image-4.jpg'
  },
  {
    title: 'Business Essentials',
    items: ['Business Cards', 'Letterheads and Envelopes', 'Notepads', 'Presentation Folders'],
    imageUrl: 'path-to-your-image-5.jpg'
  },
  {
    title: 'Special Occasions',
    items: ['Invitations and Greeting Cards', 'Event Tickets', 'Announcements'],
    imageUrl: 'path-to-your-image-6.jpg'
  }
];
  
    return (
        <div className='w-full'>
        <HeroSection/>
        <Productsection/>  
        <CardDesign titletext='OscarPrint Picks: Top products for building your brand' />
        <ProductTab/>

        <div className="min-h-screen bg-gray-100 px-2 md:px-20 py-10">
        <div className='w-full py-6 gap-y-4 sm:gap-y-4 items-center text-center justify-center flex flex-col'>
            <p className='text-sm sm:text-base 2xl:text-xl font-semibold text-[#847E8C]'>Our Services</p>
      <p className=" text-base dm_sansFont  sm:text-3xl 2xl:text-[54px] w-full md:w-3/4  lg:w-[62%] sm:leading-8  md:leading-[52px]  font-semibold text-center">
      Your One-Stop Printing Solution - Explore Our Services
      </p>
            <p className='text-sm sm:text-base 2xl:text-xl font-semibold text-[#847E8C]'>lorem13</p>
        </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:px-28 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            title={service.title}
            items={service.items}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </div>

    <CardDesign titletext='Tools to help build your business' />
    <div className="w-full px-2 sm:px-20 bg-[#524BAD]">
        <OscarProduct />
      </div>
      <div className='px-2 py-6 sm:py-10 sm:px-20'>
        <TestomonialSection />
      </div>

      </div>

    );
  };
  

export default Home


const Card = ({ title, items, imageUrl }) => {
  return (
    <div className="bg-[#524BAD] p-6 text-white shadow-md rounded-lg overflow-hidden">
      <div className='bg-white w-full h-48 rounded-md relative overflow-hidden'>
      <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
      <button className="mt-4 bg-orange-500 text-xs sm:text-sm 2xl:text-base font-bold absolute bottom-4 right-4 text-white py-2.5 px-6 rounded hover:bg-orange-600">
          Detail
        </button>
      </div>
      <div className="p-4">
        <h2 className="sm:text-xl 2xl:text-2xl text-base font-bold mb-2">{title}</h2>
        <ul className="list-disc list-inside">
          {items.map((item, index) => (
            <li className='text-xs sm:text-sm 2xl:text-base font-medium' key={index}>{item}</li>
          ))}
        </ul>
       
      </div>
    </div>
  );
};