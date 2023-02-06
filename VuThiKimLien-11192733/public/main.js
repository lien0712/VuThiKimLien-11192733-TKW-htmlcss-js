
function getInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let info = JSON.parse(this.responseText);
            document.getElementById("info-email").innerText = info.Email;
            document.getElementById("info-hotline").innerText = info.Hotline;
            document.getElementById("info-addr").innerText = info.Address;
        }
    };
    xhttp.open("GET", "https://thietkeweb-88aba-default-rtdb.firebaseio.com/info.json", true);
    xhttp.send();
 }

getInfo();



