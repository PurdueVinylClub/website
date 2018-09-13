import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class GeneralService {
    // A generic service to use throughout the app.
    // Provided in app.module.ts.

    DISCOGS_AUTH_TOKEN = 'IIjaKnQGrAVYYGmHXSSZsAzgHVRNaRMfFocJBgxc';
    GOOGLE_CAL_API_KEY = 'AIzaSyCOtAHDrc_odjH2l2M5FyDlwvmHMmUDTnM';
    GOOGLE_CAL_CALENDAR_ID = 'purduevinylclub@gmail.com';

    constructor(private httpClient: HttpClient) {}

    getDiscogsClubCollection(callbackFunction: (data) => void) {
        let url = 'https://api.discogs.com/users/PurdueVinylClub/collection/folders/0/releases?token=' + this.DISCOGS_AUTH_TOKEN;
        this.httpClient.get(url).subscribe((result) => {
            callbackFunction(result);
        });
    }

    getGoogleCalendarEvents(callbackFunction: (data) => void ) {
        let url = 'https://www.googleapis.com/calendar/v3/calendars/' + this.GOOGLE_CAL_CALENDAR_ID + '/events?key=' + this.GOOGLE_CAL_API_KEY;
        this.httpClient.get(url).subscribe((result) => {
            // Have to wrap calendar events into new format so that Angular FullCalendar can process the data correctly.
            let events = result['items'];
            let returnableEvents = [];
            for (let event of events) {
                let eventObject = {
                    title: event['summary'],
                    start: event['start']['dateTime']
                }
                returnableEvents.push(eventObject);
            }
            
            callbackFunction(returnableEvents);
        });
    }
}