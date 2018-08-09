import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  public value: string;
  public showThirdChild = false;
  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  public pushValue() {
    this.subjectService.pushTestSubject(this.value);
  }
}
