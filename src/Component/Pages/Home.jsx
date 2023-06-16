
import Banner from "./Banner";
// import Extra from "./Extra/Extra";
import PopularInstructor from "./PopularInstructor/PopularInstructor";


const Home = () => {
    return (
        <div className="bg-slate-800 ">
          <Banner></Banner>
          
          <PopularInstructor></PopularInstructor>
          {/* <Extra></Extra> */}
        </div>
    );
};

export default Home;