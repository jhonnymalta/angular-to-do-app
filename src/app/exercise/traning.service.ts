import { Exercise } from "./exercise.model";

export class TrainingService{
    private availableExercise: Exercise[] = [
        {id: 'crunches',name:'Crunches',duration:30,calories:8},
        {id: 'touch-toes',name:'Touch Toes',duration:180,calories:120},
        {id: 'side-lunges',name:'Side Lunges',duration:120,calories:45},
        {id: 'burpees',name:'Burpess',duration:60,calories:19}
    ];


    getAbailableExercise(){
        return this.availableExercise.slice();
    }
}