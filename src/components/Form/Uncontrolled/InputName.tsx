function InputName() {
  return (
    <div>
      <input
        className="w-full py-1.5 px-4 transition-colors duration-300 border-2 border-blue-200 
                   rounded-lg outline-0 focus:border-blue-300"
        name="name"
        placeholder="Name"
      />
    </div>
  );
}

export default InputName;
