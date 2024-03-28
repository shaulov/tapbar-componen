import { Tapbar } from "./components/tapbar/tapbar";
import "./App.css";

function App() {
  return (
    <div>
      <main>
        <section className="promo">
          <ul className="promo-list">
            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
              <li className="promo--card card" key={item}>
                <h3 className="card--title">
                  <span className="card--title-text">
                    Одноэтажный дом с двумя спальнями в стиле эклетика
                  </span>
                </h3>
                <img
                  className="card--img"
                  src="./images/image.png"
                  width="380"
                  height="677"
                  alt="Одноэтажный дом с двумя спальнями в стиле эклетика"
                />
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Tapbar />
    </div>
  );
}

export default App;
