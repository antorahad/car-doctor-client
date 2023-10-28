import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service
    return (
        <div className="card bg-base-100 shadow-md rounded-md">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl w-[100%] h-[200px]" />
            </figure>
            <div className="card-body">
                <h2 className="text-2xl font-bold">{title}</h2>
                <div className="flex items-center justify-between">
                    <p>${price}</p>
                    <Link to={`/checkout/${_id}`}>
                        <button className="text-orange-500">Book Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;