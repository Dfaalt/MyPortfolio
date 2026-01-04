import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
// import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/express.svg";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/supabase.png";
// import Tools12 from "/assets/tools/flask.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/arduino.png";
import Tools15 from "/assets/tools/c++.png";
import Tools16 from "/assets/tools/python.png";
import Tools17 from "/assets/tools/html.png";
import Tools18 from "/assets/tools/css.png";
import Tools19 from "/assets/tools/ts.png";
import Tools20 from "/assets/tools/php.png";
import Tools21 from "/assets/tools/vite.png";
import Tools22 from "/assets/tools/mysql.png";

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "VS Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React Js",
    ket: "Framework",
    dad: "200",
  },
  // {
  //   id: 3,
  //   gambar: Tools3,
  //   nama: "Next JS",
  //   ket: "Framework",
  //   dad: "300",
  // },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node Js",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Express Js",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Supabase",
    ket: "BaaS",
    dad: "1100",
  },
  // {
  //   id: 12,
  //   gambar: Tools12,
  //   nama: "Flask",
  //   ket: "Framework",
  //   dad: "1200",
  // },
  {
    id: 13,
    gambar: Tools13,
    nama: "Firebase",
    ket: "BaaS",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Arduino IDE",
    ket: "Code Editor",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "C++",
    ket: "Language",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Python",
    ket: "Language",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "HTML",
    ket: "Language",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "CSS",
    ket: "Language",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "TypeScript",
    ket: "Language",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "PHP",
    ket: "Language",
    dad: "2000",
  },
  {
    id: 21,
    gambar: Tools21,
    nama: "Vite",
    ket: "Framework",
    dad: "2100",
  },
  {
    id: 22,
    gambar: Tools22,
    nama: "MySql",
    ket: "Framework",
    dad: "2200",
  },
];

import Project1 from "/assets/project/project1.webp";
import Project2 from "/assets/project/project2.webp";
import Project3 from "/assets/project/project3.webp";
import Project4 from "/assets/project/project4.webp";
import Project5 from "/assets/project/project5.webp";
import Project6 from "/assets/project/project6.webp";

export const listProject = [
  {
    id: 1,
    image: Project1,
    title: "Split Bill Website With React",
    subtitle: "A modern web application built with React.js...",
    fullDescription:
      "A modern web application built with React.js (Vite) and styled using Tailwind CSS to simplify group expense management. Users can add members, assign purchased items, and automatically split costs fairly including tax, service fees, discounts, and tips.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://split-bill-d.vercel.app/",
    dad: "100",
  },
  {
    id: 2,
    image: Project2,
    title: "Movies Website With React",
    subtitle: "Dflicks is a React JS-based website that provides...",
    fullDescription:
      "Dflicks is a React JS-based website that provides various information about movies using The Movie Database (TMDB) API. The application is designed with a responsive layout using Bootstrap and offers an interactive and informative user experience.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://dflicks.vercel.app/",
    dad: "200",
  },
  {
    id: 3,
    image: Project3,
    title: "Music Mood Detection Website With React",
    subtitle: "A modern web app that recommends music based...",
    fullDescription:
      "A modern web app that recommends music based on the user’s mood in real-time. Built with React.js (Vite) and styled using Bootstrap for a clean, responsive interface. Uses a Convolutional Neural Network (CNN) for emotion detection via webcam and integrates with the Spotify API to provide personalized playlists instantly.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://moodtunes-app.vercel.app/",
    dad: "300",
  },
  {
    id: 4,
    image: Project4,
    title: "Image Converter Website With React",
    subtitle: "Dfaalt Convert a modern image format converter built with...",
    fullDescription:
      "Dfaalt Convert a modern image format converter built with React, Vite & Tailwind v4. Convert between PNG, JPG, WebP, ICO with drag-and-drop interface. Features quality control, real-time preview, and 100% client-side processing for privacy. Responsive design with smooth UX. Clean code, easily extendable.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://image-converter-d.vercel.app/",
    dad: "400",
  },
  {
    id: 5,
    image: Project5,
    title: "ToDO List Website With React",
    subtitle: "A modern task management app built with React.js (vite)...",
    fullDescription:
      "A modern task management app built with React.js (Vite) and styled using Bootstrap for a clean, responsive, and user-friendly interface. Users can add, edit, complete, or delete tasks in real-time, with instant updates powered by React state management.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://todo-list-d.vercel.app/",
    dad: "500",
  },
  {
    id: 6,
    image: Project6,
    title: "Dfaalt Code Compiler",
    subtitle: "Dfaalt Code Compiler is a modern web-based code editor built...",
    fullDescription:
      "Dfaalt Code Compiler is a modern web-based code editor built with React.js (Vite) and TypeScript, styled using Tailwind CSS v4 and shadcn/ui, and powered by the Monaco Editor for a professional coding experience directly in the browser. It supports multiple languages including JavaScript, TypeScript, Python, C++, Java, and HTML/CSS/JS, with instant in-browser execution for JavaScript and TypeScript, live preview for web languages, and a fully client-side sandbox that ensures privacy with zero server-side code execution. The application features responsive design, keyboard shortcuts, file download support, and a scalable modular architecture, demonstrating strong expertise in modern front-end engineering and readiness for future cloud or backend integration.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://code-compiler-d.vercel.app/",
    dad: "600",
  },
];
