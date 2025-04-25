import React from 'react';
import Main from '../Component/Main';
import Footer from '../Component/Footer';

function Home() {
    return (
        <div>
           <div className="h-72 w-full flex justify-center items-center  z-[9] bg-cover bg-center relative" style={{ backgroundImage: `https://static.vecteezy.com/system/resources/thumbnails/040/890/255/small_2x/ai-generated-empty-wooden-table-on-the-natural-background-for-product-display-free-photo.jpg` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative text-center">
                    <h1 className="text-white text-5xl md:text-6xl font-extrabold drop-shadow-lg">Welcome to MyApp</h1>
                    <p className="text-[#FF8C00] text-lg mt-4 font-semibold">Your journey begins here.</p>
                </div>
            </div>
            <Main />
        </div>
    );
}

export default Home;
