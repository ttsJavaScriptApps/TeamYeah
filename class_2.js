// var list = ["pop tarts", "ramen noodles", "chips", "salsa", "coffee"];
//
// list.push ("fruit loops");
//
// list[4] = "fair trade coffee";
//
// list.splice (2, 2, "rice", "beans");
//
// console.log(list);
//
// var cart = [];
//
// cart.push(list.pop());
// cart.push(list.shift());
//
// while (list.length > 0) {
//   cart.push(list.pop());
//
// }
// cart.sort().reverse();
//
// console.log("my cart contains: ", cart.join(","));


var course = {
    name: 'JavaScript Applications',
    awesome: true,
    teachers: ['Assaf', 'Shane'],
    students: [
        {
            name: 'Steve',
            computer: {
                OS: 'Linux',
                type: 'laptop'
            }
        },
        {
            name: 'Katy',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        },
        {
            name: 'Chuck',
            computer: {
                OS: 'OSX',
                type: 'macbook'
            }
        }

    ],
    preReqs : {
        skills : ['html', 'css', 'git'],
        equipment: {
            laptop: true,
            OSOptions: ['linux', 'osx']
        }
    }
};

console.log ("OSOption 1 is " + course.preReqs.equipment.OSOptions[0] + "2 is " + course.preReqs.equipment.OSOptions[0] + "." );
