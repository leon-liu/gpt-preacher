import { use } from 'react';
import AppCard from '@/components/content/AppCard';
import { PageProps } from '@/types/page';
import { AppCardInfo } from '@/types/appCard';
import { Data, DataList } from '@/types/app';

// async function getData() {
//   const { data: { listingsPreview } } = await import('@/data/apps.json');
//   return {
//     listingsPreview
//   }
// }

const CategoryPage = async ({ params: { slug } }: PageProps) => {
  // const { listingsPreview } : any = use(getData());

  const { data: { listingsPreview } } : any = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/apps.json`);
  const info: AppCardInfo = {
    type: 'category',
    typeSlug: slug,
  };

  const a = listingsPreview.filter((app: any) => slug === (app.categories.length > 0 && app.categories[0].slug)) as DataList;
  return <AppCard dataList={a} info={info}></AppCard>;
}

export default CategoryPage;
