const Hero = () => {
    return (
        <div className="carousel w-full h-[500px] rounded-lg mb-10">
            <div id="slide1" className="carousel-item relative w-full slide-one">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                    <p className="text-lg font-light text-white max-w-lg mx-auto text-center">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white">Discover More</button>
                        <button className="btn bg-transparent hover:bg-transparent focus:bg-transparent border border-white hover:border-white focus:border-white rounded-md text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❮</a>
                    <a href="#slide2" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full slide-two">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                    <p className="text-lg font-light text-white max-w-lg mx-auto text-center">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white">Discover More</button>
                        <button className="btn bg-transparent hover:bg-transparent focus:bg-transparent border border-white hover:border-white focus:border-white rounded-md text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❮</a>
                    <a href="#slide3" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full slide-three">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                    <p className="text-lg font-light text-white max-w-lg mx-auto text-center">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white">Discover More</button>
                        <button className="btn bg-transparent hover:bg-transparent focus:bg-transparent border border-white hover:border-white focus:border-white rounded-md text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❮</a>
                    <a href="#slide4" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full slide-four">
                <div className="flex flex-col justify-center items-center gap-5">
                    <h1 className="text-5xl text-white font-bold">Affordable Price For Car Servicing</h1>
                    <p className="text-lg font-light text-white max-w-lg mx-auto text-center">There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                    <div className="flex gap-5">
                        <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white">Discover More</button>
                        <button className="btn bg-transparent hover:bg-transparent focus:bg-transparent border border-white hover:border-white focus:border-white rounded-md text-white">Latest Project</button>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❮</a>
                    <a href="#slide1" className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border-none outline-none text-white btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Hero;