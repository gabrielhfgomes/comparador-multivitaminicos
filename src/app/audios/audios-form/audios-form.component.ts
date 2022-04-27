import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';



@Component({
  selector: 'app-audios-form',
  templateUrl: './audios-form.component.html',
  styleUrls: ['./audios-form.component.css']
})
export class AudiosFormComponent implements OnInit {

  constructor() { }

  srcResult: string;

  ngOnInit(): void {
  }

  onFileSelected() {
    const inputNode: any = document.querySelector('#file');
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  onSubmit(form: NgForm) {
    console.log(form)
  }


}
