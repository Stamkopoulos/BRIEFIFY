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
        Simplify Your Reading Journey with
        <br className="max-md:hidden" />
        <span className="orange_gradient">BRIEFIFY</span>
      </h1>
      <h2 className="desc">
        A user-friendly article summarizer that condenses lengthy articles into
        digestible summaries
      </h2>
    </header>
  );
};

export default Hero;
