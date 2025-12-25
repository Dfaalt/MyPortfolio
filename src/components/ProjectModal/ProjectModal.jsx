import React, { useState, useEffect } from "react";
import { FiX, FiExternalLink } from "react-icons/fi";

const ProjectModal = ({ isOpen, onClose, project }) => {
  // State untuk mengontrol animasi penutupan
  const [isClosing, setIsClosing] = useState(false);

  // Fungsi untuk menangani penutupan dengan animasi
  const handleClose = () => {
    setIsClosing(true);
    // Tunggu animasi selesai (300ms) sebelum memanggil onClose dari props
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset state untuk pembukaan berikutnya
    }, 300);
  };

  // Mencegah scroll di background saat modal terbuka
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    // Cleanup function
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    // Overlay
    <div
      onClick={handleClose}
      className="bg-opacity-70 fixed inset-0 z-50 flex items-center justify-center bg-black p-4 transition-opacity duration-300"
    >
      {/* Modal Content */}
      <div
        onClick={(e) => e.stopPropagation()} // Mencegah modal tertutup saat diklik di dalam
        className={`w-full max-w-lg transform rounded-2xl border border-sky-500/50 bg-zinc-900 shadow-2xl shadow-sky-500/20 transition-transform duration-300 ${isClosing ? "animate-out" : "animate-in"}`}
      >
        {/* --- GAMBAR PROYEK --- */}
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full rounded-t-2xl object-cover"
        />

        <div className="flex flex-col gap-4 p-6">
          <div className="flex items-start justify-between">
            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
            <button
              onClick={handleClose}
              className="-mt-2 -mr-2 rounded-full p-2 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white"
            >
              <FiX size={24} />
            </button>
          </div>

          {/* --- DESKRIPSI LENGKAP --- */}
          <p className="text-base leading-relaxed text-zinc-300">
            {project.fullDescription}
          </p>

          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-transparent bg-sky-600 p-3 px-5 font-semibold transition-colors hover:bg-sky-700"
          >
            <FiExternalLink />
            <span>Link Website</span>
          </a>
        </div>
      </div>
      {/* CSS untuk animasi */}
      <style>{`
        @keyframes scaleIn {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        .animate-in {
          animation: scaleIn 0.3s ease-out forwards;
        }
        
        @keyframes scaleOut {
          from { transform: scale(1); opacity: 1; }
          to { transform: scale(0.95); opacity: 0; }
        }
        .animate-out {
          animation: scaleOut 0.3s ease-in forwards;
        }
      `}</style>
    </div>
  );
};

export default ProjectModal;
