import React from "react";
import SectionTop from "./SectionTop";
import AboutSection from "./AboutSection";
import AboutBlock from "./AboutBlock";
import TopicsSection from "./TopicSection";
import Users from "./Users";
import Team from "./Team";
import Questions from "./Questions";
import PartnerCarousel from "./PartnerCarousel";

function AboutPage() {
    const counterTopics = [
  { icon: "ti-face-smile", title: 854, courses: "Enrolled Students", color: "#ff6b00" }, 
  { icon: "ti-files", title: 521, courses: "Academic Programs", color: "#0066ff" },      
  { icon: "ti-headphone-alt", title: 163, courses: "Winning Award", color: "#28a745" },  
  { icon: "ti-user", title: 93, courses: "Certified Students", color: "#8e44ad" },     
];
const members = [
  {
    name: "Daniel Miller",
    profileLink: "https://wpdemothemes.com/edusion/profile/daniel?view=instructor",
    post: "Logo Expert",
    courses: 3,
    students: 3,
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team2.jpg",
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
  {
    name: "Masum Billah",
    profileLink: "https://wpdemothemes.com/edusion/profile/edusion?view=instructor",
    post: "Developer",
    courses: 6,
    students: 5,
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/team1.jpg",
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
  {
    name: "Kenneth Renteria",
    profileLink: "https://wpdemothemes.com/edusion/profile/kenneth?view=instructor",
    post: "Marketer",
    courses: 0,
    students: 0,
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-vladimir-kudin-10141145.jpg",
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      website: "http://themesvila.com/themes-wp/edusion",
    },
  },
  {
    name: "Richard Hood",
    profileLink: "https://wpdemothemes.com/edusion/profile/richard?view=instructor",
    post: "UI UX Designer",
    courses: 2,
    students: 0,
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-boris-hamer-16645409.jpg",
    social: {
      facebook: "https://facebook.com/username",
      twitter: "https://twitter.com/username",
      linkedin: "https://linkedin.com/username",
    },
  },
];


  const topics1 = [
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',

      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct5.svg",
      title: "Business",
      link: "https://wpdemothemes.com/edusion/course-category/business/?tutor-course-filter-category=64",
      courses: "1 Courses",
    },
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct6.svg",
      title: "Data Science",
      link: "https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65",
      courses: "1 Courses",
    },
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct2.svg",
      title: "Digital Program",
      link: "https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61",
      courses: "2 Courses",
    },
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct3.svg",
      title: "Finance",
      link: "https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62",
      courses: "2 Courses",
    },
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct4.svg",
      title: "Modern Physics",
      link: "https://wpdemothemes.com/edusion/course-category/modern-physics/?tutor-course-filter-category=63",
      courses: "3 Courses",
    },
    {
      id:1,
      category:"",
      categoryLink: "",
      price:'',
      currency:'',
      lessons:'',
      hours:'',
      rating:'',
      level:'',
      img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/ct1.svg",
      title: "UI/UX Design",
      link: "https://wpdemothemes.com/edusion/course-category/ui-ux-design/?tutor-course-filter-category=43",
      courses: "3 Courses",
    },
  ];
  const featuresData = [
  {
    icon: "ti-book",
    title: "Learn More <br />Anywhere",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    icon: "ti-heart",
    title: "Expert <br />Instructor",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    icon: "ti-user",
    title: "Team <br />Management",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    icon: "ti-book",
    title: "Learn More <br />Anywhere",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    icon: "ti-heart",
    title: "Expert <br />Instructor",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
  {
    icon: "ti-user",
    title: "Team <br />Management",
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.",
  },
];
  const logosData = [
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/5.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/2.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" },
];
  return (
    <>
      <SectionTop
        title="About Us"
        breadcrumbs={[
          { label: "Home", link: "/" },
          { label: "About Us" },
        ]}
      />

      <AboutSection />

      {/* <TopicsSection
        title="Start Learning"
        subtitle={`Popular <span><u>Topics To Learn</u></span> From Today.`}
        topics={topics1}
        background=""
      /> */}

      <AboutBlock
        image="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-967x1024.png"
        title={`Learn new skills to go <u><span>ahead for your </span></u> career.`}
        description="Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages."
        extraText="Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy"
        buttonText="Explore More"
        buttonLink="#"
      />
<Users
      title="Why Choose Edusion"
      subtitle="Find the <span>best features</span> of Edusion"
      features={featuresData}
    />
    <TopicsSection
  title="Some Fun Fact"
  subtitle="Our Great <span><u>Achievement</u></span>"
  topics={counterTopics}
  colors={["#ff6b00", "#0066ff", "#28a745", "#8e44ad"]}
/>
  <Team
    title="Team Member"
    subtitle='Our Expert <span><u>Instructors</u></span>'
    members={members}
  />

  <Questions/>
      <PartnerCarousel logos={logosData} title="Trusted Companies Around The World!" />

    </>
  );
}

export default AboutPage;
