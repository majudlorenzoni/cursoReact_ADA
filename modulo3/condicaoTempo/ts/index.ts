const form = document.querySelector("#busca > form");
const input: HTMLInputElement | null = document.querySelector("#input-localizacao");

const sectionTempoInfos = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if(!input || !sectionTempoInfos) return;
  
  const localizacao = input.value;

  if(localizacao.length < 3) {
    alert("Digite uma localização válida");
    return;
  }

  try {

    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=3f87189fc7eabdb429172ef7b228d0f9&lang=pt_br&units=metric`)
    
    const data = await response.json();
    console.log(data);
    const infos = {
      temperatura: Math.round(data.main.temp),
      cidade: data.name,
      icone:`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    }
    
    const climaMain = data.weather[0].main;
    const climaDescription = data.weather[0].description;

    // clear (sao paulo), rain (nova iorque), Clouds (londres)
      if (climaMain === "Clear") {
        document.body.className = "clear";
      } else if (climaMain === "Rain") {
        document.body.className = "rain";
      } else if (climaMain === "Clouds") {
        document.body.className = "clouds";
      } else {
        document.body.className = "default";
      }
    

    console.log(climaMain, climaDescription);

    sectionTempoInfos.innerHTML = `
    <div class="tempo-dados">
    
    <div id="dados">
    <h2>${infos.cidade}</h2>
    <span>${infos.temperatura}°C</span>
    </div>
    
    <img src="${infos.icone}" alt="" width="100px">
    </div>
    `;
    
  } catch (error) {
    alert("Erro ao buscar informações");
    console.error(error);
}
});