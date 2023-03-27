'use client'

import Link from 'next/link';
import React, { useState } from 'react';
import { AppsProps } from '@/types/page';

export const Category = ({ data }: AppsProps) => {
  const top10 = data.slice(0, 10);
  const more = data.slice(10);
  const [showMore, setShowMore] = useState(false);
  return (
    <div className='mt-8'>
      <h4 className='font-light text-lg text-gray-700 pb-2 pl-1 border-b border-gray-300'>Categories</h4>
      <div className='pt-2 font-light text-gray-500'>
        <ul className='pl-1'>
          {top10.map((category) => (
            <li key={category.id} className='py-1'>
              <Link href={`/category/${category.slug}`}>{category.slug}</Link>
            </li>
          ))}
        </ul>
        {showMore && (
          <ul className='pl-1'>
            {more.map((category) => (
              <li key={category.id} className='py-1'>
                <Link href={`/category/${category.slug}`}>{category.slug}</Link>
              </li>
            ))}
          </ul>)}
        {!showMore && <button tabIndex={1} className="border-solid border p-2 text-sm w-full mt-4 bg-gray-100 hover:bg-gray-400 hover:text-gray-100" onClick={() => setShowMore(true)}>View more</button>}
      </div>
    </div>
  );
};