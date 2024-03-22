import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'edacyDemo';

  // Define the list of students

  students = [
    { name: 'Mamadou', age: 25 },
    { name: 'Fatou', age: 23 },
    { name: 'Moussa', age: 26 },
    { name: 'Aissatou', age: 24 },
    { name: 'Alioune', age: 27 },
    { name: 'Aminata', age: 22 },
    { name: 'Moustapha', age: 28 },
    { name: 'Khadidiatou', age: 21 },
    { name: 'Ousmane', age: 29 },
    { name: 'Khady', age: 20 },
  ];
  // Define the list of courses
  courses = [
    { name: 'Mathematics', code: 'MTH 101' },
    { name: 'Physics', code: 'PHY 101' },

    { name: 'Chemistry', code: 'CHE 101' },

    { name: 'Biology', code: 'BIO 101' },
  ];

  // Define the list of teachers

  teachers = [
    { name: 'Mr. Sow', age: 35 },
    { name: 'Mrs. Diop', age: 33 },
    { name: 'Mr. Diallo', age: 36 },
    { name: 'Mrs. Ndiaye', age: 34 },
  ];

  // Define the list of schools

  schools = [
    { name: 'Cheikh Anta Diop University', location: 'Dakar' },
    { name: 'Gaston Berger University', location: 'Saint-Louis' },
  ];

  // Define the list of classes

  classes = [
    { name: 'Mathematics', level: 'First Year' },
    { name: 'Physics', level: 'Second Year' },
    { name: 'Chemistry', level: 'Third Year' },
    { name: 'Biology', level: 'Fourth Year' },
  ];

  // Define the list of departments

  departments = [
    { name: 'Mathematics', code: 'MTH' },
    { name: 'Physics', code: 'PHY' },
    { name: 'Chemistry', code: 'CHE' },
    { name: 'Biology', code: 'BIO' },
  ];
}
