import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/stamkopoulos")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Summarization Made Easy with
        <br className="max-md:hidden" />
        <span className="orange_gradient">BRIEFIFY</span>
      </h1>
      <h2 className="desc">
        Enhance your reading experience with
        <span className="orange_gradient"> BRIEFIFY</span>, an open-source
        article summarization solution that simplifies lengthy articles into
        precise and condensed summaries
      </h2>
    </header>
  );
};

export default Hero;
