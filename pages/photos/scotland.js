import Header from '../../components/Header';
import Image from "next/legacy/image";
import PhotoTitle from '../../components/PhotoTitle';

const photoRoot = "http://d1rq5uutlsdhk7.cloudfront.net/small/scotland";

const Scotland = () => {
  return (
    <div className="m-4 mx-auto max-w-7xl py-0 px-4">
      <Header />
      <PhotoTitle 
          photo={`${photoRoot}/skye.jpg`} 
          titleText="SCOTLAND" 
          subtitleText="August 2020" />

      <div className="m-auto text-center p-20 max-w-xl">
        <p>
          Like the rest of the world, London got hit hard by COVID19 throughout 2020,
          so we decided to take a holiday somewhere more local. I'd always wanted to
          try out a road trip, and this felt like the perfect opportunity to rent a car
          and travel the NC500, seeing some of the most beautiful scenery in Scotland in
          the process.
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/helensburgh.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/loch-lomond.jpg`} layout="responsive" width={1400} height={625} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/falls-of-falloch.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/road-side-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/glencoe-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/glencoe-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/kilchurn-castle.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-x-1">
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/road-side-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/steall-waterfall.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/eilean-donan-castle.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/road-side-3.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/skye.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/old-man-of-storr.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/mealt-falls.jpg`} layout="responsive" width={1050} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/bealach-na-ba.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/road-side-4.jpg`} layout="responsive" width={1400} height={660} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/road-side-5.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/road-side-6.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/loch-broom-view.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/clashnessie-falls.jpg`} layout="responsive" width={1050} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/stoer-night.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/stoer-lighthouse.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/DSC02396.jpg`} layout="responsive" width={1400} height={726} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/DSC02397.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/DSC02403.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/john-o-groats.jpg`} layout="responsive" width={1050} height={1400} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/fairy-glen-inverness.jpg`} layout="responsive" width={1050} height={1400} />
          </figure>
        </div>
      </div>
      <div className="m-auto text-center p-20 max-w-xl">
        My only regret is not stopping to take some photos of the Highland Coo. ☹️
      </div>
    </div>
  )
};

export default Scotland;
