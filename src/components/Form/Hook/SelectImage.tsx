import { useState } from 'react';
import { IHookInputProps } from '../../../interfaces/FormData.ts';

function SelectImage({ errors, setValue, formRef }: IHookInputProps) {
  const error = errors.image64?.message;
  const [image, setImage] = useState<string>('');

  const getImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;

    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();

      // if (setValue) setValue('image64', { type: file.type, size: file.size, base64: image });

      reader.onloadend = () => {
        setImage(reader.result as string);
        if (setValue) {
          setValue('image64', {
            type: file.type,
            size: file.size,
            base64: reader.result as string,
          });
        }

        formRef?.current?.querySelector('button')?.click(); // Haven't found any other way to simulate a post-click dynamic validation
      };

      reader.readAsDataURL(file);
    }
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
        <p className="absolute -top-7 right-1.5 text-sm text-red-500 whitespace-nowrap">{error}</p>
      )}
    </div>
  );
}

export default SelectImage;
