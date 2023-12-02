import { useState } from 'react';

function SelectImage() {
  const [image, setImage] = useState<string>('');

  const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result as string);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="hidden" name="image64" value={image} />
      <input type="file" id="image" onChange={getImage} accept="image/*" className="hidden" />

      <label
        htmlFor="image"
        className="flex justify-center max-w-xs mx-auto border border-blue-400 py-1.5 px-5 text-center rounded-lg 
                 cursor-pointer transition-colors duration-300 bg-blue-400 text-white hover:bg-blue-500"
      >
        Select Image
      </label>
    </div>
  );
}

export default SelectImage;
