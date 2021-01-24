//https://www.codewars.com/kata/57a4d500e298a7952100035d/train/javascript

function hexToDec(hexString){
    //Split into pieces
    const split = hexString.split("")
    
    //Function to determine value of single hex char
    const singleHexValue = (value) => {
        switch (value.toUpperCase()){
          case "1":
            return 1
            break
            
          case "2":
            return 2
            break
            
          case "3":
            return 3
            break
            
          case "4":
            return 4
            break
            
          case "5":
            return 5
            break
  
          case "6":
            return 6
            break
              
          case "7":
            return 7
            break
              
          case "8":
            return 8
            break
              
          case "9":
            return 9
            break
              
          case "A":
            return 10
            break
              
          case "B":
            return 11
            break
              
          case "C":
            return 12
            break
              
          case "D":
            return 13
            break
              
          case "E":
            return 14
            break
    
          case "F":
            return 15
            break
                
          default:
            return 0
            break
        }
    }
  
          //function to find value of hec
          const hexDecimalValue = (hex, place) => {
            return singleHexValue(hex) * 16 ** place
         }
   
         // add up all the hex numbers
         const result = split.reverse().reduce((acc, item, index) => {
           return acc += hexDecimalValue(item, index)
         }, 0)
  
         return split[split.length - 1] === "-" ? result * -1 : result
  
    }
  
    console.log(hexToDec("1F"))