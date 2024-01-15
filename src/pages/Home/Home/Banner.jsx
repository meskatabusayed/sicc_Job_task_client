import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
        <div  className="carousel-item relative w-full h-[600px]">
        <img src="https://i.ibb.co/CsVwfB0/portrait-business-people-worker-team-outside.jpg" className="w-full" />
        <div className="absolute flex items-center h-full justify-between  left-0 top-0lg:top-0 bg-gradient-to-r from-[#151515] t0-[rgba(21,21,21,0)]">
         <div className="text-white pl-10 w-1/2">
            <h2 className="text-6xl font-bold mb-5">Confluence makes task management easy</h2>
           <div className="mt-5"> 
           <Link to='/dashboard/profile'><button className="btn btn-primary">Let’s Explore</button></Link> 
         </div>
         </div>
        
        </div>
        </div>
        </div>
    );
};

export default Banner;