let $container = document.querySelector("#container");
function createGrid(dim){
    let size = dim **2;
    let divSize = 700 / dim;

    let calc = (divSize * 100)/700;

    for(let i = 0; i < size; i ++){
        let $div = document.createElement("div");
        $div.className = "grid_item";
        $div.style.flexBasis = `${calc}%`
        $container.appendChild($div)
    }
    

}
let dim = 4;
createGrid(dim);















