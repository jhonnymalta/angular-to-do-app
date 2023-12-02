import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Exercise } from './exercise.model';
import { TrainingService } from './traning.service';

@Component({
    selector: 'app-exercise',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './exercise.component.html'
    
  })

  export class ExerciseComponent implements OnInit{
   
   constructor(private trainingService: TrainingService){}

    exercises: Array<Exercise> =[];

   ngOnInit(): void {
     this.exercises = this.trainingService.getAbailableExercise();
   }
  
   
   
  }