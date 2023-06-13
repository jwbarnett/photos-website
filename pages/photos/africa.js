import Header from '../../components/Header';
import Image from "next/legacy/image";
import PhotoTitle from '../../components/PhotoTitle';

const photoRoot = "http://d1rq5uutlsdhk7.cloudfront.net/small/2015-africa";

const Africa = () => {
  return (
    <div className="m-4 mx-auto max-w-7xl py-0 px-4">
      <Header />
      <PhotoTitle 
          photo={`${photoRoot}/sunset.jpg`} 
          titleText="AFRICA" 
          subtitleText="December 2015" />
          
      <div className="m-auto text-center p-20 max-w-xl">
        <p>
          Kenya and Tanzania.
        </p>
      </div>
      <div className="space-y-1">
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/feeding-elephant.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/giraffe.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/feeding-giraffe.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/tortoise.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/kilimanjaro-behind-house.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/sunset.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/kilimanjaro.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/monkey-in-tree.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/stag.jpg`} layout="responsive" width={1400} height={644} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/elephant.jpg`} layout="responsive" width={933} height={1400} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/mini-deer.jpg`} layout="responsive" width={933} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/safari-landscape.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/elephant-with-children.jpg`} layout="responsive" width={1400} height={774} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/lioness-with-warthog.jpg`} layout="responsive" width={933} height={1400} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/monkey-with-baby-in-tree.jpg`} layout="responsive" width={933} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/elephants-moving.jpg`} layout="responsive" width={1400} height={601} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/ostriches.jpg`} layout="responsive" width={1400} height={651} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-[69%]">
            <Image src={`${photoRoot}/cheetahs-under-tree.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
          <figure className="w-[31%]">
            <Image src={`${photoRoot}/monkey-with-baby.jpg`} layout="responsive" width={933} height={1400} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/lionesses-under-tree.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-1/2">
            <Image src={`${photoRoot}/house.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
          <figure className="w-1/2">
            <Image src={`${photoRoot}/crab.jpg`} layout="responsive" width={1400} height={933} />
          </figure>
        </div>
        <div className="flex gap-1">
          <figure className="w-full">
            <Image src={`${photoRoot}/beach-landscape.jpg`} layout="responsive" width={1400} height={656} />
          </figure>
        </div>
      </div>
    </div>
  )
};

export default Africa;
