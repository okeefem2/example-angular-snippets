import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../subject.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subject-child-one',
  templateUrl: './subject-child-one.component.html',
  styleUrls: ['./subject-child-one.component.css']
})
export class SubjectChildOneComponent implements OnInit {

  constructor(private subjectService: SubjectService) { }

  ngOnInit() {
  }

  getTestSubject(): Observable<string> {
    return this.subjectService.getTestSubject();
  }
}
