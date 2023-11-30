function InputMan() {
  return (
    <div>
      <input
        className="[&+label]:checked:bg-blue-400 [&+label]:checked:text-white fixed opacity-0 w-0 h-0"
        type="radio"
        value="man"
        name="gender"
        id="gender-man"
      />
      <label
        className="border border-blue-400 py-1.5 px-7 w-28 inline-block text-center rounded-l-lg 
                 cursor-pointer transition-colors duration-300 
                 hover:bg-blue-400 hover:text-white hover:border-blue-300"
        htmlFor="gender-man"
      >
        Man
      </label>
    </div>
  );
}

export default InputMan;
