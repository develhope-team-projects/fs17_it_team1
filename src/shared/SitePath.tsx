
'use client';

import { Breadcrumb } from 'flowbite-react';
import { HiHome } from 'react-icons/hi';

export function SitePathComponent() {
  return (
    <Breadcrumb aria-label="Default breadcrumb example">

      <Breadcrumb.Item href="#" icon={HiHome}>
        <p className='text-gray-400 hover:text-black'>
          Home
        </p>
      </Breadcrumb.Item>


      <Breadcrumb.Item href="#">
      <p className='text-gray-400 hover:text-black'>
        Projects
      </p>
      </Breadcrumb.Item>


      <Breadcrumb.Item>
      <p className='text-gray-400 hover:text-black'>
        Flowbite React
      </p>
      </Breadcrumb.Item>

    </Breadcrumb>
  );
}
