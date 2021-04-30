import { ICalculator } from "../../domain";

export class Calculator implements ICalculator {
  execute(expression : string[] ) : string {
    
    let sumTotal = 0
        
    let CurrentOperation = ''

    expression.forEach( (item , index) => {

      if( item === '+' || item === '-' || item === 'x' || item === '/'){

        CurrentOperation = item

      } else if ( index === 0) {

        sumTotal = parseInt(item)

      } else {
        
        switch(CurrentOperation) {

        case '+' :
          sumTotal = sumTotal + parseInt(item)
          break

        case '-': 
          sumTotal = sumTotal - parseInt(item)
          break

        case 'x':
          sumTotal = sumTotal * parseInt(item)
          break

        case '/':        
          sumTotal = sumTotal / parseInt(item)
          break
      }
        }     
    })
   return sumTotal.toString()
  }
}