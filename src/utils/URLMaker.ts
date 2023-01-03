import {FILE_SERVER} from "./config";

export enum contentType {
    IMG = 0,
    AUD = 1,
    VID = 2,
    TXT = 3,
    UNS = 4
}

export const makeURL = (name: string, type: contentType = contentType.UNS): string => {
    switch (type) {
        case contentType.IMG:
            return `${FILE_SERVER}/image/${name}`;
        case contentType.AUD:
            return `${FILE_SERVER}/audio/${name}`;
        case contentType.VID:
            return `${FILE_SERVER}/video/${name}`;
        case contentType.TXT:
            return `${FILE_SERVER}/text/${name}`;
        default:
            return `${FILE_SERVER}/unsorted/${name}`
    }
}