function RandTable (strok,stolb) {
    let arr = [];
    let s = 0;
    for(i = 0; i< strok*stolb;i++){
    arr.push(Math.floor(Math.random() * 100))
    }
    var t = "<table>"
    for (var i = 0; i < stolb; i++) {
    t += "<tr>";
    for (var j = 0; j < strok; j++){
    if(arr[s]<50){
    t += "<td>" + arr[s] + "</td>";
    }else{
    t += `<td style="
    background-color: purple;
    ">` + arr[s] + "</td>";
    }
    
    s++
    }
    
    t += "</tr>";
    }
    return t + "</table>";
    }
    document.write (RandTable(6, 5));