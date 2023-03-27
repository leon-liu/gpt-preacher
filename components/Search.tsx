'use client'

import { useRouter } from "next/navigation";
import React, { FormEvent, use, useState } from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete';

type Item = {
  id: string;
  name: string;
  slug: string;
}

async function getData() {
  const { data: { listingsPreview } } = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/apps.json`);
  return {
    listingsPreview
  }
}

function Search() {
  const route = useRouter();

  const listingsPreview = use(getData());
  const items = listingsPreview.listingsPreview.map((i: any) => ({
    id: i.id,
    name: i.name,
    slug: i.slug,
  }))

  const handleOnSearch = (string: string, results: Item[]) => {
    // onSearch will have as the first callback parameter
    // the string searched and for the second the results.
    // console.log(string, results)
  }

  const handleOnHover = (result: Item) => {
    // the item hovered
    // console.log(result)
  }

  const handleOnSelect = (item: Item) => {
    // the item selected
    // console.log(item)
    route.push(`/apps/${item.slug}`);
  }

  const handleOnFocus = () => {
    // console.log('Focused')
  }

  const formatResult = (item: Item) => {
    return (
      <>
        <span className='font-light text-gray-500'>{item.name}</span>
      </>
    )
  }

  return (
    <div className='flex flex-col items-center flex-grow-1 pt-20 pb-16'>
      <span className='text-4xl font-bold text-gray-50'>ChatGPT, Generative AI and GPT-{process.env.NEXT_PUBLIC_GPT_VERSION} Apps and use cases.</span>
      <span className='text-xl font-thin text-gray-50 pt-5'>Get inspired and discover how companies are implementing AI to power new use cases.</span>
      <div className='pt-16 w-72 md:w-96' id='search'>
        <ReactSearchAutocomplete<Item>
          items={items}
          onSearch={handleOnSearch}
          onHover={handleOnHover}
          onSelect={handleOnSelect}
          onFocus={handleOnFocus}
          // autoFocus
          formatResult={formatResult}
          placeholder='Search Apps'
          styling={
            {
              // borderRadius: "4px"
            }
          }
        />
      </div>
    </div>
  )
}

export default Search;
