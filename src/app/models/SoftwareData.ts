
export interface SoftwareData {
    id: number;
    isactive: boolean;
    os: number;
    category: number;
    name: string;
    imgsrc: string;
    summary: string;
    weblink: string;
    downloadlink: string;
    details: string;
    counting: number;
}

export interface SoftwareDataView {
    id: number;
    isactive: boolean;
    os: string;
    category: string;
    name: string;
    imgsrc: string;
    summary: string;
    weblink: string;
    downloadlink: string;
    details: string;
    counting: number;
}
