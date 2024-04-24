"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const form = document.querySelector("#busca > form");
const input = document.querySelector("#input-localizacao");
const sectionTempoInfos = document.querySelector("#tempo-info");
form === null || form === void 0 ? void 0 : form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
    event.preventDefault();
    if (!input || !sectionTempoInfos)
        return;
    const localizacao = input.value;
    if (localizacao.length < 3) {
        alert("Digite uma localização válida");
        return;
    }
    try {
        const response = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=3f87189fc7eabdb429172ef7b228d0f9&lang=pt_br&units=metric`);
        const data = yield response.json();
        console.log(data);
        const infos = {
            temperatura: Math.round(data.main.temp),
            cidade: data.name,
            icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        };
        const climaMain = data.weather[0].main;
        const climaDescription = data.weather[0].description;
        // clear (sao paulo), rain (nova iorque), Clouds (londres)
        if (climaMain === "Clear") {
            document.body.className = "clear";
        }
        else if (climaMain === "Rain") {
            document.body.className = "rain";
        }
        else if (climaMain === "Clouds") {
            document.body.className = "clouds";
        }
        else {
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
    }
    catch (error) {
        alert("Erro ao buscar informações");
        console.error(error);
    }
}));
