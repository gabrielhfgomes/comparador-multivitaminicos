import { Component, OnInit } from '@angular/core';
import { Audio } from 'src/app/models/audio.model';
import { AudiosService } from 'src/app/services/audios.service';

@Component({
  selector: 'app-audios-list',
  templateUrl: './audios-list.component.html',
  styleUrls: ['./audios-list.component.css']
})
export class AudiosListComponent implements OnInit {

  audios: Audio[];
  displayedColumns: string[] = ['name', 'description', 'category'];
  loading: boolean = true;

  constructor(private audioService: AudiosService) { }

  ngOnInit(): void {
    this.audioService.getAllAudios().subscribe(resp => {
      this.audios = resp;
      this.loading = !this.loading;
    });
  }
}
