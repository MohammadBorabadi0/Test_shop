import React from 'react';

// Icons 
import { FiChevronLeft } from 'react-icons/fi';
import { BiCart } from 'react-icons/bi';
import { FiChevronDown } from 'react-icons/fi';

const DetailPage = () => {
    return (
        <div className='flex flex-col gap-6 rounded-2xl'>
            <div className='flex justify-between items-center text-3xl text-slate-700 px-4 py-6'>
                <span className='cursor-pointer'>
                    <FiChevronLeft />
                </span>
                <span className='cursor-pointer'>
                    <BiCart />
                </span>
            </div>
            <div className='flex justify-center'>
                <img className='w-2/4' src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' alt='product' />
            </div>
            <div className='flex flex-col gap-6 bg-gray-300 rounded-3xl px-4 py-6'>
                <div className='flex justify-between items-center font-bold'>
                    <h4 className='text-lg'>Air Jordan XXXV</h4>
                    <span className='text-xl'>$171,88</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between items-center'>
                        <h4 className='font-semibold text-lg'>Size</h4>
                        <span className='text-gray-400 font-medium'>Size Guide</span>
                    </div>
                    <div className='flex gap-2'>
                        <button className='px-2 py-1 bg-white shadow-md rounded-md font-semibold text-lg'>40</button>
                        <button className='px-2 py-1 bg-white shadow-md rounded-md font-semibold text-lg'>41</button>
                        <button className='px-2 py-1 bg-white shadow-md rounded-md font-semibold text-lg'>42</button>
                        <button className='px-2 py-1 bg-white shadow-md rounded-md font-semibold text-lg'>43</button>
                    </div>
                </div>
                <div className='flex justify-between items-center text-xl font-semibold'>
                    <h4>Description</h4>
                    <FiChevronDown size='25px' />
                </div>
                <div className='flex items-center justify-center bg-slate-900 text-white gap-2 text-lg font-bold cursor-pointer py-1.5 rounded-xl'>
                    <BiCart size='22px' />
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;