import { useState } from "react";
import "./App.css";
import pattern1 from "./assets/pattern1.png";
import pattern2 from "./assets/pattern2.png";
import pattern3 from "./assets/pattern3.png";
import logo from "./assets/vite.svg";
function App() {
  var [text, setText] = useState("");
  var slova = text.length;
  var rijeci = text.trim() == "" ? 0 : text.trim().split(" ").length;
  var recenice = text.trim() == "" ? 0 : text.trim().split(".").length;
  const density = () => {
    if (text.trim() === "") return [];

    const malaslova = text.toLowerCase();
    const bezrazmaka = malaslova.replaceAll(" ", "").split("");

    let brojac = {};
    let ukupnoslova = bezrazmaka.length;

    bezrazmaka.forEach((slovo) => {
      brojac[slovo] = (brojac[slovo] || 0) + 1;
    });

    const vrijednosti = Object.entries(brojac).map(([slovo, count]) => {
      const postotak = ((count / ukupnoslova) * 100).toFixed(2);
      return [slovo, { count, postotak: Number(postotak) }];
    });

    return vrijednosti.sort((a, b) => b[1].count - a[1].count).slice(0, 5);
  };
  return (
    <div class="stranica">
      <div class="topbar">
        <img class="topbarslika" src={logo} alt="slika" />
        <h1>Character counter</h1>
      </div>
      <h1 class="heading">Analyze your text</h1>
      <h1 class="heading">in real-time.</h1>
      <textarea
        name="text"
        id="text"
        rows={15}
        class="area"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div class="redak">
        <div class="characters">
          <div class="lijevo">
            <p class="counter">{slova}</p>
            <p class="opis">Total Characters</p>
          </div>
          <img class="slika" src={pattern1} alt="slika" />
        </div>
        <div class="word">
          <div class="lijevo">
            <p class="counter">{rijeci}</p>
            <p class="opis">Word Count</p>
          </div>
          <img class="slika" src={pattern2} alt="slika" />
        </div>
        <div class="sentence">
          <div class="lijevo">
            <p class="counter">{recenice}</p>
            <p class="opis">Sentence Count</p>
          </div>
          <img class="slika" src={pattern3} alt="slika" />
        </div>
      </div>
      <div class="podnaslov">
        <h1 class="density">Letter density</h1>
      </div>
      {density().map(([slovo, vrijednost], index) => (
        <div className="densityredak" key={index}>
          <p>{slovo}</p>

          <div className="progressiza">
            <div
              className="progressunutra"
              style={{ width: `${vrijednost.postotak}%` }}
            ></div>
          </div>

          <p>
            {vrijednost.count} ({vrijednost.postotak}%)
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
