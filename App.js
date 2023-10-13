import Diena from "./Diena.js";
import styles from "./global.css";

function App() {
  const visasStundas = [
    {
      diena: "Pirmdiena",
      stundas: ["sportsman", "dabaszinibas", "vesture", "krievu val"],
    },

    {
      diena: "Otrdiena",
      stundas: ["matematika", "datorsistema", "dabaszinibas", "matematika"],
    },

    {
      diena: "Tresdiena",
      stundas: ["sports", "sports", "VAM", "VAM"],
    },

    {
      diena: "Ceturtdiena",
      stundas: ["ne", "ja", "ne", "ja"],
    },

    {
      diena: "Piektdiena",
      stundas: [
        "sanemt no jekaba savu datoru",
        "iespejams",
        "nezinu",
        "ganjau",
      ],
    },
  ];

  const dienasJSX = visasStundas.map((diena, indekss) => {
    return <Diena key={indekss} diena={diena.diena} stundas={diena.stundas} />;
  });
  return (
    <>
      <div>
        <h1> STUNDU SARAKSTS</h1>
      </div>
      {dienasJSX}
    </>
  );
}

export default App;
