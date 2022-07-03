import { BaseModel } from '@app/generics/models/base-model';

export interface TrackModelView extends BaseModel {
    name: string;
    artist: string;
    link: string;
    thumbnail: string;
}