function someFunc():void{
    if(true){
        var localVar:number = 10
        console.log(localVar)
    }
    console.log(localVar)

    function nested():void{
        console.log(localVar)
    }
    nested()
}

someFunc()