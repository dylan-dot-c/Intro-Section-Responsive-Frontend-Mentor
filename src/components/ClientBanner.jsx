import React from "react";

const images = [
    "client-databiz.svg",
    "client-audiophile.svg",
    "client-meet.svg",
    "client-maker.svg",
];
function ClientBanner() {
    return (
        <div className='flex justify-between w-full items-center p-3 md:p-0'>
            {images.map((image, index) => {
                return (
                    <img
                        className='w-16 md:w-auto'
                        key={index}
                        // width={80}
                        src={image}
                        alt={`logo for ${image.slice(7)}`}
                    />
                );
            })}
        </div>
    );
}

export default ClientBanner;
