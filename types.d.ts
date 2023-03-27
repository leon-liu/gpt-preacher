import React, { ReactNode } from 'react';

export type Data = {
    id: string;
    logo: {
        url: string,
    },
    name: string,
    slug: string,
    links: [{
        url: string,
        name: string,
        type: string,
    }],
    categories: [{
        id: string,
        name: string,
        slug: string,
    }],
    collections: [{
        id: string,
        name: string,
        slug: string,
    }];
};

export interface Props {
    children?: ReactNode,
    // any props that come into the component
    dataList: Data[],
    pageName: string
}
