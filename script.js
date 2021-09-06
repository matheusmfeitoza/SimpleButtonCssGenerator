const form = document.getElementById('controles');
const resultado = document.querySelector('.css');
const btn = document.querySelector('.btn');
const btn2 = document.querySelector('.btn2')

const handleEvents = {
    element: btn,
    text(value){   
        this.element.innerText = value
    },
    color(value){
        this.element.style.color = value;
    },
    backgroundColor(value){
        this.element.style.backgroundColor = value;
    },
    height(value){
        this.element.style.height = value + 'px'
    },
    width(value){
        this.element.style.width = value + 'px'
    },
    border(value){
        this.element.style.border = value;
    },
    borderRadius(value){
        this.element.style.borderRadius = value + 'px'
    },
    fontFamily(value){
        this.element.style.fontFamily = value;
    },
    fontSize(value){
        this.element.style.fontSize = value + 'rem';
    }
}

function handleChange(event){
    const name = event.target.name;
    const valor = event.target.value;

    handleEvents[name](valor);
    getValuesCss()
    saveValues(name,valor)
}

function saveValues(name,value){
    localStorage[name] = value
}

function setLocalStorageValues(){
    const propriedades = Object.keys(localStorage)
    propriedades.forEach(propriedade =>{
        form.elements[propriedade].value = localStorage[propriedade]
        handleEvents[propriedade](localStorage[propriedade])
    })
    getValuesCss()
}
setLocalStorageValues()

form.addEventListener('change',handleChange);

function getValuesCss(){
   resultado.innerHTML = '<span>' + btn.style.cssText.split('; ').join('</span><span>')
}

function clearValuesStorage(){
    localStorage.clear();
    window.location.reload()
}

btn2.addEventListener('click',clearValuesStorage);