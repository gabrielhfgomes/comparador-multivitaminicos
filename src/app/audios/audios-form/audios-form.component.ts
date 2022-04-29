import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { AudiosService } from 'src/app/services/audios.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Audio } from '../../models/audio.model';


@Component({
  selector: 'app-audios-form',
  templateUrl: './audios-form.component.html',
  styleUrls: ['./audios-form.component.css']
})
export class AudiosFormComponent implements OnInit {


  srcResult: string;
  file: File; 
  loading: boolean = false; 
  category: Category;
  allCategories: Category[];

  constructor(private audioService: AudiosService, private categoryService: CategoriesService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(categories => {
      this.allCategories = categories;
      console.log(this.allCategories);
    });
  }

  onFileSelected(event: any) {
    const inputNode: any = document.querySelector('#file');

    this.file = event.target.files[0];
  
    if (typeof (FileReader) !== 'undefined') {
      const reader = new FileReader();
  
      reader.onload = (e: any) => {
        this.srcResult = e.target.result;
      };
  
      reader.readAsArrayBuffer(inputNode.files[0]);
    }
  }

  onChange(event: any) {
    this.file = event.target.files[0];
  }


  onSubmit(form: NgForm) {
    console.log(form.value)

    this.loading = !this.loading;
    console.log(this.file);

    let category = new Category();
    category.id = form.value.category;

    let audio = new Audio(form.value.description, 
                          this.file.name, 
                          category, 
                          this.file);

    this.audioService.createAudio(audio).subscribe(resp => {
      console.log(resp);
    });

    // this.audioService.uploadFile(this.file).subscribe(resp => {
    //   console.log(resp);
    // });

    // this.fileUploadService.upload(this.file).subscribe(
    //     (event: any) => {
    //         if (typeof (event) === 'object') {

    //             // Short link via api response
    //             this.shortLink = event.link;

    //             this.loading = false; // Flag variable 
    //         }
    //     }
    // );
  }
}
