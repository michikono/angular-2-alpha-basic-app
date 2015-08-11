/// <reference path="./../../../../root.d.ts" />

import {Component, View, bootstrap, NgIf, formDirectives} from 'angular2/angular2';
import {Word} from '../../services/word';

// Annotation section
@Component({
    selector: 'greeting'
})
@View({
    templateUrl: 'components/greeting/greeting.html',
    directives: [NgIf, formDirectives]
})
export class GreetingComponent {
    public name:string;
    public word = '';

    constructor(private wordGenerator:Word) {
        this.name = 'Alice';
        this.word = '';
        this.wordGenerator.random().subscribeOnNext((value) => {
            this.word = value['word'];
        });
    }

    newWord() {
        this.word = '';
        this.wordGenerator.random().subscribeOnNext((value) => {
            this.word = value['word'];
        });
    }

    newWordWithDelay(delay: number) {
        this.word = '';
        this.wordGenerator.random().subscribeOnNext((value) => {
            setTimeout(() => this.word = value['word'], delay);
        });
    }
}
