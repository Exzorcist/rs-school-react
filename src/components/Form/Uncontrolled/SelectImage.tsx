import { useState } from 'react';
import { IFormInputValidation } from '../../../interfaces/FormData.ts';

function SelectImage({ onChange, error }: IFormInputValidation) {
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

    onChange({
      target: {
        name: 'image64',
        value: image,
        type: 'text',
      },
    } as React.ChangeEvent<HTMLInputElement>);
  };

  return (
    <div className="relative">
      <input type="hidden" name="image64" value={image} />
      <input type="file" id="image" onChange={getImage} accept="image/*" className="hidden" />

      <label
        htmlFor="image"
        className={`flex justify-center max-w-xs mx-auto border border-blue-400 py-1.5 px-5 text-center rounded-lg 
                    cursor-pointer transition-colors duration-300 bg-blue-400 text-white hover:bg-blue-500
                    ${error ? 'outline-2 outline outline-red-500' : ''}`}
      >
        Select Image
      </label>

      {error && (
        <p className="absolute top-12 right-1.5 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default SelectImage;
