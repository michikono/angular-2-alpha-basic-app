/// <reference path="./../../../root.d.ts" />

import {Http} from 'angular2/http';
import {Component} from 'angular2/angular2';

@Component({
    appInjector: [Http]
})

export class Word {

    constructor(private http:Http) {
    }

    random() {
        return this.http.get('http://api.wordnik.com:80/v4/words.json/randomWords?hasDictionaryDef=true&minCorpusCount=0&minLength=5&maxLength=15&limit=1&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5')
            .toRx()
            // Call map on the response observable to get the parsed people object
            .map(res => res.json()[0])
    }
}
