import locales from '../core/localization/locales';
import moment from 'moment';
import nor from 'moment/locale/cs.js';
import en from 'moment/locale/en-gb.js';

export const setLanguage = (data) => {
    if(data && data.Language && data.Language==="English"){
        moment.updateLocale('en',en);
        locales.setLanguage('en-US');
    } else {
        moment.updateLocale('nb',nor);
        locales.setLanguage('nor');
    }
        
}