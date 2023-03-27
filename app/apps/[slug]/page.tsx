import SingleApp from '@/components/content/SingleApp';
import { PageProps } from '@/types/page';

const AppPage = async ({ params: { slug } }: PageProps) => {
    const { data: { listingsPreview } } = await import(`@/data/${process.env.NEXT_PUBLIC_GPT_VERSION}/appDetail.json`);
    const app = listingsPreview.find((app:any) => slug === app.slug);
    return <SingleApp data={app} />;
}

export default AppPage;
