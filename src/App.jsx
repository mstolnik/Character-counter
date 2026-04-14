import { useState } from "react";
import "./App.css";
import pattern1 from "./assets/pattern1.png";
import pattern2 from "./assets/pattern2.png";
import pattern3 from "./assets/pattern3.png";
import logo from "./assets/vite.svg";
function App() {
  return (
    <div class="stranica">
      <div class="topbar">
        <img class="topbarslika" src={logo} alt="slika" />
        <h1>Character counter</h1>
      </div>
      <h1 class="heading">Analyze your text</h1>
      <h1 class="heading">in real-time.</h1>
      <textarea name="text" id="text" rows={15} class="area"></textarea>
      <div class="redak">
        <div class="characters">
          <div class="lijevo">
            <p class="counter">278</p>
            <p class="opis">Total Characters</p>
          </div>
          <img class="slika" src={pattern1} alt="slika" />
        </div>
        <div class="word">
          <div class="lijevo">
            <p class="counter">278</p>
            <p class="opis">Word Count</p>
          </div>
          <img class="slika" src={pattern2} alt="slika" />
        </div>
        <div class="sentence">
          <div class="lijevo">
            <p class="counter">278</p>
            <p class="opis">Sentence Count</p>
          </div>
          <img class="slika" src={pattern3} alt="slika" />
        </div>
      </div>
      <div class="podnaslov">
        <h1 class="density">Letter density</h1>
      </div>
      <div class="densityredak">
        <p>E</p>
        <div class="progressiza">
          <div class="progressunutra"></div>
        </div>
        <p>40(16,06%)</p>
      </div>
    </div>
  );
}

export default App;
