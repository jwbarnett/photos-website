import Header from '../components/Header';
import PhotoTile from '../components/PhotoTile3';

const Photos = () => {
  return (
    <div className="my-12 mt-12 mx-auto max-w-4xl leading-relaxed p-3">
      <Header />
      <h1 className="mb-5 text-3xl font-bold">📷 photos</h1>
      <p>
        These are some photos from when I've been travelling to various places. In the future I'm
        hoping to make some of them more of a travel blog with details on what I actually did in
        places, but for now I hope you enjoy some pictures
      </p>

      <div className="flex flex-wrap justify-center mt-8">
        <PhotoTile
            photo="https://d1rq5uutlsdhk7.cloudfront.net/small/scotland/clashnessie-falls.jpg"
            titleText="Scotland"
            subtitleText="August 2020"
            link="./photos/scotland"
            blurbText="Some photos taken while driving along the scenic NC500" />
        <PhotoTile
            photo="https://d1rq5uutlsdhk7.cloudfront.net/small/new-york/flags.jpg"
            titleText="New York"
            subtitleText="September 2019"
            link="./photos/new-york"
            blurbText="Brief tour of the city while over for a wedding" />
        <PhotoTile
            photo="https://d1rq5uutlsdhk7.cloudfront.net/small/2018-japan/miyajima.jpg"
            titleText="Japan"
            subtitleText="August 2018"
            link="./photos/japan"
            blurbText="Nearly three weeks travelling around some incredible cities" />
        <PhotoTile
            photo="https://d1rq5uutlsdhk7.cloudfront.net/small/2015-africa/kilimanjaro.jpg"
            titleText="Africa"
            subtitleText="December 2015"
            link="./photos/africa"
            blurbText="Travelling through Kenya and Tanzania, topped off with a safari day trip" />
      </div>
    </div>
  )
}

export default Photos;
