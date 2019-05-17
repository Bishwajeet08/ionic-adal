import { Component, OnInit } from '@angular/core';
import * as Survey from 'survey-angular';

@Component({
  selector: 'app-demo-page',
  templateUrl: './demo-page.component.html',
  styleUrls: ['./demo-page.component.scss'],
})
export class DemoPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var json = {
      questions: [
        {
          type: "radiogroup", name: "car", title: "What car are you driving?", isRequired: true,
          colCount: 4, choices: ["None", "Ford", "Vauxhall", "Volkswagen", "Nissan", "Audi", "Mercedes-Benz", "BMW", "Peugeot", "Toyota", "Citroen"]
        }
      ]
    };

    var model = new Survey.ReactSurveyModel(json);
    Survey.SurveyNG.render('surveyContainer', { model: model });

  }

}
