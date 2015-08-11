/// <reference path="./../../root.d.ts" />

import {GreetingComponent} from 'components/greeting/greeting';
import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
    selector: 'my-app'
})
@View({
    directives: [GreetingComponent],
    template: '<greeting>Loading...</greeting>'
})

// Component controller
export class StartingPoint {
}

// register the dependency
import {Word} from './services/word';
import {httpInjectables} from 'angular2/http';

bootstrap(StartingPoint, [Word, httpInjectables]);