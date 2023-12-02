import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCountry } from '../../../redux/reducers/CountrySlice.tsx';

function SelectCountry() {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const country = useSelector(selectCountry);

  const filteredCountries = country.filter((item) =>
    item.name.toLowerCase().includes(input.toLowerCase())
  );

  document.addEventListener('click', (e: MouseEvent) => {
    if ((e.target as HTMLInputElement)?.name !== 'country') setIsShow(false);
  });

  return (
    <div
      className={`relative after:absolute after:right-4 after:top-[18px] after:rotate-180 after:border-solid
                 after:border-x-[6px] after:border-b-8 after:border-b-blue-500 after:border-x-transparent
                 after:transition-transform after:duration-300 ${isShow ? 'after:rotate-0' : ''}`}
    >
      <input
        className="w-full py-1.5 pl-4 pr-9 transition-colors duration-300 border-2 border-blue-200 
                   rounded-lg outline-0 focus:border-blue-300"
        name="country"
        placeholder="Country"
        onClick={() => setIsShow(!isShow)}
        onChange={(e) => setInput(e.target.value)}
        value={input}
      />
      <div
        className={`absolute top-12 left-0 right-0 z-10 grid bg-white border-2 border-blue-300 first-letter:rounded-lg 
                    transition-all duration-300  text-base max-h-52 overflow-auto  ${
                      isShow
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible translate-y-4'
                    }`}
      >
        {filteredCountries.map((item) => (
          <span
            aria-hidden
            key={item.code}
            className="py-2 px-3.5 even:bg-blue-50 cursor-pointer transition-colors duration-300 hover:bg-blue-100"
            onClick={() => setInput(item.name)}
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default SelectCountry;
