import Header from '../../components/Header';
import Image from "next/legacy/image";
import PhotoTitle from '../../components/PhotoTitle';

const photoRoot = "https://d1rq5uutlsdhk7.cloudfront.net/small/new-york";

const NewYork = () => {
  return (
    <div className="m-4 mx-auto max-w-7xl py-0 px-4">
      <Header />
      <PhotoTitle 
          photo={`${photoRoot}/central-park-skyline-1.jpg`} 
          titleText="NEW YORK" 
          subtitleText="September 2019" />

      <div className="m-auto text-center p-20 max-w-xl">
        <p>
          We were invited to a wedding in New Jersey towards the end of 2019 and 
          decided to make a week-long trip of it. While based at an AirBnB around
          Journal Square, Jersey City, we tried to get to New York when we got the
          chance.
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/highline-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/highline-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/highline-3.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/honeycomb.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/walk-sign.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/nbc-sign.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/top-rock-view-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/top-rock-view-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/atlas.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/flags.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="m-auto text-center p-20 max-w-xl">
          <p>
            A quick detour to the Nintendo store.
          </p>
        </div>
        <div className="flex gap-1">
          <figure className="w-[29.75%]">
            <Image src={`${photoRoot}/pikachu.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[70.25%]">
            <Image src={`${photoRoot}/nintendo-store.jpg`} layout="responsive" width={1400} height={880} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/library-building.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/library-inside.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/central-park-skyline-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/central-park-skyline-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/new-jersey-skyline-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/new-jersey-skyline-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/new-jersey-skyline-3.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/empire-state.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/empire-state-view-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/empire-state-view-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/statue-liberty.jpg`} layout="responsive" width={934} height={1400} />
          </figure>
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/brooklyn-bridge-view-1.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/brooklyn-bridge-view-2.jpg`} layout="responsive" width={1400} height={934} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/brooklyn-bridge-view-3.jpg`} layout="responsive" width={1400} height={655} />
          </figure>
        </div>
      </div>
      <div className="m-auto text-center p-20 max-w-xl">
        Congratulations, Benji and Alida!
      </div>
    </div>
  )
};

export default NewYork;
