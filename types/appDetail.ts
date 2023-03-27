export type AppDetail = {
    data: Data;
}

export type Data = {
    listingsPreview: ListingsPreview[];
}

export type ListingsPreview = {
    id:                        string;
    logo:                      Logo | null;
    name:                      string;
    slug:                      string;
    links:                     Link[];
    media:                     Media[];
    state:                     State;
    sticky:                    boolean;
    pricing:                   null | string;
    tagLine:                   null | string;
    blendrId:                  ID | null;
    features:                  null | string;
    products:                  Category[];
    trayIoId:                  ID | null;
    upcoming:                  boolean;
    zapierId:                  ID | null;
    piesyncId:                 ID | null;
    published:                 boolean;
    segmentId:                 ID | null;
    __typename:                ListingsPreviewTypename;
    automateId:                ID | null;
    categories:                Category[];
    collections:               Category[];
    combideskId:               ID | null;
    description:               null | string;
    screenshots:               Screenshot[];
    integromatId:              IntegromatID | null;
    translations:              any[];
    microsoftFlowId:           ID | null;
    unifyConnectorId:          null | string;
    nativeIntegration:         boolean;
    detailPageDisabled:        boolean;
    cardBackgroundColor:       null | string;
    cardBackgroundImage:       null;
    nativeIntegrationLink:     null | string;
    thirdPartyIntegration:     boolean;
    thirdPartyIntegrationLink: null | string;
}

export enum ListingsPreviewTypename {
    Listing = "Listing",
}

export enum ID {
    Algolia = "algolia",
    Android = "android",
    Box = "box",
    Coda = "coda",
    Descript = "descript",
    Discord = "discord",
    Empty = "",
    FacebookMessenger = "facebook-messenger",
    Fireflies = "fireflies",
    GoogleDocs = "google-docs",
    GoogleSheets = "google-sheets",
    Intercom = "intercom",
    Messagebird = "messagebird",
    MicrosoftTeams = "microsoft-teams",
    Quickbooks = "quickbooks",
    Reply = "reply",
    Salesforce = "salesforce",
    Slack = "slack",
    Twitter = "twitter",
    Wordpress = "wordpress",
    Youtube = "youtube",
    Zapier = "zapier",
    ZohoNotebook = "zoho-notebook",
    Zoom = "zoom",
}

export type Category = {
    id:           string;
    name:         string;
    slug:         string;
    listings?:    Listing[];
    __typename:   CategoryTypename;
    translations: any[];
}

export enum CategoryTypename {
    Collection = "Collection",
    MultiCategory = "MultiCategory",
    Product = "Product",
}

export type Listing = {
    id:                 string;
    logo:               Logo;
    name:               string;
    slug:               string;
    links:              Link[];
    state:              State;
    upcoming:           boolean;
    __typename:         ListingsPreviewTypename;
    translations:       any[];
    detailPageDisabled: boolean;
}

export type Link = {
    id:           string;
    url:          string;
    name:         string;
    sequence:     number | null;
    __typename:   LinkTypename;
    translations: any[];
    type?:        Type;
}

export enum LinkTypename {
    Link = "Link",
}

export enum Type {
    Other = "OTHER",
    Privacy = "PRIVACY",
    Support = "SUPPORT",
    Terms = "TERMS",
    Website = "WEBSITE",
}

export type Logo = {
    id:         string;
    url:        string;
    __typename: LogoTypename;
}

export enum LogoTypename {
    File = "File",
}

export enum State {
    Approved = "APPROVED",
}

export enum IntegromatID {
    Android = "android",
    Box = "box",
    Discord = "discord",
    Empty = "",
    FacebookMessenger = "facebook-messenger",
    Figma = "figma",
    Google = "google",
    GoogleSheets = "google-sheets",
    Intercom = "intercom",
    Messagebird = "messagebird",
    Quickbooks = "quickbooks",
    Salesforce = "salesforce",
    Slack = "slack",
    Telegram = "telegram",
    Twitter = "twitter",
    Wordpress = "wordpress",
    Youtube = "youtube",
    Zapier = "zapier",
}

export type Media = {
    url:          string;
    caption:      null | string;
    __typename:   MediaTypename;
    translations: any[];
}

export enum MediaTypename {
    Media = "Media",
}

export type Screenshot = {
    id:           string;
    file:         Logo;
    caption:      null | string;
    sequence:     number;
    __typename:   ScreenshotTypename;
    translations: any[];
}

export enum ScreenshotTypename {
    Screenshot = "Screenshot",
}
