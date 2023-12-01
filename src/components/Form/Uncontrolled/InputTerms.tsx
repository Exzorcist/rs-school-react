function InputTerms() {
  return (
    <div>
      <input
        className="fixed opacity-0 w-0 h-0 [&+label]:after:checked:opacity-100"
        type="checkbox"
        name="accept-terms"
        id="accept-terms"
      />
      <label
        className="relative pl-10 before:absolute before:-top-0.5 before:left-0 before:w-6 before:h-6 
                   before:border before:border-blue-400 cursor-pointer before:rounded-md after:absolute
                   after:w-3.5 after:h-3.5 after:bg-blue-400 after:top-[3px] after:left-[5px] after:rounded after:opacity-0"
        htmlFor="accept-terms"
      >
        Accept the Terms & Conditions
      </label>
    </div>
  );
}

export default InputTerms;
