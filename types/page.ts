import React, { ReactNode } from 'react';
import { Data, DataList } from './app';
import {AppCardInfo} from './appCard';

// export type Data = {
//     id: string;
//     logo: {
//         url: string,
//     },
//     name: string,
//     slug: string,
//     links: [{
//         url: string,
//         name: string,
//         type: string,
//     }],
//     categories: [{
//         id: string,
//         name: string,
//         slug: string,
//     }],
//     collections: [{
//         id: string,
//         name: string,
//         slug: string,
//     }];
// };

export interface Props {
    children?: ReactNode,
    // any props that come into the component
    dataList: DataList,
    // pageName: string | string[] | undefined
    info: AppCardInfo,
}

export type PageProps = {
    params: {
        slug: string;
    }
}

export type AppsProps = {
    data: any[]
}