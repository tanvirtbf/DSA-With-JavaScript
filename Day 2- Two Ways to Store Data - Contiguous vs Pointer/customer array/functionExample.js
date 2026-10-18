const DEFAULTSIZE=10;   

function customArray (index, value) {
    let length = 0; 
    let arraySize = DEFAULTSIZE;
    let custArray = new Array(arraySize);

    custArray[0] = 1;
    custArray[1] = 2;
    custArray[2] = 3;
    length = 3;

    if(index < 0 || index >= arraySize) {
        console.log("Index out of bound!" , index)
        return ;
    }

    if(index === length) {
        custArray[index] = value;
        console.log(custArray)
        return;
    }

    for(let i=length; i>index; i--) {
        let left = custArray[i-1];
        let right = custArray[i]

        custArray[i] = left;
        custArray[i-1] = right;
    }
    console.log(custArray)

}

customArray(3, 100)
