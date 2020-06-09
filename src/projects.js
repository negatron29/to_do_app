
const Project = (name,desc) => {
    const sayName = () => {
        console.log(name);
    }

    return{name,desc,sayName}
}

console.log('Projects has been loaded.');


export default Project