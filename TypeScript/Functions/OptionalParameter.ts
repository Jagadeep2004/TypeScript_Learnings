function showDetails(id:number,name:string,email?:string){
    console.log("ID",id,"NAME",name)
    if(email != undefined){
        console.log("Email",email);
}
}
showDetails(101,"Virat")
showDetails(102,"Sachin","abc@gmail.com")
