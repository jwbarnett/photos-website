import Image from "next/image";

const PhotoTile = ({photo, titleText, subtitleText, link }) => {
  return (
    <div className="inline-block relative w-1/2 min-w-[300px]">
      <div className="mt-[100%]"></div>
      <a href={link}>
        <figure className="absolute inset-0 m-0.5">
          <Image src={photo}
                 alt={titleText} 
                 className="rounded-sm z-0"
                 fill />
          
          <div className="absolute top-1/2 left-1/2 text-center text-white drop-shadow z-10 -translate-x-[50%] -translate-y-[50%]">
            <p className="text-4xl">{titleText}</p>
            <p className="text-xl">{subtitleText}</p>
          </div>
        </figure>
      </a>
    </div>
  );
}
  
export default PhotoTile;
