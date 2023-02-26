// Validation
const Joi = require("joi");

 const passwordSchema = Joi.string().min(3).max(14).alphanum();
//  console.log(passwordSchema.validate('q'));
//  console.log(passwordSchema.validate('YuriyPilipenko'));




   
 function getRandomHexColor() {
    return `${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)
     }`;
     }

function hexToRgb(hex){
    const converter = [hex.slice(0, 2), hex.slice(2, 4), hex.slice(4, 6)]; //definir os intervalos para corte (FF, FF, FF)
    const keep = [];
    let i = 0;
    // console.log(converter);
    
    converter.forEach(element => {
    keep[i] = parseInt(element, 16); // estrutura para converter o valor cortado e armazenar o mesmo na posicao do vetor
    i+=1; //contador
    });
    
    return (keep.join()); //utilizar .join() no vetor para exibir os elementos do vetor juntos
    }

    let hexValue  =  getRandomHexColor()
    let rgbValue = hexToRgb(hexValue)

    // console.log(hexValue);
    // console.log(rgbValue);
    const colors = []

function createObjectOfColors(x){
   
    const item = {};
    let y = getRandomHexColor()
    item.hex = `#${y}`;
    item.rgb = `${hexToRgb(y)}`;
    // console.log(item);
    
    colors.push(item);
    return colors;
}
    
    for (let i = 0; i < 14; i+=1) {   
        createObjectOfColors() 
    }

// console.log(colors); // array of colors

const jsonData = JSON.stringify(colors)
// console.log(jsonData);