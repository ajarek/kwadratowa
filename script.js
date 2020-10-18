
 function wykres(){
       
           
    var a =parseFloat(document.getElementById('a').value);
  var b =parseFloat(document.getElementById('b').value);
   var c =parseFloat(document.getElementById('c').value);
    var limit = 21;
    var y = 40;
    var data = [];
    var dataSeries = {
       type: "area"
    };
    var dataPoints = [];
    for (var i = -20; i < limit; i += 1) {
       y = a * i * i + b * i + c;
       dataPoints.push({
          x: i,
          y: y
       });
    }
    dataSeries.dataPoints = dataPoints;
    data.push(dataSeries);
 
    //Better to construct options first and then pass it as a parameter
    var options = {
       zoomEnabled: false,
       animationEnabled: true,
       theme: "light2",
       title: {
       text: `Wykres : y=${a}x^2+${b}x+${c} `,
       fontSize: 20,
       fontStyle: "normal",
       },
       axisY: {
          includeZero: false,
          lineThickness: 1
       },
       data: data
    };
 
    var chart = new CanvasJS.Chart("chartContainer", options);
 
    chart.render();
 
 }

const btn = document.querySelector('#btn');
let a = document.querySelector('#a');
let b = document.querySelector('#b');
let c = document.querySelector('#c');
let opis = document.querySelector('#opis')

btn.addEventListener('click', function () {
wykres();
    function Kwadratowa(a, b, c, liczdelta, liczSqrtDelta, liczpierwiastek) {
        this.a = a.value;
        this.b = b.value;
        this.c = c.value;
        if (this.a != 0) {

            this.liczdelta = function () {
                let delta = this.b * this.b - 4 * this.a * this.c;
                return delta
            }
            this.liczSqrtDelta = function () {
                let SqrtDelta = Math.sqrt(this.liczdelta());
                return SqrtDelta;
            }
            this.liczpierwiastek = function () {
                if (this.liczSqrtDelta() > 0) {
                    let pierwiastek1 = (-this.b - this.liczSqrtDelta()) / 2 * this.a;
                    let pierwiastek2 = (-this.b + this.liczSqrtDelta()) / 2 * this.a;
                    let  wierzchP =-this.b / 2 * this.a;
                    let wierzchQ=this.liczdelta()/-4*this.a
                    let sumax1x2 =-this.b/this.a;
                    let iloczynx1x2=this.c/this.a;
                    return [pierwiastek1, pierwiastek2,wierzchP,wierzchQ,sumax1x2,iloczynx1x2];
                   
                }
                if (this.liczSqrtDelta() == 0) {
                    let pierwiastek1 = -this.b / 2 * this.a;
                    let pierwiastek2 = "x1 ";
                    let  wierzchP =-this.b / 2 * this.a;
                    let wierzchQ=this.liczdelta()/-4*this.a
                    return [pierwiastek1, pierwiastek2,wierzchP,wierzchQ];
                } else {
                    let pierwiastek1 ="delta<0 brak pierwiastków";
                    let pierwiastek2 = "delta<0 brak pierwiastków ";
                    let  wierzchP =-this.b / 2 * this.a;
                    let wierzchQ=this.liczdelta()/-4*this.a
                    return [pierwiastek1, pierwiastek2,wierzchP,wierzchQ];
                }
                
        
            }
        } else {
            alert(`funkcja nie jest kwadratowa`);
            window.location.reload();
        }

        
    }

    const wynik = new Kwadratowa(a, b, c);

    opis.innerHTML = `Delta= ${wynik.liczdelta()}<br/>
   Pierwiastek x1= ${wynik.liczpierwiastek()[0]} <br/>Pierwiastek x2= ${wynik.liczpierwiastek()[1]} <br/> Wierzchołek paraboli(${wynik.liczpierwiastek()[2]},${wynik.liczpierwiastek()[3]})<br/>Wzory Viete'a:<br/> x1+x2=${wynik.liczpierwiastek()[4]} <br/>x1*x2=${wynik.liczpierwiastek()[5]}`

   
   
})
