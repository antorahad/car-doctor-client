import about1 from "../assets/images/about_us/person.jpg"
import about2 from "../assets/images/about_us/parts.jpg"


const About = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className="relative w-1/2">
                <img src={about1} className="max-w-md rounded-lg shadow-2xl" />
                <img src={about2} className="max-w-sm rounded-lg shadow-2xl absolute top-28 left-28 border-4 border-white" />
                </div>
                <div className="w-1/2 space-y-4">
                    <p className="font-bold text-orange-500 text-lg">About Us</p>
                    <h1 className="text-4xl font-bold max-w-sm">We are qualified & of experience in this field</h1>
                    <p className="py-6">{`There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}</p>
                    <button className="btn bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;