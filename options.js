Check.addEventListener("click", async () => {
    let arrayList=new Array();
    var c1 = document.getElementById("c1");  
    var c2 = document.getElementById("c2");  
    var c3 = document.getElementById("c3");
    console.log(document.getElementById("c1").value);
    if(c1.checked ==true){
        arrayList.push(document.getElementById("c1").value)
    } 
    if(c2.checked ==true){
        arrayList.push(document.getElementById("c2").value)
    }
    if(c3.checked ==true){
        arrayList.push(document.getElementById("c3").value)
    } 
        console.log(arrayList);
  });

