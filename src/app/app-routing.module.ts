import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ScheduleparSingleComponent } from "./component/schedulepar-single/schedulepar-single.component";
import { EvaluateParComponent } from "./component/evaluate-par/evaluate-par.component";
import { ScoreMyparComponent } from "./component/score-mypar/score-mypar.component";
import { TrackParComponent } from "./component/track-par/track-par.component";

const routes: Routes = [
  { path: "schedulepar_single", component: ScheduleparSingleComponent },
  { path: "evaluatepar", component: EvaluateParComponent },
  { path: "scorepar", component: ScoreMyparComponent },
  { path: "trackpar", component: TrackParComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  ScheduleparSingleComponent,
  EvaluateParComponent,
  ScoreMyparComponent,
  TrackParComponent
];
