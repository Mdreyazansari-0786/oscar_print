import React from 'react'
import bs from '../../assets/oscar_image/bscard.jpeg'
import Titleheader from '../titleHeader'
const productdata=[
    {
        id:1,
        imgsrc:bs,
        label:"Business Card"

    },
    {
        id:2,
        imgsrc:bs,
        label:"Post Card"

    },
    {
        id:3,
        imgsrc:bs,
        label:"Poster"

    },
    {
        id:4,
        imgsrc:bs,
        label:"Vinyl Banner"

    },
    {
        id:5,
        imgsrc:bs,
        label:"Stamp"

    },
   
]
const CardDesign = ({titletext}) => {
  return (
    
    <div className='md:px-20 px-2 py-4 md:py-8  mt-6 gap-y-6 flex flex-col'>
    {/* <div className='w-full items-center justify-between flex'>
    <p className='text-base sm:text-4xl text-[#282828] 2xl:text-[40px] font-normal'>{title}</p>
    <button className='sm:px-6 min-w-20 px-3 py-2.5 text-sm sm:text-base hover:bg-[#524BAD] hover:text-white font-normal 2xl:text-lg bg-transparent border-[1px] rounded-sm border-[#000000] hover:border-white '>See All</button>
    </div> */}
    <Titleheader title={titletext} btn='see all' textcolor="#1e1e1e" />
    <div className='grid w-full mt-6 grid-cols-2 items-center justify-center gap-6 sm:grid-cols-3 md:grid-cols-5'>
    {
        productdata && productdata.map((item)=>(
            <div key={item.id} className='flex flex-col w-full text-start gap-y-4'>
        <img className='h-32 sm:h-60 w-full' src={item.imgsrc} alt="" />
        <hr className="h-px w-20 bg-[#913B10] border-0"/>
        <p className='text-base sm:text-lg font-normal 2xl:text-xl text-[#000000]'>{item.label}</p>
        </div>
        ))
    }
       
    </div>

    </div>
  )
}

export default CardDesign