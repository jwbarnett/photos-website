import Image from "next/image";

const PhotoTitle = ({photo, titleText, subtitleText }) => {
  return (
    <div className="flex relative">
      <figure className="w-full m-auto">
        <Image src={photo}
               alt={titleText}
               className="rounded-lg"
               width={1400} 
               height={934} />
      </figure>
      
      <div className="absolute top-1/2 left-1/2 text-center text-white drop-shadow z-10 -translate-x-[50%] -translate-y-[50%]">
        <p className="text-6xl">{titleText}</p>
        <p className="text-2xl">{subtitleText}</p>
      </div>
    </div>
  );
}
  
export default PhotoTitle;
