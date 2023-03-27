import Link from 'next/link';
import { AppsProps } from '@/types/page';

export const Collection = ({ data }: AppsProps) => {
  return (
    <div className='mt-8'>
      <h4 className='font-light text-lg text-gray-700 pb-2 pl-1 border-b border-gray-300'>Collections</h4>
      <ul className='pt-2 font-light text-gray-500 pl-1'>
        {data.map((collection) => (
          <li key={collection.id} className='py-1'>
            <Link href={`/collection/${collection.slug}`}>{collection.slug}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
};