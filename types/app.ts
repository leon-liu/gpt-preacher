export type App = {
    data: Data;
}

export type Data = {
    listingsPreview: ListingsPreview[];
}

export type DataList = ListingsPreview[];

export type ListingsPreview = {
    id:                        string;
    logo:                      Logo | null;
    name:                      string;
    slug:                      string;
    links:                     Link[];
    sticky:                    boolean;
    tagLine:                   null | string;
    blendrId:                  ID | null;
    trayIoId:                  ID | null;
    upcoming:                  boolean;
    zapierId:                  ID | null;
    piesyncId:                 ID | null;
    segmentId:                 ID | null;
    __typename:                ListingsPreviewTypename;
    automateId:                ID | null;
    categories:                Category[];
    collections:               Category[];
    combideskId:               ID | null;
    integromatId:              IntegromatID | null;
    translations:              any[];
    microsoftFlowId:           ID | null;
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
    __typename:   CategoryTypename;
    translations: any[];
}

export enum CategoryTypename {
    Collection = "Collection",
    MultiCategory = "MultiCategory",
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

export type Link = {
    id:           string;
    url:          string;
    name:         string;
    type:         Type;
    sequence:     number | null;
    __typename:   LinkTypename;
    translations: any[];
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
