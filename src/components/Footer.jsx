import "remixicon/fonts/remixicon.css";
import Dock from "./Dock/Dock";
import { VscHome, VscArchive, VscAccount } from "react-icons/vsc";

const Footer = () => {
  const items = [
    {
      icon: <VscHome size={18} />,
      label: "Home",
      onClick: () =>
        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscAccount size={18} />,
      label: "About Me",
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      icon: <VscArchive size={18} />,
      label: "Project",
      onClick: () =>
        document
          .getElementById("project")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <div className="relative z-10 mt-32 flex flex-col items-center pb-8">
      {/* Flex container adaptif */}
      <div className="flex w-full flex-col items-center gap-6 md:flex-row md:justify-between">
        {/* Judul - paling atas di mobile */}
        <h1 className="order-1 text-2xl font-bold md:order-none">Portofolio</h1>

        {/* Ikon Sosmed - di tengah di mobile */}
        <div className="order-2 flex gap-3 md:order-none">
          <a
            href="https://github.com/Dfaalt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill ri-2x"></i>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ilham-maulana1101"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
        </div>

        {/* Dock - paling bawah di mobile */}
        <div className="order-3 mt-15 md:order-none md:mt-0 md:mb-0">
          <Dock
            items={items}
            panelHeight={30}
            baseItemSize={60}
            magnification={100}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
