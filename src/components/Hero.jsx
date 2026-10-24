import { assets } from '../assets/assets';
import { useState, useEffect } from 'react';

function Hero() {
    const images = [
        assets.image1,
        assets.image2,
        assets.image3,
        assets.image4,
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 3000);

        return () => clearInterval(timeout);
    }, [images.length]);

    return (
        <div className="py-10">
            <div
                className="max-w-250 mt-10 h-100 bg-cover bg-center rounded-2xl mx-auto transition-opacity duration-1000 ease-in-out "
                style={{ backgroundImage: `url(${images[index]})`, opacity: 1
             }}
                
            >
                <div className="py-30 px-10">
                    <h1 className="text-5xl font-bold mb-4 text-white">Shop Your Favorites. </h1>
                    <p>Discover amazing deals on top-rated items.</p>
                    <button className="bg-blue-500 hover:bg-blue-700 mt-4 text-white font-bold py-2 px-4 rounded mx-4">
                        Shop Now
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;