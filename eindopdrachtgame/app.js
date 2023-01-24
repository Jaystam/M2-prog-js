class App
{
    runApplication()
    {
        console.log("hello World!");
        let canvas = document.getElementById("canvasId");

        let g = canvas.getContext("2d");
        this.tekenhuis(700,200,g);
        this.tekenhuis(600,200,g);
        this.tekenhuis(500,200,g);
        this.tekenhuis(400,200,g);
        this.tekenhuis(300,200,g);
        this.tekenhuis(200,200,g);
        this.tekenhuis(100,200,g);
        this.tekenhuis(0,200,g);
        this.tekenhuis(700,400,g);
        this.tekenhuis(600,400,g);
        this.tekenhuis(500,400,g);
        this.tekenhuis(400,400,g);
        this.tekenhuis(300,400,g);
        this.tekenhuis(200,400,g);
        this.tekenhuis(100,400,g);
        this.tekenhuis(0,400,g);
        
        this.tekenKerstBoom(120, 690, g);
        this.tekenKerstBoom(240, 600, g);
        this.tekenKerstBoom(50, 530, g);
        this.tekenKerstBoom(70, 70, g);
        this.tekenKerstBoom(300, 90, g);
        this.tekenKerstBoom(700, 600, g);
        this.tekenKerstBoom(480, 670, g);
        this.tekenKerstBoom(500, 60, g);
        this.tekenKerstBoom(680, 80, g);

        this.sneeuwpoppen(640, 120, g);
        this.sneeuwpoppen(420, 650, g);

        this.straat(200, 200, g)
        this.tekst(200, 300, g)
        console.log(canvas);
    }

    tekenKerstBoom(x, y, g){
        this.tekenKerstBoomDriehoek(x, y,g);
        this.tekenKerstBoomDriehoek(x, y+30,g);
        this.tekenKerstBoomDriehoek(x, y+60,g);
    }

    tekenhuis(x,y,g){
        g.beginPath();
        g.fillStyle = "red";
        g.moveTo(30+x,10+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(30+x,10+y);
        g.fill();
        g.closePath();

        g.beginPath();
        g.fillStyle ="grey";
        g.lineTo(70+x,20+y);
        g.lineTo(80+x,30+y);
        g.lineTo(80+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.lineTo(80+x,30+y);
        g.fill();
        g.stroke();
        g.closePath();
    }

    tekenKerstBoomDriehoek(x,y,g){
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(x, y);
        g.lineTo(50+x,y-50);
        g.lineTo(100+x, 0+y);
        g.fill();
        g.fillStyle = "brown";
        g.fillRect(x+38, y+20, 23, 30);
    }

    sneeuwpoppen(x,y,g){
        for (var i = 0; i < 6; i++)
        g.beginPath();
        if (i%2 == 0)
        g.fillStyle = 'black';
        g.arc(x , y, 20, 0, 2 * Math.PI);
        g.arc(x , y+37, 30, 0, 2 * Math.PI);
        g.fill();
        for (var i = 0; i < 6; i++)
        g.beginPath();
        if (i%2 == 0)
        g.fillStyle = 'white';
        g.arc(x , y, 15, 0, 2 * Math.PI);
        g.arc(x , y+37, 25, 0, 2 * Math.PI);
        g.fill();
        for (var i = 0; i < 6; i++)
        g.beginPath();
        if (i%2 == 0)
        g.fillStyle = 'black';
        g.arc(x+7 , y-4, 3, 0, 2 * Math.PI);
        g.arc(x-7, y-4, 3, 0, 2 * Math.PI);
        g.fillRect(x-5, y+3, 10, 5);
        g.fill();
    }

    straat(x,y,g){
        g.fillStyle = "grey";
        g.fillRect(x+-200, y+80, 800, 110);
        g.fillStyle = "black";
        g.fillRect(x+-200, y+129, 20, 10);
        g.fillRect(x+-160, y+129, 20, 10);
        g.fillRect(x+-120, y+129, 20, 10);
        g.fillRect(x+-80, y+129, 20, 10);
        g.fillRect(x+-40, y+129, 20, 10);
        g.fillRect(x+-0, y+129, 20, 10);
        g.fillRect(x+40, y+129, 20, 10);
        g.fillRect(x+80, y+129, 20, 10);
        g.fillRect(x+120, y+129, 20, 10);
        g.fillRect(x+160, y+129, 20, 10);
        g.fillRect(x+200, y+129, 20, 10);
        g.fillRect(x+240, y+129, 20, 10);
        g.fillRect(x+280, y+129, 20, 10);
        g.fillRect(x+320, y+129, 20, 10);
        g.fillRect(x+360, y+129, 20, 10);
        g.fillRect(x+400, y+129, 20, 10);
        g.fillRect(x+440, y+129, 20, 10);
        g.fillRect(x+480, y+129, 20, 10);
        g.fillRect(x+520, y+129, 20, 10);
        g.fillRect(x+560, y+129, 20, 10);
    }
}

let app = new App();
app.runApplication();