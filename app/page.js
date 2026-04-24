import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Amenities from '../components/Amenities';
import Gallery from '../components/Gallery';
import Reviews from '../components/Reviews';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <main>
            <Navbar />
            <Hero />
            <Experience />
            <Amenities />
            <Gallery />
            <Reviews />
            <CTA />
            <Footer />
        </main>
    );
}

// 'use client';
// import { useEffect, useState } from 'react';
// import treeIcon from '../src/assets/tree.png';
// import Image from 'next/image';

// import Navbar from '../components/Navbar';
// import Hero from '../components/Hero';
// import Experience from '../components/Experience';
// import Amenities from '../components/Amenities';
// import Gallery from '../components/Gallery';
// import Reviews from '../components/Reviews';
// import CTA from '../components/CTA';
// import Footer from '../components/Footer';

// export default function Home() {
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setLoading(false);
//         }, 1500); // cât vrei să stea loader-ul

//         return () => clearTimeout(timer);
//     }, []);

//     if (loading) {
//         return (
//             <div className="fixed inset-0 flex items-center justify-center bg-black">
//                 {/* <img
//                     src="/loading/tree.png"
//                     alt="loading"
//                     className="w-32 h-32 animate-pulse"
//                 /> */}
//                 <Image
//                     src={treeIcon}
//                     // style={{ height: '25px', width: '25px' }}
//                     alt="Cabana Trăila"
//                     className="w-25 h-25 object-contain"
//                 />
//             </div>
//         );
//     }

//     return (
//         <main>
//             <Navbar />
//             <Hero />
//             <Experience />
//             <Amenities />
//             <Gallery />
//             <Reviews />
//             <CTA />
//             <Footer />
//         </main>
//     );
// }
