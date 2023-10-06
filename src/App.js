import Diena from "./Diena.js";

const pirmdienasStundas = [
  "sportsman",
  "dabaszinibas",
  "vesture",
  "krievu val",
];

const otrdienasStundas = [
  "matematika",
  "datorsistema",
  "dabaszinibas",
  "matematika",
];

const visasStundas = {
  pirmdiena: ["sports", "daba", "vesturiks", "krievja"],
};

export default function App() {
  return (
    <>
      <div></div>
      <Diena diena="Pirmdiena" stundas={pirmdienasStundas} />
      <Diena diena="otrdiena" stundas={otrdienasStundas} />
    </>
  );
}
