import Header from '../../components/Header';
import Image from "next/legacy/image";
import PhotoTitle from '../../components/PhotoTitle';

const photoRoot = "https://d1rq5uutlsdhk7.cloudfront.net/small/2018-japan";

const Japan = () => {
  return (
    <div className="m-4 mx-auto max-w-7xl py-0 px-4">
      <Header />
      <PhotoTitle 
          photo={`${photoRoot}/miyajima.jpg`} 
          titleText="JAPAN" 
          subtitleText="August 2018" />
          
      <div className="m-auto text-center p-20 max-w-xl">
        <p>
          After being together for only 6 months, we found cheap flights for our dream holiday
          to Japan - it just had to be booked a year in advance. Thankfully everything worked
          out and we enjoyed an incredible - although ridiculously hot and humid - three weeks
          there.
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/shibuya-crossing.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/hachiko.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/pokemon-chefs.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/pokemon-cafe.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/imperial-palace-gate.jpg`} layout="responsive" width={1400} height={954} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/tokyo-metro-building-view.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/harajuku.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/wooden-tori.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/hanging-lamp.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/barrels.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/fireworks.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/neon-sign.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/books.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/disney-globe.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/disney-view-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/disney-view-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/house-under-the-sea.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/disney-palace.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/disney-temple.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/apprentice.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/osaka-building.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/osaka-castle-bridge.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/osaka-castle-view.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/dotonbori-octopus.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/dotonbori-gyoza.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/dotonbori-river.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/dotonbori-sign.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/kyoto-street.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/tori-sunset.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/nested-gates.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/cat-tori-gates.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/fireworks-tori-gate.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/deer-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/deer-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/wooden-temple.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/deer-3.jpg`} layout="responsive" width={1400} height={663} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/crossing-sign.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/dried-lake.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/lanterns-night.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/red-temple-night.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/himeji-castle.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/himeji-castle-fish.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/koko-en-entrance.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/koko-en-stones.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/miyajima.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/hiroshima-castle.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/peace-lantern.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/floor-lanterns.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/lanterns-river.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/lanterns-river-night.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/kinkaku-ji.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/temple-roof.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/bamboo-forest.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
      </div>
      <div className="m-auto text-center p-20 max-w-xl">
        And here's a pikachu boat full of pikachu to end the trip!
      </div>
      <div className="flex gap-1">
        <figure className="w-full">
          <Image src={`${photoRoot}/pikachu-boat.jpg`} layout="responsive" width={1400} height={934} />
        </figure>
      </div>
    </div>
  )
};

export default Japan;
