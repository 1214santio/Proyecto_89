document.getElementById("player1_name").innerHTML = localStorage.getItem("Nombre del jugador 1")
document.getElementById("player2_name").innerHTML = localStorage.getItem("Nombre del jugador 2")
document.getElementById("TurnoParaPreguntar").innerHTML = "Turno para preguntar - " + localStorage.getItem("Nombre del jugador 1")
document.getElementById("TurnoParaResponder").innerHTML = "Turno para responder - " + localStorage.getItem("Nombre del jugador 2")
function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Respuesta: <input type = 'text' id = 'input_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'>Comprobar</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}