import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {

  words: string = '';
  badWords: string = '';
  text: string = '';
  inputBorderColor: string = '';
  inputPlaceholder: string = 'word here...';
  textareaPlaceholder: string = 'text here...';
  textareaBorderColor: string = '';
  str = this.badWords.replace(/ /gi, "|");
  regExp = new RegExp(`\\b${this.str}\\b`, 'gi');

  constructor() { }

  ngOnInit(): void {
  }

  addWords(): void {
    if (this.words.length > 0) {
      if (this.badWords.length === 0) {
        this.inputPlaceholder = 'word here...';
        this.inputBorderColor = 'rgba(0, 0, 0, 0.5)';
        this.badWords += this.words;
      } else {
        this.inputPlaceholder = 'word here...';
        this.inputBorderColor = 'rgba(0, 0, 0, 0.5)';
        this.badWords += ' ' + this.words;
      }
    } else if (this.words.length === 0) {
      this.inputBorderColor = 'red';
      this.inputPlaceholder = 'Please write a word!';
    }
    this.words = '';
  }

  resetAll(): void {
    this.words = '';
    this.badWords = '';
    this.text = '';
    this.inputBorderColor = 'rgba(0, 0, 0, 0.5)';
    this.textareaBorderColor = 'rgba(0, 0, 0, 0.5)';
  }

  cenzorWord(): void {
    if (this.text.length === 0) {
      this.textareaBorderColor = 'red';
      this.textareaPlaceholder = 'Plese write a text!';
    } else {
      this.textareaBorderColor = 'rgba(0, 0, 0, 0.5)';
      this.textareaPlaceholder = 'text here...';
      this.str = this.badWords.replace(/ /gi, "|");
      this.regExp = new RegExp(`\\b${this.str}\\b`, 'gi');
      this.text = this.text.replace(this.regExp, function (el) { return el.replace(/\S/g, '*'); });
    }
  }

}
