import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import * as Credentials from "../credentials";

@Injectable()
export class GeneralService {
    // A generic service to use throughout the app.
    // Provided in app.module.ts.

    constructor(private httpClient: HttpClient) {}

    getDiscogsClubCollection(callbackFunction: (data) => void) {
        let url = 'https://api.discogs.com/users/PurdueVinylClub/collection/folders/0/releases?token=' + Credentials.DISCOGS_AUTH_TOKEN;
        this.httpClient.get(url).subscribe((result) => {
            callbackFunction(result);
        });
    }

    getGoogleCalendarEvents(callbackFunction: (data) => void ) {
        let url = 'https://www.googleapis.com/calendar/v3/calendars/' + Credentials.GOOGLE_CAL_CALENDAR_ID + '/events?key=' + Credentials.GOOGLE_CAL_API_KEY;
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