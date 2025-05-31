import img1 from "./assets/solar3.webp";
import img2 from "./assets/wind.webp";
// TODO
import img3 from "./assets/hydro.webp";
import img4 from "./assets/storage.webp";
// TODO
import img5 from "./assets/smart-grid.webp";
import img6 from "./assets/green.webp";

export const servicesSectionData = {
  title: "Serviciile Noastre",
  subheading: {
    text1_1: "Peste 10 ani de inovație în",
    text1_2: "energie regenerabilă pentru clienți mulțumiți.",
    text2:
      "Din 2014 proiectăm, instalăm și întreținem sisteme fotovoltaice și instalații electrice respectând standardele ANRE & ISO.",
  },
  services: [
    {
      title: "Sisteme fotovoltaice rezidențiale și industriale",
      briefDescription:
        "Proiectare, execuție, racordare și mentenanță pentru instalații de la câțiva kW până la parcuri de zeci de MW.",
      visual: img1,
    },
    {
      title: "Consultanță de finanțare (Casa Verde, Electric Up)",
      briefDescription:
        "Pregătirea dosarului, depunere, relația cu autoritățile și raportări pe toată durata programului.",
      visual: img2,
    },
    {
      title: "Instalații electrice - civile și industriale",
      briefDescription:
        "De la instalații interioare pentru clădiri până la alimentarea și iluminatul exterior al spațiilor publice sau de producție.",
      visual: img3,
    },
    {
      title: "Automatizări și integrare sisteme smart",
      briefDescription:
        "Obținerea avizelor, executarea lucrărilor și emiterea Certificatului de Racordare pentru consumatori sau prosumatori.",
      visual: img6,
    },
    {
      title: "Branșamente electrice de joasă tensiune si racordare la rețea",
      briefDescription:
        "Proiectare și implementare de soluții SCADA/PLC, optimizare proces și monitorizare energetică.",
      visual: img4
    },
    {
      title: "Service, mentenanță și upgrade capacități existente",
      briefDescription:
        "Inspecții periodice, reparații echipamente electrice/electronice și extinderea sistemelor fotovoltaice deja instalate.",
      visual: img5,
    },
  ],
  callToAction:
    "Discover the Future of Green Energy. Choose Your Sustainable Solution Today!",
  buttonText: "Explore More",
};
