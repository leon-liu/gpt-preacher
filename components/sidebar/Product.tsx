'use client'

import { useRouter } from "next/navigation";
import React, { ChangeEvent } from "react";
import { AppsProps } from '@/types/page';

export const Product = ({ data }: AppsProps) => {
  const route = useRouter();
  const handleSelectChange = async (e: ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    route.push(`/product/${e.currentTarget.value}`);
  };

  return (
    <div className='mt-8'>
      <h4 className='font-light text-lg text-gray-700 pb-2 pl-1 border-b border-gray-300'>Products</h4>
      <select className='minimal w-full text-gray-500 mt-4 p-2 border-solid border' onChange={handleSelectChange}>
        <option key={0} value=''>Choose product</option>
        {data.map((product) => (
          <option key={product.id} value={`${product.slug}`}>{product.slug}</option>
        ))}
      </select>

      {/* <div className="dropdown">
                <label tabIndex={0} className="btn m-1">Product</label>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    {data.map((product) => (
                        <li key={product.id}>
                            <Link href={`/product/${product.slug}`}>{product.slug}</Link>
                        </li>
                    ))}
                </ul>
            </div> */}
    </div>
  )
};