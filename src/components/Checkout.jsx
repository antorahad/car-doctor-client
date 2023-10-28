import { useLoaderData } from "react-router-dom";

const Checkout = () => {
    const service = useLoaderData();
    const {title, _id} = service
    return (
        <div className="py-20">
            <h1 className="text-center text-4xl font-bold mb-5">Service: {title}</h1>
            <form className="bg-gray-100 shadow-sm rounded-md px-20 py-16 max-w-5xl mx-auto space-y-6">
                <div className="flex items-center justify-between gap-3">
                    <input type="text" className="input bg-white w-full rounded-md" placeholder="First Name"/>
                    <input type="text" className="input bg-white w-full rounded-md" placeholder="Last Name"/>
                </div>
                <div className="flex items-center justify-between gap-3">
                    <input type="text" className="input bg-white w-full rounded-md" placeholder="Your Phone"/>
                    <input type="text" className="input bg-white w-full rounded-md" placeholder="Your Email"/>
                </div>
                <textarea className="textarea bg-white w-full h-[250px]" placeholder="Your Message"></textarea>
                <input type="submit" className="btn btn-block bg-orange-500 hover:bg-orange-500 focus:bg-orange-500 border border-orange-500 hover:border-orange-500 focus:border-orange-500 rounded-md text-white" value="Order Confirm" />
            </form>
        </div>
    );
};

export default Checkout;