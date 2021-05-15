axios.get('http://apiadvisor.climatempo.com.br/api/v1/forecast/locale/6879/days/15?token=TOKEN')
  .then(function (response) {
    // handle success
    console.log(response);

    let day = 0;

    dayinfo = (response.data.data);

    document.getElementById("city").innerHTML = response.data.name;
    document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
    document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";


    var today = new Date();
    let hoje = today.toDateString()
    hoje = hoje.slice(0, 3)
    console.log(hoje)

    if (hoje === "Mon") {
      document.getElementById("Mon").style.background = "#4489FB";
      document.getElementById("Mon").style.color = "black";
    }
    if (hoje === "Tue") {
      document.getElementById("Tue").style.background = "#4489FB";
      document.getElementById("Tue").style.color = "black";
    }
    if (hoje === "Wed") {
      document.getElementById("Wed").style.background = "#4489FB";
      document.getElementById("Wed").style.color = "black";
    }
    if (hoje === "Thu") {
      document.getElementById("Thu").style.background = "#4489FB";
      document.getElementById("Thu").style.color = "black";
    }
    if (hoje === "Fri") {
      document.getElementById("Fri").style.background = "#4489FB";
      document.getElementById("Fri").style.color = "black";
    }
    if (hoje === "Sat") {
      document.getElementById("Sat").style.background = "#4489FB";
      document.getElementById("Sat").style.color = "black";
    }

  })

let day = 0;
var today = new Date();
var hoje = today.toDateString()
hoje = hoje.slice(0, 3)

function nextday() {
  console.log(day);

  if (day < 14) {
    // se hoje for domingo
    if (hoje == "Sun") {
      hoje = hoje.replace("Sun", "Mon");
      hoje == "Mon";
      document.getElementById("Mon").style.background = "#4489FB";
      document.getElementById("Sun").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";

      return day;
    }

    // se hoje for Sabado
    if (hoje == "Sat") {
      hoje = hoje.replace("Sat", "Sun");
      hoje == "Sun";
      document.getElementById("Sun").style.background = "#4489FB";
      document.getElementById("Sat").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }

    // se hoje for sexta
    if (hoje == "Fri") {
      hoje = hoje.replace("Fri", "Sat");
      hoje == "Sat";
      document.getElementById("Sat").style.background = "#4489FB";
      document.getElementById("Fri").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }

    // se hoje for quinta
    if (hoje == "Thu") {
      hoje = hoje.replace("Thu", "Fri");
      hoje == "Fri";
      document.getElementById("Fri").style.background = "#4489FB";
      document.getElementById("Thu").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }

    // se hoje for quarta
    if (hoje == "Wed") {
      hoje = hoje.replace("Wed", "Thu");
      hoje == "Thu";
      console.log(hoje)

      document.getElementById("Thu").style.background = "#4489FB";
      document.getElementById("Wed").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }

    // se hoje for terça
    if (hoje === "Tue") {
      hoje = hoje.replace("Tue", "Wed");
      hoje === "Wed";
      console.log(hoje)

      document.getElementById("Wed").style.background = "#4489FB";
      document.getElementById("Tue").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }


    // se hoje for segunda:
    if (hoje == "Mon") {
      hoje = hoje.replace("Mon", "Tue");
      console.log(hoje)

      document.getElementById("Tue").style.background = "#4489FB";
      document.getElementById("Mon").style.background = "none";
      day = day + 1;

      document.getElementById("tempmin").innerHTML = dayinfo[day].thermal_sensation.min + "º";
      document.getElementById("tempmax").innerHTML = dayinfo[day].thermal_sensation.max + "º";
    }

  } else if (day === 14) {
    document.getElementById("Mon").style.background = "#F08196";
    document.getElementById("Tue").style.background = "#F08196";
    document.getElementById("Wed").style.background = "#F08196";
    document.getElementById("Thu").style.background = "#F08196";
    document.getElementById("Fri").style.background = "#F08196";
    document.getElementById("Sat").style.background = "#F08196";
    document.getElementById("Sun").style.background = "#F08196";
  }

}