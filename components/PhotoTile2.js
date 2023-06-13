import Image from "next/image";

const PhotoTile = ({photo, titleText, subtitleText, link, blurbText }) => {
  return (
    <div className="mb-2 grow">
      <a className="block" href={link}>
        <div className="flex flex-wrap justify-center group">
          <div className="grow inline-block relative min-w-[300px] sm:max-w-md">
            <div className="mt-[100%]"></div>
            <figure className="absolute inset-0 m-3 brightness-75 transition group-hover:brightness-100">
              <Image src={photo}
                     alt={titleText} 
                     className="rounded-sm z-0"
                     fill />
            </figure>
          </div>
          <div className="grow px-3 pb-3 my-auto sm:max-w-xs">
            <h1 className="text-lg">{titleText}</h1>
            <p className="text-sm">{subtitleText}</p>
            <p className="text-sm">{blurbText}</p>
          </div>
        </div>
      </a>
    </div>
  );
}
  
export default PhotoTile;
