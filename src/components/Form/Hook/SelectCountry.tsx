import { useState } from 'react';
import Countries from '../../../json/countries.json';

function SelectCountry() {
  const [isShow, setIsShow] = useState<boolean>(false);

  document.addEventListener('click', (e: MouseEvent) => {
    if ((e.target as HTMLInputElement)?.name !== 'country') setIsShow(false);
  });

  return (
    <div className="relative">
      <input
        className="w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                   rounded-lg outline-0 focus:border-blue-300"
        name="country"
        placeholder="Country"
        onClick={() => setIsShow(!isShow)}
      />
      <div
        className={`absolute top-12 left-0 right-0 z-10 grid bg-white border-2 border-blue-300 first-letter:rounded-lg 
                    transition-all duration-300  text-base max-h-52 overflow-auto  ${
                      isShow
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-4'
                    }`}
      >
        {Countries.map((item) => (
          <span
            key={item.code}
            className="py-2 px-3.5 even:bg-blue-50 cursor-pointer transition-colors duration-300 hover:bg-blue-100"
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SelectCountry;
