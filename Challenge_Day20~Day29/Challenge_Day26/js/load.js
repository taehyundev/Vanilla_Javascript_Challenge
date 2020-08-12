var fileInput = document.getElementById("image")
fileInput.addEventListener("change",(e)=>{
    console.log(event.target.files)
    for (var image of event.target.files) { 
        //file reader
        var reader = new FileReader(); 
        reader.onload = function(event) {
            var img = document.createElement("img"); img.setAttribute("src", event.target.result); document.querySelector("div#image_container").appendChild(img); 
        }; 
        console.log(image); 
        reader.readAsDataURL(image); 
    }
})
