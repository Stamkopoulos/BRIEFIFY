import { useState, useEffect } from "react";
import { copy, link, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div className="flex flex-col w-full gap-2 ">
        <form
          className="relative flex justify-center items-center"
          onSubmit={() => {}}
        >
          <img src={linkIcon} alt="link_icon" />
        </form>
      </div>
    </section>
  );
};

export default Demo;
