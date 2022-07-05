import { InjectionToken } from '@angular/core';
import * as R from 'ramda';
import { TrackModelView } from '../../shared/model/track-modelview';
import { SearchService } from '../../shared/services/search-service';

export const API_URL = new InjectionToken<string>('');
export const SEARCH_SERVICE = new InjectionToken<SearchService>('SEARCH_SERVICE');

export const responseData2TrackModelViewFn = (iTunesTack: Object): TrackModelView => {
  
    return <TrackModelView>{
      id: R.path(['artistId'], iTunesTack),
      name: R.path(['trackName'], iTunesTack),
      artist: R.path(['artistName'], iTunesTack), 
      link: R.path(['trackViewUrl'], iTunesTack),
      thumbnail: R.path(['artworkUrl30'], iTunesTack)
    }
  };