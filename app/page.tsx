import { use } from 'react';
import { Inter } from 'next/font/google'
import AppCard from '@/components/content/AppCard';
import { AppCardInfo } from '@/types/appCard';
import { DataList } from '@/types/app';
import MainLayout from './MainLayout';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'main',
};

async function getData() {
  const { data: { listingsPreview } } = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/apps.json`);
  return {
    listingsPreview
  }
}

const Page = () => {
  const { listingsPreview } = use(getData());

  const slug = process.env.NEXT_PUBLIC_GPT_VERSION === '3' ? 'new' : 'featured';
  const info: AppCardInfo = {
    type: 'collection',
    typeSlug: slug,
  };

  const a = listingsPreview.filter((app: any) => slug === (app.collections.length > 0 && app.collections[0].slug)) as DataList;

  return (
    <MainLayout>
      <div className='mt-8'>
        <p className='font-semibold text-gray-600 text-lg capitalize'>{slug}</p>
        {/* <p className='font-light my-4'>Recently added GPT-{process.env.NEXT_PUBLIC_GPT_VERSION} apps</p> */}
        <AppCard dataList={a} info={info}></AppCard>
      </div>
    </MainLayout>
  );
};

export default Page