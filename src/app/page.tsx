import Footer from "./_components/common/Footer";
import Certified from "./_components/section/Certified";
import CIFA from "./_components/section/CIFA";
import Courses from "./_components/section/Courses";
import Employee from "./_components/section/Employability";
// import EmployabilityTools from "./_components/section/EmployabilityTools";
import HeroSection from "./_components/section/HeroSection";
import Instructors from "./_components/section/Instructors";
import Marque from "./_components/section/Marque";
import Online from "./_components/section/Online";
// import OnlineExam from "./_components/section/OnlineExam";
import OurBlogs from "./_components/section/OurBlogs";
import Traning from "./_components/section/Traning";
import TrustedBy from "./_components/section/TrustedBy";

export default function Home() {
  return (
   <div className="bg-primary_bg overflow-hidden">
    <HeroSection/>
    <TrustedBy/>
    <Courses/>
    <Certified/>
    <Instructors/>
    {/* <OnlineExam/> */}
    <Online/>
    {/* <EmployabilityTools/> */}
    <Employee/>
    <Traning/>
    <OurBlogs/>
    <Marque/>
    <CIFA/>
    <Footer/>
   </div>
  );
}
