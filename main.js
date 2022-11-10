var messages = document.getElementById("messages");

async function GetMessageFromServer(){
    var response = await fetch("https://chatiavi.herokuapp.com/get/arick/7offset=0&limit=10");
    response = response.json();
    
    var allMesagesHTML = "";
    for(var i = 0; i < response.lenght; i++){
        var messageData = response[i];
        var message = `<div class="card-body">
        <h5 class="card-title">${messageData.Name}</h5>
        <p class="card-text">${messageData.Message}</p>
        </div>`;
        messages.innerHTML = message;
        allMesagesHTML += allMesagesHTML + message;
    }

}
GetMessageFromServer()