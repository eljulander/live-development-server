
while (1 == 1){
    var line = "";
    for(i = 0; i < 80; i++)
        line += String.fromCharCode(Math.floor(Math.random()*120));
    console.log(line)
}