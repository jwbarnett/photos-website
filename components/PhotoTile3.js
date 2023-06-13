import Image from "next/image";

const PhotoTile = ({photo, titleText, subtitleText, link, blurbText }) => {
  return (
    <div className="m-3 grow basis-0">
      <a className="block" href={link}>
        <div className="flex flex-col group">
          <div className="inline-block relative min-w-[300px]">
            <div className="mt-[100%]"></div>
            <figure className="absolute inset-0 m-1 brightness-75 transition group-hover:brightness-100">
              <Image src={photo}
                     alt={titleText} 
                     className="rounded-sm z-0"
                     fill />
            </figure>
          </div>
          
          <div className="px-1 m-auto w-full">
            <h1 className="text-lg uppercase">{titleText}</h1>
            <p className="text-sm">{subtitleText}</p>
            <p className="text-sm leading-relaxed">{blurbText}</p>
          </div>
        
        </div>
      </a>
    </div>
  );
}
  
export default PhotoTile;
