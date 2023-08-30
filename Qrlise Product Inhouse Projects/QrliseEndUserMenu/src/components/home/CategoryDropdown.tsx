import { Dropdown, Menu, MenuProps } from 'antd'
import React from 'react'
import { BiSolidFoodMenu } from 'react-icons/bi'

const CategoryDropdown = () => {      
      const handleMenuClick: MenuProps['onClick'] = (e) => {
        // message.info('Click on menu item.');
        console.log('click', e);
        // console.log(itemData);
      };
      const items: MenuProps['items'] = [
        {
          key: 'edit',
          label: (
            <button className='text-left text-xl py-2 border-b-2 text-black'>Choose Category</button>
          ),
          disabled: true
        },
        {
          key: 'delete',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>Option 2</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details</button>
          ),
        },
        {
          key: 'viewDetails',
          label: (
            <button className='text-left text-lg py-1 text-gray-700'>View Details Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus, officiis.</button>
          ),
        },
        
      ];

      const menuProps = {
        items,
        onClick: handleMenuClick,
      };
    return (
        <Dropdown menu={menuProps} trigger={['click']} className='fixed bottom-[3rem] right-8'>
            <button type="button" className='bg-red-500 flex items-center justify-center p-4 rounded-full'>
                <BiSolidFoodMenu size="25" color="white"/>
            </button>
        </Dropdown>
    )
}

export default CategoryDropdown