import AppCard from '@/components/content/AppCard';
import { PageProps } from '@/types/page';
import { DataList } from '@/types/app';
import { AppCardInfo } from '@/types/appCard';

const CollectionPage = async ({ params: { slug } }: PageProps) => {
  const { data: { listingsPreview } } = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/apps.json`);

  const info: AppCardInfo = {
    type: 'collection',
    typeSlug: slug,
  };

  const a = listingsPreview.filter((app: any) => slug === (app.collections.length > 0 && app.collections[0].slug)) as DataList;
  return <AppCard dataList={a} info={info}></AppCard>;
}

export default CollectionPage;
