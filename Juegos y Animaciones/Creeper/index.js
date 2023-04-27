let pantalla = document.querySelector("canvas");
let pincel = pantalla.getContext("2d");

pincel.fillStyle = "darkgreen";
pincel.fillRect(0, 0, 350, 300);
//ojo
pincel.fillStyle = "black"
pincel.fillRect(50,51,90,90)
//ojo
pincel.fillStyle = "black"
pincel.fillRect(300,51,-90,90)
//nariz
pincel.fillRect(210,140,-70,100)
//boca
pincel.fillRect(140,190,-50,110)
//boca
pincel.fillRect(260,190,-50,110)

