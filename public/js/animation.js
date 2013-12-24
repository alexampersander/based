// Two instance
var elem = document.getElementById('draw'),
    params = { width: 1000, height: 600 },
    two = new Two(params).appendTo(elem);

var box = two.makeRectangle(210, 150, 400, 250),
    lid = two.makeRectangle(210, 50, 420, 50),
    wrapping1 = two.makeRectangle(210, 75, 50, 100),
    wrapping2 = two.makeRectangle(210, 175, 50, 200);

box.fill = "#22C949";
box.noStroke();

lid.fill = "#23D94D";
lid.noStroke();

wrapping1.fill = "#FF5454";
wrapping1.noStroke();

wrapping2.fill = "#E34B4B";
wrapping2.noStroke();

lid.translation.set(210, 50);

two.update();