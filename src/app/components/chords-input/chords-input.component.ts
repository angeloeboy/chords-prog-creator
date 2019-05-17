import { Component, OnInit } from '@angular/core';
import { isGeneratedFile } from '@angular/compiler/src/aot/util';

@Component({
  selector: 'app-chords-input',
  templateUrl: './chords-input.component.html',
  styleUrls: ['./chords-input.component.css']
})
export class ChordsInputComponent implements OnInit {
  
  value = 'C';
  majOrMin = true;
  valueNumber: number = 1;

  chordsTwo: string[] = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
  first: String = "";
  second: String = "";
  third: String = "";
  fourth: String = "";
  fifth: String = "";
  sixth: String = "";
  seventh: String = "";
  chordCombination: string[] = [];

  

  constructor() { }

  ngOnInit() {
    this.showChords();
  }

  
  selectChord(event: any) { 
    this.value = event.target.value;
    this.showChords();
  }


  rotate( array , times ){
    while( times-- ){
      var temp = array.shift();
      array.push( temp )
    }
  }

  getChordNumber(){
    if(this.value === "A"){
      this.valueNumber = 9;
    }else if(this.value === "B"){
      this.valueNumber = 11;
    }else if(this.value === "C"){
      this.valueNumber = 0;
    }else if(this.value === "D"){
      this.valueNumber = 2;
    }else if(this.value === "E"){
      this.valueNumber = 4;
    }else if(this.value === "F"){
      this.valueNumber = 5;
    }else if(this.value === "G"){
      this.valueNumber = 7;
    }
  }

  getChords(major: Boolean){

    if(major){
      this.first = this.chordsTwo[0];
      this.second = this.chordsTwo[2];
      this.third = this.chordsTwo[4];
      this.fourth = this.chordsTwo[5];
      this.fifth = this.chordsTwo[7];
      this.sixth = this.chordsTwo[9];
      this.seventh = this.chordsTwo[11];


      this.second = this.second + "m";
      this.third = this.third + "m";
      this.sixth = this.sixth + "m";
      console.log(this.first + " " + this.second+ " " + this.third + " " + this.fourth + " " + this.fifth + " " + this.sixth + " " + this.seventh);

    }else if(major == false){
      this.first = this.chordsTwo[0];
      this.second = this.chordsTwo[2];
      this.third = this.chordsTwo[3];
      this.fourth = this.chordsTwo[5];
      this.fifth = this.chordsTwo[7];
      this.sixth = this.chordsTwo[8];
      this.seventh = this.chordsTwo[10];

      this.first = this.first + "m";
      this.second = this.second + "m";
      this.fourth = this.fourth + "m";
      this.fifth = this.fifth + "m";
      console.log(this.first + " " + this.second+ " " + this.third + " " + this.fourth + " " + this.fifth + " " + this.sixth + " " + this.seventh);

    }

  }

  getChordCombinations(major: boolean){
    if(major){
      this.chordCombination[0] = this.first + " - " + this.fourth + " - " + this.fifth; 
      this.chordCombination[1] = this.first + " - " + this.fourth + " - " +  this.first + " - " + this.fifth; 
      this.chordCombination[2] = this.first + " - " + this.sixth + " - " + this.fourth + " - " + this.fifth; 
      this.chordCombination[3] = this.first + " - " + this.fifth + " - " + this.sixth + " - " + this.fourth ; 
      this.chordCombination[4] = this.sixth + " - " + this.fourth + " - " + this.first + " - " + this.fifth;    
      console.log(this.chordCombination);
    }else if(major == false){
      this.chordCombination[0] = this.first + " - " + this.sixth + " - " + this.seventh; 
      this.chordCombination[1] = this.first + " - " + this.fourth + " - " +  this.seventh; 
      this.chordCombination[2] = this.first + " - " + this.fourth + " - " + this.fifth; 
      this.chordCombination[3] = this.first + " - " + this.sixth + " - " + this.third + " - " + this.seventh ; 
      this.chordCombination[4] = this.second + " - " + this.fifth + " - " + this.first;    
      console.log(this.chordCombination);
    }
    
  }

  showChords(){
    this.getChordNumber();
    this.rotate(this.chordsTwo ,this.valueNumber);
    this.getChords(this.majOrMin);
    this.getChordCombinations(this.majOrMin);

    this.chordsTwo = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  }

  majorClicked: Boolean = true;

  isMajorClicked(){
   this.majOrMin = true;
   console.log(this.majOrMin);
   this.showChords();
   this.majorClicked = true;
  }

  isMinorClicked(){
    this.majOrMin = false;
    console.log(this.majOrMin);
    this.showChords();
    this.majorClicked = false;
  }

  get blackBg(): any{
    return{
      'background-color': this.majorClicked ? 'black' : 'white',
      'color': this.majorClicked ? 'white' : "black" 
    };
  }

  get whiteBg(): any{
    return{
      'background-color': this.majorClicked ? 'white' : 'black',
      'color': this.majorClicked ? 'black' : "white" 
    };
  }

  changeSharpToFlat(){
    
  }






}

