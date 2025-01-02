import Certified from "./_components/section/Certified";
import Courses from "./_components/section/Courses";
import EmployabilityTools from "./_components/section/EmployabilityTools";
import HeroSection from "./_components/section/HeroSection";
import Instructors from "./_components/section/Instructors";
import OnlineExam from "./_components/section/OnlineExam";
import TrustedBy from "./_components/section/TrustedBy";

export default function Home() {
  return (
   <div className="bg-primary_bg overflow-hidden">
    <HeroSection/>
    <TrustedBy/>
    <Courses/>
    <Certified/>
    <Instructors/>
    <OnlineExam/>
    <EmployabilityTools/>
   </div>
  );
}
