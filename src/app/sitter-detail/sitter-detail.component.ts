import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { SitterService} from '../Services/sitter.service';
import { PetSitter} from '../Shared/pet-sitter';
import {NgIf} from '@angular/common';
import {AgePipePipe} from '../pipes/age-pipe.pipe';
import {ExperoencePipePipe} from '../pipes/experoence-pipe.pipe';
import {RatingPipePipe} from '../pipes/rating-pipe.pipe';
import {HighlightDirectiveDirective} from '../directives/highlight-directive.directive';
import {SatusDirectiveDirective} from '../directives/satus-directive.directive';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardModule} from '@angular/material/card';
import {MatAnchor, MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-sitter-detail',
  templateUrl: './sitter-detail.component.html',
  styleUrls: ['./sitter-detail.component.scss'],
  imports: [
    NgIf,
    RouterLink,
    AgePipePipe,
    ExperoencePipePipe,
    RatingPipePipe,
    HighlightDirectiveDirective,
    SatusDirectiveDirective,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardActions,
    MatAnchor,
    MatCardModule,
    MatButtonModule
  ],
  standalone: true
})
export class SitterDetailComponent implements OnInit {
  sitter: PetSitter | undefined;

  constructor(
    private route: ActivatedRoute,
    private sitterService: SitterService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sitterService.getSitterById(id).subscribe((data) => {
      this.sitter = data;
    });
  }
}
