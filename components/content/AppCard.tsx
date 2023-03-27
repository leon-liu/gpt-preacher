import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Props } from '@/types/page'
import { DataList } from '@/types/app'

const AppCard = ({ dataList, info }: Props) => {
  return (
    <div className='grid md:grid-cols-3 gap-4 p-4'>
      {dataList.map((app: any) => (
        <Link href={`/apps/${app.slug}`} key={app.id}>
          <div className='space-x-4 border-solid shadow-md py-4 h-48 overflow-hidden'>
            <div className="flex flex-col items-center transition hover:-translate-y-8 duration-300">
              <div className='h-28 flex items-center'>
                <Image width={48} height={48} alt={app.name} src={app.logo.url} />
              </div>
              <span className='font-light text-sm'>{info.typeSlug}</span>
              <span className='text-gray-500 text-sm py-2'>{app.name}</span>
              <span className='text-blue-400 text-sm pt-2'>View Details</span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default AppCard;
