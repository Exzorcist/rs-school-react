import { useState, useEffect } from 'react';

function SubmitButton({ isFormValid }: { isFormValid: boolean }) {
  const [show, setShow] = useState<boolean>(true);

  useEffect(() => {
    if (isFormValid) setShow(true);
  }, [isFormValid]);

  return (
    <div className="flex justify-center mt-10">
      <button
        className={`bg-blue-700 text-white text-2xl py-1.5 px-6 rounded-2xl transition-colors 
                    hover:bg-blue-800 duration-300 w-full max-w-[50%] 
                    ${!show ? 'opacity-50 pointer-events-none' : ''}`}
        type="submit"
        onClick={() => {
          if (!isFormValid) setShow(false);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default SubmitButton;
