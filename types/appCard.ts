import { ListingsPreview } from "./appDetail";

export type AppType = 'category' | 'product' | 'collection';

export type AppCard = Pick<ListingsPreview, 'id' | 'name' | 'slug' | 'logo'> & AppCardInfo;

export type AppCardInfo = {
    type: AppType;
    typeSlug: string;
};