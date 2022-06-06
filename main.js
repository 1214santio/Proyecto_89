function adduser()
{
    var NombreJugador1 = document.getElementById("nombre1").value;
    var NombreJugador2 = document.getElementById("nombre2").value;
    localStorage.setItem("Nombre del jugador 1", NombreJugador1);
    localStorage.setItem("Nombre del jugador 2", NombreJugador2);
    window.location = "index2.html";
}