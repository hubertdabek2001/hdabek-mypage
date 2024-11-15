/* ------------------------ about me tab links -------------------------*/
        var tablinks = document.getElementsByClassName("tab-links");
        var tabcontents = document.getElementsByClassName("tab-contents");
        function opentab(tabname){
            for(tablink of tablinks){
                tablink.classList.remove("active-link");
            }
            for(tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");
        }
/* ---------------------------- header side menu ----------------------------- */
        var sidemenu = document.getElementById("sidemenu");

        function openmenu(){
            sidemenu.style.right = "0";
        }
        function closemenu(){
            sidemenu.style.right = "-200px";
        }

        /* Servicenow dev section */
        document.getElementById("learn-more").addEventListener("click", function() {
            document.getElementById("more-window-servicenow").classList.add("active");
           
            document.getElementById("containter-1").style.display = "none";
            document.getElementById("containter-2").style.display = "none";
            document.getElementById("containter-3").style.display = "none";
          });
    function closeServices(){
        document.getElementById("more-window-servicenow").classList.remove("active");
            document.getElementById("containter-1").style.display = "";
            document.getElementById("containter-2").style.display = "";
            document.getElementById("containter-3").style.display = "";
    }
    /* IT service desk section */
    document.getElementById("learn-more-it").addEventListener("click", function() {
        document.getElementById("more-window-it").classList.add("active");
       
        document.getElementById("containter-1").style.display = "none";
        document.getElementById("containter-2").style.display = "none";
        document.getElementById("containter-3").style.display = "none";
      });
function closeServicesIT(){
    document.getElementById("more-window-it").classList.remove("active");
        document.getElementById("containter-1").style.display = "";
        document.getElementById("containter-2").style.display = "";
        document.getElementById("containter-3").style.display = "";
}
/* --------------------- contact form ---------------------------*/
  const scriptURL = 'https://script.google.com/macros/s/AKfycbwDjvmb56qkfNqqbBmMqwBgDnMqlKx8XZyR5Tk3wHVVABMNyQCypdIUmJ8DDyNKOAm5rw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg");

  form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Message send successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry)
            if(entry.isIntersecting){
                entry.target.classList.add('show');
            }
            else{
                entry.target.classList.remove('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));


/* ------------------------------- weather --------------------------- */
class Weather {
    constructor(temp, feelsLike, tempMin, tempMax, pressure, humidity, visibility, windSpeed, country, name, time) {
        this.temp = parseFloat(temp);
        this.feelsLike = parseFloat(feelsLike);
        this.tempMin = parseFloat(tempMin);
        this.tempMax = parseFloat(tempMax);
        this.pressure = parseInt(pressure);
        this.humidity = parseInt(humidity);
        this.visibility = parseInt(visibility);
        this.windSpeed = parseFloat(windSpeed);
        this.country = country;
        this.name = name;
        this.time = new Date(time * 1000).toLocaleString(); // Convert Unix timestamp to readable date
    }
}

async function fetchData() {
    const url = 'https://open-weather13.p.rapidapi.com/city/krakow/PL';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '438e0514f9msheaccacb1382eeb5p15f4ccjsnc945be2971e9',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	displayData(result);
} catch (error) {
	console.error(error);
}
}


function displayData(result) {
    const resultBarData = document.getElementById('weather');
    
    const weatherData = new Weather(
        result.main.temp,
        result.main.feels_like,
        result.main.temp_min,
        result.main.temp_max,
        result.main.pressure,
        result.main.humidity,
        result.visibility,
        result.wind.speed,
        result.sys.country,
        result.name,
        result.dt
    );

    resultBarData.innerHTML = `
    <div class="container">
        <h1 class="sub-title">Weather in ${weatherData.name}, ${weatherData.country}</h1>
        <table class="cities">
            <tr>
                <td>Temperature</td>
                <td>Feels Like</td>
                <td>Min Temp</td>
                <td>Max Temp</td>
            </tr>
            <tr>
                <td>${weatherData.temp} °F</td>
                <td>${weatherData.feelsLike} °F</td>
                <td>${weatherData.tempMin} °F</td>
                <td>${weatherData.tempMax} °F</td>
            </tr>
            <tr>
                <td>Pressure</td>
                <td>Humidity</td>
                <td>Visibility</td>
                <td>Wind Speed</td>
            </tr>
            <tr>
                <td>${weatherData.pressure} hPa</td>
                <td>${weatherData.humidity} %</td>
                <td>${weatherData.visibility} m</td>
                <td>${weatherData.windSpeed} m/s</td>
            </tr>
            <tr>
                <td colspan="4">Time: ${weatherData.time}</td>
            </tr>
        </table>
    </div>
    `;
}

fetchData();


const image = document.querySelector('.hover-image');

image.addEventListener('mouseover', () => {
    document.getElementById('hover-image').style.display = '';
});

image.addEventListener('mouseout', () => {
    document.getElementById('hover-image').style.display = 'none';
});
