import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    }, [])
    return (
        <div className="mb-10">
            <center className="space-y-6">
                <p className="text-xl font-bold text-orange-500">Service</p>
                <h1 className="text-5xl font-bold">Our Service Area</h1>
                <p className="max-w-lg mx-auto">{`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}</p>
            </center>
            <div className="grid grid-cols-3 gap-5 max-w-6xl mx-auto">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;