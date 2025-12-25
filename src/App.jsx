import { useRef, useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard/ProfileCard";
import ShinyText from "./components/ShinyText/ShinyText";
import TextType from "./components/TextType/TextType";
import BlurText from "./components/BlurText/BlurText";
import Lanyard from "./components/Lanyard/Lanyard";
import { listTools, listProject } from "./data";
import ChromaGrid from "./components/ChromaGrid/ChromaGrid";
import ProjectModal from "./components/ProjectModal/ProjectModal"; // <-- IMPORT MODAL
import LightRays from "./components/LightRays/LightRays";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const App = () => {
  const aboutRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null); // null = modal tertutup

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };
  // -------------------------

  useEffect(() => {
    const isReload =
      performance.getEntriesByType("navigation")[0]?.type === "reload";

    if (isReload) {
      // Ambil path tanpa hash
      const baseUrl = window.location.origin + "/portofolio/";
      window.location.replace(baseUrl);
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="absolute top-0 left-0 -z-10 h-full w-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#0284c7"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="hero grid grid-cols-1 items-center gap-6 pt-10 md:grid-cols-2 xl:gap-0">
          <div className="animate__animated animate__fadeInUp animate__delay-3s">
            <div className="bg mb-6 flex w-fit items-center gap-3 rounded-2xl bg-zinc-800 p-4">
              <img src="./assets/ilham.jpg" className="w-10 rounded-md" />
              <q>I'll Write My Own History</q>
            </div>
            <h1 className="mb-6 text-5xl font-bold text-sky-600">
              <TextType
                text={["Hi I'm Ilham Maulana", "Electrical Engineering"]}
                typingSpeed={75}
                pauseDuration={1500}
                showCursor={true}
                cursorCharacter="|"
              />
            </h1>
            <BlurText
              text="A passionate application and web developer dedicated to crafting modern, high-performance digital experiences through innovative and user-friendly solutions."
              delay={150}
              animateBy="words"
              direction="top"
              className="mb-6"
            />
            <div className="flex items-center gap-2 sm:gap-4">
              <a
                href="./assets/CV.pdf"
                download="Faris_Edrik_Prayoga_CV.pdf"
                className="rounded-full border border-gray-700 bg-[#1a1a1a] p-4 px-6 font-semibold transition-colors hover:bg-[#222]"
              >
                <ShinyText
                  text="Download CV"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>

              <a
                href="#project"
                className="rounded-full border border-gray-700 bg-[#1a1a1a] p-4 px-6 font-semibold transition-colors hover:bg-[#222]"
              >
                <ShinyText
                  text="Explore My Projects"
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </a>
            </div>
          </div>
          <div className="animate__animated animate__fadeInUp animate__delay-4s md:ml-auto">
            <ProfileCard
              name="Ilham Maulana"
              title="Web Developer"
              handle="dfaalt"
              status="Online"
              contactText="Contact Me"
              avatarUrl="./assets/ilham.jpg"
              showUserInfo={true}
              enableTilt={true}
              enableMobileTilt={false}
              onContactClick={() => console.log("Contact clicked")}
            />
          </div>
        </div>
        {/* tentang */}
        <div
          className="mx-auto mt-32 w-full max-w-[1600px] rounded-3xl border-[5px] border-sky-500/40 bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#1a1a1a] p-6 shadow-[0_0_30px_rgba(14,165,233,0.4)]"
          id="about"
        >
          <div
            className="flex flex-col items-center justify-between gap-10 px-8 pt-0 md:flex-row"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="basis-full border-b border-sky-500/30 pr-0 md:basis-7/12 md:border-r md:border-b-0 md:pr-8">
              {/* Kolom kiri */}
              <div className="flex-1 text-left">
                <h2 className="mb-5 text-3xl font-bold text-white md:text-4xl">
                  About Me
                </h2>

                <BlurText
                  text="I’m Ilham Maulana, a full-stack developer passionate about building modern, high-performance applications with an intuitive user experience. I enjoy working with the latest technologies like Artificial Intelligence, Machine Learning, and cloud-based development, blending creativity with precision to deliver impactful solutions. With over three years of experience and more than 20 completed projects, I’m committed to helping users and businesses grow in the digital era through functional, aesthetic, and scalable digital products."
                  delay={150}
                  animateBy="words"
                  direction="top"
                  className="mb-10 text-base leading-relaxed text-gray-300 md:text-lg"
                />

                <div className="mb-4 flex w-full flex-col items-center gap-y-8 text-center sm:flex-row sm:justify-between sm:gap-y-0 sm:text-left">
                  <div>
                    <h1 className="mb-1 text-3xl md:text-4xl">
                      20<span className="text-sky-500">+</span>
                    </h1>
                    <p>Project Finished</p>
                  </div>
                  <div>
                    <h1 className="mb-1 text-3xl md:text-4xl">
                      3<span className="text-sky-500">+</span>
                    </h1>
                    <p>Years of Experience</p>
                  </div>
                  <div>
                    <h1 className="mb-1 text-3xl md:text-4xl">
                      3.75<span className="text-sky-500">/4.00</span>
                    </h1>
                    <p>GPA</p>
                  </div>
                </div>

                {/* <ShinyText
                  text="Working with heart, creating with mind."
                  disabled={false}
                  speed={3}
                  className="text-sm text-sky-400 md:text-base"
                /> */}
              </div>
            </div>

            {/* Kolom kanan */}
            <div className="flex max-w-full basis-full justify-center overflow-hidden pl-0 md:basis-5/12 md:pl-8">
              <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />
            </div>
          </div>
        </div>
        <div className="tools mt-32">
          <h1
            className="mb-4 text-4xl/snug font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools & Technologies
          </h1>
          <p
            className="w-2/5 text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            My Profesional Skills
          </p>
          <div className="tools-box mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {listTools.map((tool) => (
              <div
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
                className="group flex items-center gap-4 rounded-xl border border-zinc-700 bg-zinc-900/60 p-4 shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-zinc-800/80"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="h-16 w-16 rounded-lg bg-zinc-800 object-contain p-2 transition-all duration-300 group-hover:bg-zinc-900"
                />
                <div className="flex flex-col overflow-hidden">
                  <div className="truncate">
                    <ShinyText
                      text={tool.nama}
                      disabled={false}
                      speed={3}
                      className="block text-lg font-semibold"
                    />
                  </div>
                  <p className="truncate text-sm text-zinc-400">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* tentang */}

        {/* Proyek */}
        <div
          className="proyek mt-32 py-10"
          id="project"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        ></div>
        <h1
          className="mb-2 text-center text-4xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-center text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Showcasing a selection of projects that reflect my skills, creativity,
          and passion for building meaningful digital experiences.
        </p>
        <div className="proyek-box mt-12">
          <div
            style={{ height: "auto", position: "relative" }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
            data-aos-once="true"
          >
            <ChromaGrid
              items={listProject}
              onItemClick={handleProjectClick} // Kirim fungsi untuk handle klik
              radius={500}
              damping={0.45}
              fadeOut={0.6}
              ease="power3.out"
            />
          </div>
        </div>
        {/* Proyek */}

        {/* Kontak */}
        <div className="kontak mt-32 p-0 sm:p-10" id="contact">
          <h1
            className="mb-2 text-center text-4xl font-bold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Contact & Chat
          </h1>
          <p
            className="mb-10 text-center text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Get in touch with me or chat in real-time
          </p>

          {/* Container dua kolom */}
          <div className="flex flex-col gap-8">
            {/* Contact Form di kanan */}
            <div className="flex justify-center">
              <form
                action="https://formsubmit.co/ilhammln1101@gmail.com"
                method="POST"
                className="w-full max-w-xl rounded-md bg-zinc-800 p-10"
                autoComplete="off"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="500"
                data-aos-once="true"
              >
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Full Name</label>
                    <input
                      type="text"
                      name="Name"
                      placeholder="Input Name..."
                      className="rounded-md border border-zinc-500 p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-semibold">Email</label>
                    <input
                      type="email"
                      name="Email"
                      placeholder="Input Email..."
                      className="rounded-md border border-zinc-500 p-2"
                      required
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="message" className="font-semibold">
                      Message
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      cols="45"
                      rows="7"
                      placeholder="Message..."
                      className="rounded-md border border-zinc-500 p-2"
                      required
                    ></textarea>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full cursor-pointer rounded-full border border-gray-700 bg-[#1a1a1a] p-4 px-6 font-semibold transition-colors hover:bg-[#222]"
                    >
                      <ShinyText
                        text="Send"
                        disabled={false}
                        speed={3}
                        className="custom-class"
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* Kontak */}
      </main>

      <ProjectModal
        isOpen={!!selectedProject}
        onClose={handleCloseModal}
        project={selectedProject}
      />
    </>
  );
};

export default App;
