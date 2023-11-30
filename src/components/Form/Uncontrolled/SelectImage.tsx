import { useState } from 'react';

function SelectImage() {
  const [image, setImage] = useState<string | null>(null);

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
      <input
        type="file"
        name="image"
        id="image"
        onChange={getImage}
        accept="image/*"
        className="hidden"
      />

      <label
        htmlFor="image"
        className="flex justify-center max-w-xs mx-auto mt-7 border border-blue-400 py-1.5 px-7 text-center rounded 
                 cursor-pointer transition-colors duration-300 
                 hover:bg-blue-400 hover:text-white hover:border-blue-300"
      >
        Select Image
      </label>

      {image && (
        <div>
          <h3>Selected Image:</h3>
          <img src={image} alt="Selected" style={{ maxWidth: '100%', maxHeight: '300px' }} />
          <p>Base64 Data: {image}</p>
        </div>
      )}
    </div>
  );
}

export default SelectImage;
