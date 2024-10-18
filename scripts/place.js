
temp = document.getElementById('temp').innerHTML; 
speed = document.getElementById('speed').innerHTML; 
feelTemp = document.getElementById('feelTemp');
let wc = 0;

console.log(temp);
console.log(speed);

function calculateWindChill(speed, temp) {
        
     if (temp <= 10 && speed > 4.8) {
           //Compute the windchill in Celsius
        wc = 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed,0.16)) + (0.3965 * temp) * Math.pow(speed,0.16);
       
       //wc = 35.74 + 0.6215 * temp - 35.75 * Math.pow(speed, 0.16) + 0.4275 * temp * Math.pow(speed, 0.16);//

        console.log(wc);
        // Round the answer down to integer
        wc = Math.round(wc * 10)/10;

        // if chill is greater than temp. return the temp
        wc = (wc > temp) ? temp : wc;

        // Display the windchill
        console.log(wc);

        //wc = `feels like ${wc} 0F`

        feelTemp.innerHTML = wc;
     } else {
        feelTemp.innerHTML = "N/A";
     }
}


 console.log(calculateWindChill(speed, temp));



let text = document.lastModified;
document.getElementById("demo").innerHTML = text;

var date = new Date(); 
var year = date.getFullYear();
document.getElementById('curYr').innerHTML = year