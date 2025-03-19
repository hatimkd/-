import React from "react";

const BrandCar = () => {
  return (
    <div
      x-data="{}"
      x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
      className="w-full inline-flex flex-nowrap overflow-hidden   bg-white p-7  my-3 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
    >
      <ul
        x-ref="logos"
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
      >
        <li>
          <img src="bm.png" alt="BMW Logo" className="w-20 h-12" />
        </li>
        <li>
          <img src="porsche.svg" alt="Porsche Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="v.svg" alt="Volkswagen Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="dacia.svg" alt="Dacia Logo" className="w-20 h-12" />
        </li>
        <li>
          <img src="audi.svg" alt="Audi Logo" className="w-20 h-12" />
        </li>
      </ul>

      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src="bm.png" alt="BMW Logo" className="w-20 h-12" />
        </li>
        <li>
          <img src="porsche.svg" alt="Porsche Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="v.svg" alt="Volkswagen Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="dacia.svg" alt="Dacia Logo" className="w-20 h-12" />
        </li>

        <li>
          <img src="audi.svg" alt="Audi Logo" className="w-20 h-12" />
        </li>
      </ul>
      <ul
        class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <img src="bm.png" alt="BMW Logo" className="w-20 h-12" />
        </li>
        <li>
          <img src="porsche.svg" alt="Porsche Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="v.svg" alt="Volkswagen Logo" className="w-20 h-12" />
        </li>
       
        <li>
          <img src="dacia.svg" alt="Dacia Logo" className="w-20 h-12" />
        </li>
        <li>
          <img src="audi.svg" alt="Audi Logo" className="w-20 h-12" />
        </li>
      </ul>
    </div>
  );
};

export default BrandCar;
