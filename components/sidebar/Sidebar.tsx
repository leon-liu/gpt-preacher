import React, { use, useState } from 'react';
import { Collection } from './Collection';
import { Category } from './Category';
import { Product } from './Product';

async function getData() {
  const { data: { productsPreview, categoriesPreview, collectionsPreview } } = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/sidebar.json`);
  return {
    productsPreview,
    categoriesPreview,
    collectionsPreview
  }
}

export const Sidebar = () => {
  const { productsPreview, categoriesPreview, collectionsPreview } = use(getData());
  return (
    <div className='flex flex-col pr-10'>
      {process.env.NEXT_PUBLIC_GPT_VERSION === '3' && (<Product data={productsPreview}></Product>)}
      <Collection data={collectionsPreview}></Collection>
      <Category data={categoriesPreview}></Category>
    </div>
  );

  //   const result: any[] = [];
  //   // useState<string[]>([]); 
  //   const [productsPreview, setproductsPreview] = useState<any[]>([]);
  //   const [categoriesPreview, setcategoriesPreview] = useState<any[]>([]);
  //   const [collectionsPreview, setcollectionsPreview] = useState<any[]>([]);

  //   useEffect(() => {
  //     async function fetchData() {
  //       try {
  //         const { data: { productsPreview, categoriesPreview, collectionsPreview } } = await import('@/data/sidebar.json');

  //         setproductsPreview(productsPreview);
  //         setcategoriesPreview(categoriesPreview);
  //         setcollectionsPreview(collectionsPreview);
  //       } catch (err) {
  //         console.log(err);
  //       }
  //     }
  //     fetchData();
  //   }, []);

};