// src/content/aboutUsData.ts
import teamMember1Img from "../../../assets/images/placeholder-team-1.jpg"; // Create placeholder images
import teamMember2Img from "../../../assets/images/placeholder-team-2.jpg";
import teamMember3Img from "../../../assets/images/placeholder-team-3.jpg";
import storyImage from "../../../assets/images/placeholder-story.jpg"
export const aboutUsContent = {
  hero: {
    headline1: "Despre",
    headline2: "Noi",
    subheading: "Angajamentul nostru pentru un viitor energetic sustenabil și eficient.",
    // You could add an image here if desired, similar to your main Hero.astro
  },
  missionVision: {
    title: "Misiunea și Viziunea Noastră",
    mission: {
      heading: "Misiunea Noastră",
      text: "Să oferim soluții energetice inovatoare și accesibile, contribuind la independența energetică a clienților noștri și la protejarea mediului înconjurător.",
    },
    vision: {
      heading: "Viziunea Noastră",
      text: "Să devenim lideri în tranziția către energia verde în România, recunoscuți pentru excelență, integritate și impactul pozitiv asupra comunităților.",
    },
  },
  story: {
    title: "Povestea Noastră",
    paragraphs: [
      "Fondată în [Anul înființării], compania noastră s-a născut din pasiunea pentru tehnologie și dorința de a face o diferență reală în sectorul energetic.",
      "Am început cu o echipă mică, dar dedicată, și am crescut constant, adaptându-ne la nevoile pieței și la cele mai recente inovații în domeniul energiei regenerabile.",
      "Astăzi, suntem mândri să fi ajutat sute de clienți să își reducă costurile cu energia și să contribuie la un mediu mai curat.",
    ],
    image: storyImage,
    imageAlt: "Imagine reprezentativă pentru povestea companiei",
  },
  team: {
    title: "Echipa Noastră",
    subheading: "Profesioniști dedicați succesului dumneavoastră",
    members: [
      {
        name: "Alex Popescu",
        role: "Fondator & CEO",
        image: teamMember1Img,
        bio: "Cu o viziune clară asupra viitorului energetic, Alex conduce echipa spre noi orizonturi.",
      },
      {
        name: "Ioana Marinescu",
        role: "Director Tehnic",
        image: teamMember2Img,
        bio: "Expertiza tehnică a Ioanei asigură calitatea și eficiența fiecărui proiect implementat.",
      },
      {
        name: "Cristian Dobre",
        role: "Manager Vânzări",
        image: teamMember3Img,
        bio: "Cristian este dedicat găsirii celor mai bune soluții pentru nevoile clienților noștri.",
      },
    ],
  },
  values: {
    title: "Valorile Noastre",
    items: [
      {
        name: "Inovație",
        description: "Căutăm continuu soluții noi și eficiente pentru a răspunde provocărilor energetice.",
        // icon: "💡" // You could add an icon component or SVG here
      },
      {
        name: "Integritate",
        description: "Acționăm cu transparență și responsabilitate în toate interacțiunile noastre.",
        // icon: "🤝"
      },
      {
        name: "Orientare către Client",
        description: "Succesul clienților noștri este prioritatea noastră principală.",
        // icon: "🎯"
      },
      {
        name: "Sustenabilitate",
        description: "Promovăm practici durabile pentru un impact pozitiv pe termen lung.",
        // icon: "🌿"
      },
    ],
  },
  cta: {
    heading: "Sunteți gata să faceți pasul către energia verde?",
    buttonText: "Contactați-ne Acum",
    buttonLink: "/contact", // Link to your contact page
  },
};