import { InjectionToken } from '@angular/core';
import * as R from 'ramda';
import { TrackModelView } from './model/track-modelview';

export const API_URL = new InjectionToken<string>('');

export const responseData2TrackModelViewFn = (iTunesTack: Object): TrackModelView => {
  
    return <TrackModelView>{
      id: R.path(['artistId'], iTunesTack),
      name: R.path(['trackName'], iTunesTack),
      artist: R.path(['artistName'], iTunesTack), 
      link: R.path(['trackViewUrl'], iTunesTack),
      thumbnail: R.path(['artworkUrl30'], iTunesTack)
    }
  };