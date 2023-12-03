import { IFormData } from '../../../interfaces/FormData.ts';

function ItemFilled(props: IFormData) {
  const { name, age, email, country, gender, image64 } = props;
  const imageUrl = typeof image64 === 'string' ? image64 : image64.base64;

  return (
    <div className="grid grid-cols-[176px_1fr] gap-7">
      <div className="w-44 h-44 shadow">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={imageUrl}
          alt={`${name}'s avatar`}
        />
      </div>
      <div>
        <div className="mb-6 flex items-baseline gap-4 justify-between">
          <b className="text-2xl capitalize break-all">{name}</b>
          <span className="text-lg whitespace-nowrap">{age} years</span>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-1 text-base">
          <span className="font-medium bg-green-300/30 py-1 px-2 flex">email:</span>
          <span className="bg-green-300/30 py-0.5 px-3 flex break-all">{email}</span>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-1 text-base">
          <span className="font-medium py-1 px-2 flex">country:</span>
          <span className="py-0.5 px-3 flex break-all">{country}</span>
        </div>

        <div className="grid grid-cols-[80px_1fr] gap-1 text-base">
          <span className="font-medium bg-green-300/30 py-1 px-2 flex">gender:</span>
          <span className="bg-green-300/30 py-0.5 px-3 flex break-all">{gender}</span>
        </div>
      </div>
    </div>
  );
}

export default ItemFilled;
