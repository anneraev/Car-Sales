const fragment = document.createDocumentFragment()

const createEntry = (key, value1, value2, type, endBreak) => {
    element = document.createElement(type)
    if (key && key !== "Profit"){
        element.innerHTML += `${key}: `
    } else if (key){
        element.innerHTML += `${key} $`
    }

    element.innerHTML += `${value1} `;

    if (value2){
        element.innerHTML+= value2
    }
    if (endBreak){
        element.innerHTML+= "<hr>"
    }
    console.log(element);
    fragment.appendChild(element);
}