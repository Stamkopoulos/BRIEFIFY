import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex fustify-between items-center w-full">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() => window.open("https://github.com/stamkopoulos")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>
    </header>
  );
};

export default Hero;
