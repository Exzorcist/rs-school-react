function SubmitButton() {
  return (
    <div className="flex justify-center mt-10">
      <button
        className="bg-blue-700 text-white text-2xl py-1.5 px-6 rounded-2xl transition-colors 
                    hover:bg-blue-800 duration-300 w-full max-w-[50%]"
        type="submit"
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
