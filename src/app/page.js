import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-1 items-center">
        <h1 className="text-sm text-blue-300">Excellent</h1>
        <div className="flex items-center justify-center text-xl">
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star text-orange-400"></span>
          <span className="fa fa-star"></span>
        </div>
        <h1 className="text-sm text-blue-200">Electric Vehicles Promoting</h1>
      </div>
      <hr />
      <div className="relative w-full h-96">
        <Image
          src="/images/voiture2.JPG"
          alt="EV Explorerd"
          fill
          className="object-cover"
        />
        <h1 className="absolute bottom-32 md:bottom-40 md:left-6 left-3 text-white font-bold text-5xl md:text-8xl tracking-wider text-center">
          Passion for all Electric Vehicles.
        </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-7 px-3 sm:px-10">
        <h1 className="text-2xl sm:text-4xl font-bold">Our mission</h1>
        <p className="text-gray-600 text-xl sm:text-2xl">
          First and foremost EV Explorers is about a passion for the Electric
          Vehicles. Whether it’s driving them, promoting them, fixing them or
          restoring them—we are passionate about what we do and it shows in the
          quality of our work.
          <br />
          <br />
          We are located in Houston, Texas and our phone number is 541.248.00012
        </p>
        <h3 className="text-base sm:text-xl text-black font-bold">
          01. EUROPEAN CAR REPAIR
        </h3>
        <p className="text-gray-600 text-xl sm:text-2xl">
          We specialize in BMW, Audi, VW and other European marks and love the
          older stuff.
        </p>
        <h3 className="text-base sm:text-xl text-black font-bold">
          02. CAR RESTORATION AND SALES
        </h3>
        <p className="text-gray-600 text-xl sm:text-2xl">
          We offer full classic car restoration services including body, paint,
          interior and mechanical. EV Explorers also offers cars for sale. We
          are not a high-volume car dealership looking to merely make a profit.
          It is run by enthusiasts and not car salesmen. We find interesting
          cars and thoroughly go through them to improve them before we list
          anything for sale.
          <br />
          <br />
          We only sell cars that we are passionate about.
          <br />
          <br />
          We specialize in European cars and, more specifically, German Autos.
          We can also work with you to source your dream car.
        </p>
        <a
          href="/"
          className="border-2 border-blue-300 w-max text-blue-300 font-bold px-4 py-2 cursor-pointer"
        >
          LEARN MORE
        </a>

        <h3 className="text-base sm:text-xl text-black font-bold">
          03. CAR DETAILING
        </h3>
        <p className="text-gray-600 text-xl sm:text-2xl">
          We specialize in paint correction, door dings, full exterior
          detailing, and ceramic coating.
        </p>
        <a
          href="/"
          className="border-2 border-blue-300 w-max text-blue-300 font-bold px-4 py-2 cursor-pointer"
        >
          PRICE LIST
        </a>
      </div>
      <div className="relative w-full h-96">
        <Image
          src="/images/voiture.JPG"
          alt="EV Explorerd"
          fill
          className="object-cover"
        />
        <div className="absolute bottom-32 sm:bottom-20 md:left-6 left-3">
          <div className="flex flex-col gap-3 items-center text-white">
            <span className="text-center text-sm text-indigo-600">
              READY TO UPGRADE OR IMPROVE YOUR RIDE?
            </span>
            <h1 className="font-bold text-4xl md:text-8xl tracking-wider text-center">
              Schedule an appointment
            </h1>
            <a
              href="mailto:evexplorers@gmail.com"
              className="border-2 border-white px-4 py-4 cursor-pointer"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
