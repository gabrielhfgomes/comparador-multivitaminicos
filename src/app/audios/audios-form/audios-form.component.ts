import { Component, ElementRef, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Category } from 'src/app/models/category.model';
import { AlertService } from 'src/app/services/alert.service';
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

  constructor(
    private audioService: AudiosService, 
    private categoryService: CategoriesService,
    private alertService: AlertService) { }

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
    if(this.file) {
      this.loading = !this.loading;
      let category = new Category();
      category.id = form.value.category;
      let audio = new Audio(form.value.description, 
                            this.file.name, 
                            category, 
                            this.file);
      this.audioService.createAudio(audio).subscribe(resp => {
        this.loading = !this.loading;
        if(resp.name == this.file.name) {
          this.alertService.success("Audio salvo com sucesso");
        }
      });
    } else {
      this.alertService.error("Por favor selecione um audio")
    }
  }
}
