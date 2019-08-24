// homework 7
// eslint-disable-next-line func-names

document.body.onload = () => {
    // Task1
    function task1() {
        const student = {
            name: 'David Rayy',
            sclass: 'VI',
            rollno: 12,
        };
        // eslint-disable-next-line no-restricted-syntax
        for (const key in student) {
            if (typeof (student) === 'object') console.log(key);
        }
    }
    function task2() {
        const student = {
            name: 'David Rayy',
            sclass: 'VI',
            rollno: 12,
        };
        delete student.rollno;
        console.log(student);
    }
    function task3() {
        const student = {
            name: 'David Rayy',
            sclass: 'VI',
            rollno: 12,
        };
        console.log(Object.keys(student).length);
    }
    function task4() {
        const library = [
            {
                author: 'Bill Gates',
                title: 'The Road Ahead',
                readingStatus: true,
            },
            {
                author: 'Steve Jobs',
                title: 'Walter Isaacson',
                readingStatus: true,
            },
            {
                author: 'Suzanne Collins',
                title: 'Mockingjay: The Final Book of The Hunger Games',
                readingStatus: false,
            }];
        library.forEach((el) => {
            console.log(Object.values(el));
        });
    }
    function task7() {
        const stringForSubset = 'dog';
        function subString(word) {
            const result = [];
            for (let a = 0; a < word.length; a++) {
                for (let b = a + 1; b < word.length + 1; b++) {
                    result.push(word.slice(a, b));
                }
            }
            return result;
        }
        console.log(subString(stringForSubset));
    }
    function task10() {
        const library = [
            {
                title: 'The Road Ahead',
                author: 'Bill Gates',
                libraryID: 1254,
            },
            {
                title: 'Walter Isaacson',
                author: 'Steve Jobs',
                libraryID: 4264,
            },
            {
                title: 'Mockingjay: The Final Book of The Hunger Games',
                author: 'Suzanne Collins',
                libraryID: 3245,
            }];
        console.log(library.sort((a, b) => a.libraryID < b.libraryID));
    }
    function task14() {
        const student = {
            name: 'David',
            sclass: 'VI',
            rollno: 12,
        };
        console.log(Object.values(student));
    }
    function task16() {
        const student = {
            name: 'David',
            sclass: 'VI',
            rollno: 12,
        };
        const studentReverse = {};
        function reverseFunction(obj) {
            for (const key in obj) {
                studentReverse[obj[key]] = key;
            }
        }
        reverseFunction(student);
        console.log(studentReverse);
    }
    function task17() {
        const student = {
            name: 'David',
            sclass: 'VI',
            rollno: 12,
        };
        function checkProp(obj, propsName) {
            return obj.hasOwnProperty(propsName);
        }
        console.log(checkProp(student, 'name'));
    }
};
