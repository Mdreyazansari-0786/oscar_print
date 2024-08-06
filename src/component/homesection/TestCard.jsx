import comma_l from '../../assets/images/comma-left.svg'
import comma_r from '../../assets/images/comma-right.svg'
function TestCard() {
  return (
    <div className="flex-col flex items-center max-w-[36.1rem] p-[1rem]" id='testo-box'>

    <div className="text-section w-[100%] ">
      <img className='relative top-[2.5rem]' src={comma_l} alt="" />
      
        <p className='font-[poppins] text-xs sm:text-sm 2xl:text-base font-normal leading-[2.5rem] text-center pl-[5rem]'>Lorem Ipsum is simply dummy text of the printing and  ypesetting industry. Lorem Ipsum is simply dummy . </p>
        
        <p className='relative '><img className='relative left-[35rem] top-[-2rem]' src={comma_r} alt="" /></p>
       
    </div>
    <div className="image-section flex gap-[1rem] items-center mx-auto">
        <img className='w-12 h-12 rounded-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwZOwv-ThhfOYXCq8h5NY-EIB1-S6r1M6CwA&usqp=CAU" alt="" />
        <div className="text-start">
            <h3 className='text-xs sm:text-sm 2xl:text-base font-bold leading-4'>John Doe</h3>
            <p className='text-xs sm:text-sm 2xl:text-base font-normal text-[#4F4F4F] leading-3 sm:leading-4 ' >Enterpenuer</p>
        </div>
    </div>
  </div>  
  )
}

export default TestCard
