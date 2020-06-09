import Project from './projects';
//require('./projects');

/*
const Project = (name,desc) => {
    const sayName = () => {
        console.log(name);
    }

    return{name,desc,sayName}
}
*/

let myProject = Project("newProj","blah!");

myProject.sayName();
console.log(myProject.name);
console.log(myProject.desc);