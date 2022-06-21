NombreJugador1 = localStorage.getItem("Nombre del jugador 1")
NombreJugador2 = localStorage.getItem("Nombre del jugador 2")
update_player1_score = 0;
player1_score = 0;
update_player2_score = 0;
player2_score = 0;
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
function check()
{
    question_turn = "player1";
    answer_turn = "player2";
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }
    if(question_turn == "player1")
    {
        question_turn = "player2";
        document.getElementById("TurnoParaPreguntar").innerHTML = "Turno para preguntar - " + NombreJugador2;
    }
    else
    {
        question_turn = "player1";
        document.getElementById("TurnoParaPreguntar").innerHTML = "Turno para preguntar - " + NombreJugador1;
    }
    if(answer_turn == "player1")
    {
        answer_turn = "player2";
        document.getElementById("TurnoParaResponder").innerHTML = "Turno para responder - " + NombreJugador2;
    }
    else
    {
        answer_turn = "player1";
        document.getElementById("TurnoParaResponder").innerHTML = "Turno para responder - " + NombreJugador1;
    }
    document.getElementById("output").innerHTML = "";
}