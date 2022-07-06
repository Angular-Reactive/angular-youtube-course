import { InjectionToken } from '@angular/core';
import { AlertService } from '@app/shared/components/alert/alert.service';
import * as R from 'ramda';
import { TrackModelView } from '../../shared/model/track-modelview';

export const API_URL = new InjectionToken<string>('');
export const ALERT_SERVICE = new InjectionToken<AlertService>('ALERT_SERVICE');


export const responseData2TrackModelViewFn = (iTunesTack: Object): TrackModelView => {
  
    return <TrackModelView>{
      id: R.path(['artistId'], iTunesTack),
      name: R.path(['trackName'], iTunesTack),
      artist: R.path(['artistName'], iTunesTack), 
      link: R.path(['trackViewUrl'], iTunesTack),
      thumbnail: R.path(['artworkUrl30'], iTunesTack)
    }
  };