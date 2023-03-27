import { use } from 'react';
import AppCard from '@/components/content/AppCard';
import { PageProps } from '@/types/page';
import { AppCardInfo } from '@/types/appCard';

export async function generateMetadata({ params: { slug } }: PageProps) {
  return { title: `product:${slug}` };
}

async function getData(slug: string) {
  const { data: { listingsPreview } } = await import(`@/data/product/${slug}.json`);
  return {
    listingsPreview
  }
}

const ProductPage = ({ params: { slug } }: PageProps) => {
  const { listingsPreview } = use(getData(slug));
  const info: AppCardInfo = {
    type: 'product',
    typeSlug: slug,
  };
  return <AppCard dataList={listingsPreview} info={info}></AppCard>;
}

export default ProductPage;
