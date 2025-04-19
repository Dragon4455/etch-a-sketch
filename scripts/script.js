let $container = document.querySelector("#container");
function createGrid(dim){
    let size = 0;
    let divSize = 0;
    let calc = 0;
    size = dim **2;
    console.log(size)
    divSize = 700 / dim;

   calc = (divSize * 100)/700;

    for(let i = 0; i < size; i ++){
        let $div = document.createElement("div");
        $div.className = "grid_item";
        $div.style.flexBasis = `${calc}%`;
        $div.style.height = `${calc}%`;
        $div.style.backgroundColor = "transparent";
        $div.style.opacity = 0.2;
        $container.appendChild($div)
    }
    

}
let dim = 0;
createGrid(16);


function generateRandom(){
    let ran = Math.floor((Math.random() * 256));
    return ran;
}


document.addEventListener("mouseover", (e)=>{
    
        if(e.target.className === "grid_item"){
            if(e.target.style.backgroundColor === "transparent"){
            
            let red = generateRandom();
            let green = generateRandom();
            let blue = generateRandom();
            e.target.style.backgroundColor = `rgb(${red},${green},${blue})`;
        } else{
            let opacity = parseFloat(e.target.style.opacity);
            e.target.style.opacity = opacity + 0.1; 
        }
    }
    
    });

document.addEventListener("click", (e)=>{

    function clean(){
        let grids = document.querySelectorAll(".grid_item");
        
        grids.forEach(element => {
            element.remove(element)
        });
    }
    if(e.target.className === "clear"){
        let grids = document.querySelectorAll(".grid_item");
        
        grids.forEach(element => {
         
            element.style.backgroundColor = "transparent";
            element.style.opacity = 0.2;
           
        });
        
    }
    if(e.target.className=== "resize"){
        dim = parseInt(prompt("Set the new grid size (min: 1, max: 100)"));
        if(dim > 0 && dim < 100){
            clean();
            createGrid(dim);
        }else{
            alert("No valid (1-100)")
        }
    }
})












