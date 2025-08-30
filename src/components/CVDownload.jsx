import { AiOutlineDownload } from "react-icons/ai";
import cv from "../../public/MudasirAhmadResume-L.pdf";
const CVDownload = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="relative flex flex-col items-center">
        {/* hanger */}
        <div className="w-3 h-3 rounded-full border border-white/40 bg-white/10" />
        <div className="w-[2px] h-8 bg-white/30" />

        {/* swinging button */}
        <div className="swing origin-top">
          <a
            href={cv}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#0ef] text-black w-48 font-semibold shadow-[0_8px_30px_rgba(0,238,255,0.35)] hover:scale-[1.03] transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-[#0ef]/50"
          >
            <AiOutlineDownload className="w-5 h-5" /> Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default CVDownload;
