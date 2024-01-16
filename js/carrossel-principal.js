let count = 1;
document.getElementById("radio1").checked = true;

setInterval(() => {
    nextImage();
}, 4500);
    
function nextImage(){
    count++;
    if(count>5){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;

}