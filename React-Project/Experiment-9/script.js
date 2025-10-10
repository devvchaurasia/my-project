window.addEventListener('DOMContentLoaded', function () {
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        getInfo() {
            return `${this.name} (Age: ${this.age})`;
        }
        getFullDetails() {
            return this.getInfo();
        }
    }

    class Student extends Person {
        constructor(name, age, course) {
            super(name, age);
            this.course = course;
        }
        getFullDetails() {
            return `${this.getInfo()}\nRole: Student\nCourse: ${this.course}`;
        }
    }

    class Teacher extends Person {
        constructor(name, age, subject) {
            super(name, age);
            this.subject = subject;
        }
        getFullDetails() {
            return `${this.getInfo()}\nRole: Teacher\nSubject: ${this.subject}`;
        }
    }

    var people = [
        new Student('Alice', 19, 'Computer Science'),
        new Student('Ravi', 21, 'Mathematics'),
        new Teacher('Dr. Kumar', 45, 'Physics'),
        new Teacher('Ms. Lee', 38, 'Literature')
    ];

    var listEl = document.getElementById('peopleList');
    var detailsEl = document.getElementById('details');

    function renderList() {
        listEl.innerHTML = '';
        for (var i = 0; i < people.length; i++) {
            (function(idx) {
                var p = people[idx];
                var li = document.createElement('li');
                li.textContent = p.name;
                var btn = document.createElement('button');
                btn.textContent = 'View';
                btn.addEventListener('click', function() {
                    detailsEl.textContent = p.getFullDetails();
                });
                li.appendChild(btn);
                listEl.appendChild(li);
            })(i);
        }
    }

    renderList();
});
