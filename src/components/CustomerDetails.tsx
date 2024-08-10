import { useEffect, useState } from 'react';
import { type Customer } from '../data';

interface CustomerDetailsProps {
  customer: Customer;
}

const PhotosCount = 9;

const CustomerDetails = ({ customer }: CustomerDetailsProps) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const resetPhotos = () => {
      const data = Array.from({ length: PhotosCount }, () => {
        return `https://picsum.photos/208/208?random=${Math.floor(Math.random() * 1000)}`;
      });

      setPhotos(data);
    };

    resetPhotos();

    const interval = setInterval(resetPhotos, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [customer]);

  return (
    <div className="w-full flex-1 py-12 px-12 flex flex-col gap-7 items-center overflow-y-auto bg-gray-100">
      <h2 className="text-[22px]">{customer.title}</h2>
      <p className="text-gray-500 text-center leading-snug max-w-3xl px-5">{customer.address}</p>
      <div className="grid grid-cols-3 gap-12 mt-5">
        {photos.map((photo, index) => (
          <GridImage key={`${customer.id}-${index}`} src={photo} />
        ))}
      </div>
    </div>
  );
};

const GridImage = ({ src }: { src: string }) => {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative w-52 h-52 rounded-lg shadow-md overflow-hidden">
      {loading && (
        <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 blur-[2px]"></div>
      )}
      <img
        src={src}
        loading="lazy"
        onLoad={() => {
          setLoading(false);
        }}
        style={{ visibility: loading ? 'hidden' : 'visible' }}
        className="w-52 h-52 rounded-lg"
      />
    </div>
  );
};

export default CustomerDetails;
