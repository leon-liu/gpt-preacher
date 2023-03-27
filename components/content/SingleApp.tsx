'use client'

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { ReactNode, useRef, useState } from 'react';
import YouTube from 'react-youtube';
import { Carousel } from "flowbite-react";

//ai-test-kitchen-by-google

const SingleApp = (data: any) => {
  const { logo: { url }, links, name, tagLine, description, slug, categories, collections, screenshots, media } = data.data;
  const websiteLink = links.filter((link: any) => link.sequence === 0)
  const otherLinks = links.filter((link: any) => link.type === 'OTHER')
  const tags = [];
  const c = categories.map((category: any) => ({
    name: category.name,
    url: `category/${category.slug}`
  }));
  const cc = collections.map((collection: any) => ({
    name: collection.name,
    url: `collection/${collection.slug}`
  }));
  tags.push(...c);
  tags.push(...cc);

  return (
    <div className='md:flex'>
      <aside className='basis-1/4 -mt-20 flex flex-col'>
        <div className='w-48 h-48 flex justify-center items-center shadow-md bg-white rounded-md self-center'>
          <Image src={url} alt={name} width={100} height={100}></Image>
        </div>

        {websiteLink && websiteLink.length > 0 &&
          <Link href={websiteLink[0].url} target='_blank'>
            <div className='bg-blue-900 mt-6 h-12 text-gray-100 font-semibold rounded flex justify-center items-center'>
              <span>{websiteLink[0].name}</span>
            </div>
          </Link>
        }

        {otherLinks && otherLinks.length > 0 && <div className='mt-10'>
          <h4 className='font-bold text-sm uppercase text-gray-500 pb-2 pl-1 border-b border-gray-300'>Links</h4>
          <ul className='mt-2 pl-1'>
            {otherLinks.map((link: any) => (
              <li key={link.id}>
                <Link href={link.url} passHref legacyBehavior>
                  <a target="_blank" rel="noopener noreferrer" className='text-blue-900 font-bold'>{link.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>}

        <div className='mt-10'>
          <h4 className='font-bold text-sm uppercase text-gray-500 pb-2 pl-1 border-b border-gray-300'>Tags</h4>
          <div className='flex flex-wrap mt-2 pl-1'>
            {tags.map(tag => (
              <Link key={tag.name} href={tag.url} className='rounded-3xl text-gray-100 bg-blue-900 text-center text-sm py-1 px-4 m-1'>{tag.name}</Link>
            ))}
          </div>
        </div>
      </aside>

      <main className='basis-3/4 md:p-4 md:pl-8'>
        <p className='text-gray-600 text-3xl font-bold mt-8 mb-2'>{name}</p>
        <p className='font-thin'>{tagLine}</p>

        {description &&
          <>
            <p className='text-gray-600 text-lg font-bold mt-8 mb-2'>About {name}</p>
            {/* <p className='font-light'>{description.replace(/\n/g, '<br />')}</p> */}
            <div className='font-light break-all' dangerouslySetInnerHTML={{ __html: `${description.replace(/\n/g, '<br />')}` }}></div>
          </>
        }

        {media.length > 0 && <div className='my-10'>
          {media.map((m: any) => (
            <YouTube className='w-0' key={m.url} videoId={m.url.split('v=')[1] || m.url.split('/')[m.url.split('/').length - 1]} />
          ))}
        </div>}

        {screenshots.length > 0 && <div className='my-10 md:w-auto'>
          <p className='text-gray-600 text-lg font-bold mt-8 mb-2'>{name} screenshots</p>
          <div className="md:my-10 h-60 md:h-96">
              <Carousel>
                {screenshots.map((ss: any, index: any) => (
                  <img key={index}
                    src={ss.file.url}
                    alt={ss.file.caption || 'image'}
                  />
                ))}
              </Carousel>
          </div>
        </div>}

      </main>
    </div>
  );
};

export default SingleApp;