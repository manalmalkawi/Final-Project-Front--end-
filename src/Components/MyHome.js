import { useState } from "react";


import 'bootstrap/dist/css/bootstrap.min.css';
import TopicsSection from './TopicSection';
import AboutSection from "./AboutSection";
import AboutBlock from './AboutBlock';
import CoursesSection from './CourseSection';
import VideoSection from './VideoSection';
import PartnerCarousel from './PartnerCarousel';
import CoursePromotion from './CoursePromotion';
import PricingSection from './PricingSection';
import { FaCheckCircle, FaGraduationCap, FaChalkboardTeacher, FaCertificate, FaBook } from "react-icons/fa";
import NewsletterSection from './NewsletterSection';
import BlogSection from './BlogSection';


const MyHome = () => {
  const [search, setSearch] = useState("");

  const courses = [
    { name: "Creative Writing", link: "#" },
    { name: "Digital Marketing", link: "#" },
    { name: "SEO Business", link: "#" },
    { name: "Social Marketing", link: "#" },
    { name: "Graphic Design", link: "#" },
    { name: "Website Development", link: "#" },
  ];
  const companyLinks = [
    { name: "About us", link: "#" },
    { name: "Knowledge Base", link: "#" },
    { name: "Affiliate Program", link: "#" },
    { name: "Community", link: "#" },
    { name: "Market API", link: "#" },
    { name: "Support Team", link: "#" },
  ];
  const contactInfo = [
    { icon: "ti-mobile", title: "Phone Number", value: "+88 457 845 695" },
    { icon: "ti-email", title: "Email Address", value: "example#yourmail.com" },
    { icon: "ti-map", title: "Location", value: "California, USA" },
  ];
  const footerMenu = [
    { name: "Terms & Conditions", link: "#" },
    { name: "Special", link: "#" },
    { name: "Privacy Policy", link: "#" },
  ];
   const coursesData = [
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-karolina-grabowska-5882683.jpg",
      price: 265,
      currency: "$",
      category: "Business",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/business/",
      title: "Financial Security Thinking and Principles Theory",
      link: "https://wpdemothemes.com/edusion/courses/financial-security-thinking-and-principles-theory/",
      lessons: 6,
      hours: 4,
      rating: 4.5,
      level: "All Levels",
    },
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-olia-danilevich-4974912-420x280.jpg",
      price: 250,
      currency: "$",
      category: "Finance",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/finance/",
      title: "Professional Ceramic Moulding for Beginners",
      link: "https://wpdemothemes.com/edusion/courses/professional-ceramic-moulding-for-beginners/",
      lessons: 15,
      hours: 4,
      rating: 5,
      level: "All Levels",
    },
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-tiia-pakk-4350767.jpg",
      price: "Free",
      category: "UI/UX Design",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/ui-ux-design/",
      title: "Basic Fundamentals of Interior & Graphics Design",
      link: "https://wpdemothemes.com/edusion/courses/basic-fundamentals-of-interior-graphics-design/",
      lessons: 16,
      hours: 22,
      minutes: 30,
      rating: 5,
      level: "Intermediate",
    },
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-pixabay-265667.jpg",
      price: "Free",
      category: "Digital Program",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/digital-program/",
      title: "WordPress for Beginners – Master WordPress",
      link: "https://wpdemothemes.com/edusion/courses/wordpress-for-beginners-master-wordpress/",
      lessons: 15,
      hours: 7,
      minutes: 30,
      rating: 4.33,
      level: "Beginner",
    },
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-christina-morillo-1181359.jpg",
      price: 300,
      currency: "$",
      category: "Data Science",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/data-science/",
      title: "The Complete Python Course for Beginner 2023",
      link: "https://wpdemothemes.com/edusion/courses/the-complete-python-course/",
      lessons: 14,
      hours: 18,
      minutes: 20,
      rating: 4.0,
      level: "Intermediate",
    },
    {
      image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-caio-56759.jpg",
      price: "Free",
      category: "UI/UX Design",
      categoryLink: "https://wpdemothemes.com/edusion/course-category/ui-ux-design/",
      title: "Ultimate Photoshop Training: From Beginner to Pro",
      link: "https://wpdemothemes.com/edusion/courses/ultimate-photoshop-training-from-beginner-to-pro/",
      lessons: 14,
      hours: 13,
      minutes: 20,
      rating: 3.33,
      level: "All Levels",
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
  const logosData = [
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/5.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/4.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/2.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/1.png" },
  { src: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/3.png" },
]
const sectionData = {
  title: "Popular Courses",
  subtitle: "Choose Our <span><u>Top Courses</u></span>",
  cards: [
    {
      plan: "Free",
      price: "$0",
      period: "/Month",
      yearly: "Upgrade as you need",
      features: [
        { text: "Learn at your own pace", icon: FaBook },
        { text: "Access to free resources", icon: FaCheckCircle },
        { text: "Community support", icon: FaChalkboardTeacher },
        { text: "Basic tutorials", icon: FaBook },
        { text: "Downloadable materials", icon: FaBook },
        { text: "Monthly webinars", icon: FaChalkboardTeacher },
        { text: "Certificate of completion", icon: FaCertificate },
      ],
      ctaText: "Start Now",
      ctaLink: "#",
    },
    {
      plan: "Saver plan",
      price: "$29",
      period: "/Month",
      yearly: "$348 Per Year",
      features: [
        { text: "All Free plan features", icon: FaCheckCircle },
        { text: "Advanced tutorials", icon: FaBook },
        { text: "One-on-one mentorship", icon: FaChalkboardTeacher },
        { text: "Downloadable projects", icon: FaBook },
        { text: "Priority support", icon: FaChalkboardTeacher },
        { text: "Monthly webinars", icon: FaChalkboardTeacher },
        { text: "Certificate of completion", icon: FaCertificate },
      ],
      ctaText: "Start Now",
      ctaLink: "#",
    },
    {
      plan: "Unlimited plan",
      price: "$49",
      period: "/Month",
      yearly: "$588 Per Year",
      features: [
        { text: "All Saver plan features", icon: FaCheckCircle },
        { text: "Unlimited course access", icon: FaBook },
        { text: "Premium resources", icon: FaBook },
        { text: "Exclusive webinars", icon: FaChalkboardTeacher },
        { text: "Career guidance", icon: FaChalkboardTeacher },
        { text: "Project feedback", icon: FaChalkboardTeacher },
        { text: "Advanced certifications", icon: FaCertificate },
      ],
      ctaText: "Start Now",
      ctaLink: "#",
    },
  ],
};   

const newsItems = [
  {
    title: "Professional Mobile Painting and Sculpting",
    date: "Jun 01, 2024",
    category: "Technology",
    link: "https://wpdemothemes.com/edusion/professional-mobile-painting-and-sculpting/",
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/11/pexels-thisisengineering-3862132-370x260.jpg",
    excerpt: "Our latest insights on mobile painting and sculpting techniques.",
  },
  {
    title: "Professional Ceramic Moulding for Beginner",
    date: "May 29, 2024",
    category: "Programming",
    link: "https://wpdemothemes.com/edusion/professional-ceramic-moulding-for-beginner/",
    img: "https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/pexels-thisisengineering-3861972-370x260.jpg",
    excerpt: "Step-by-step guide to ceramic moulding for beginners.",
  },
  {
    title:"Professional Ceramic Moulding for Beginner",
    date: "Apr 18, 2024",
    category: "Technology",
    link: "https://wpdemothemes.com/edusion/ai-in-modern-education/",
    img: "",
    excerpt: "How artificial intelligence is shaping modern learning methods.",
  },
  {
    title: "Professional Ceramic Moulding for Beginner",
    date: "Mar 05, 2024",
    category: "Programming",
    link: "https://wpdemothemes.com/edusion/web-development-trends-2024/",
    img: "",
    excerpt: "Top web development trends you need to know in 2024.",
  },
];


  
const counterTopics = [
  { icon: "ti-face-smile", title: 854, courses: "Enrolled Students", color: "#ff6b00" }, 
  { icon: "ti-files", title: 521, courses: "Academic Programs", color: "#0066ff" },      
  { icon: "ti-headphone-alt", title: 163, courses: "Winning Award", color: "#28a745" },  
  { icon: "ti-user", title: 93, courses: "Certified Students", color: "#8e44ad" },     
];
  return (
    <div className="elementor-widget-container">
      <section
        id="home"
        className="home_bg2"
        style={{
          backgroundImage:
            "url(https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/home2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12 text-center">
              <div className="home_content hc_pt">
                <h1>
                  Get smart <span><u>opportunity for</u></span> your best future
                </h1>
                <p>
                  It is a long established fact that reader will be distracted
                  readable content of a page when.
                </p>
              </div>

              <div className="home_sb">
                <form
                  action="https://wpdemothemes.com/edusion/"
                  className="banner_subs"
                >
                 
                  <input
  type="text"
  className="home_si"
  name="s"
  placeholder="Search your course here"
  style={{
    border: "1px solid #ccc", 
    outline: "none",
    boxShadow: "none",
    transition: "border-color 0.3s", 
  }}
  onFocus={(e) => (e.target.style.border = "2px solid #2eca7f" )}
  onBlur={(e) => (e.target.style.borderColor = "#ccc")}     
/>
                  <input type="hidden" name="post_type" value="courses" />
                  <button type="submit" className="btn btn-main">
                    Search <i className="fa fa-paper-plane-o"></i>
                  </button>
                </form>
              </div>

              <div className="home_tag">
                <span>Popular Topic:</span>
                <a href="https://wpdemothemes.com/edusion/course-category/business/?tutor-course-filter-category=64">
                  Business
                </a>
                <span className="cat_coma">,</span>
                <a href="https://wpdemothemes.com/edusion/course-category/data-science/?tutor-course-filter-category=65">
                  Data Science
                </a>
                <span className="cat_coma">,</span>
                <a href="https://wpdemothemes.com/edusion/course-category/digital-program/?tutor-course-filter-category=61">
                  Digital Program
                </a>
                <span className="cat_coma">,</span>
                <a href="https://wpdemothemes.com/edusion/course-category/finance/?tutor-course-filter-category=62">
                  Finance
                </a>
                <span className="cat_coma">,</span>
              </div>
            </div>
          </div>
        </div>
      </section>
       <AboutSection />

      <TopicsSection
        title="Start Learning"
        subtitle={`Popular <span><u>Topics To Learn</u></span> From Today.`}
        topics={topics1}
        background="" 
      />

      <AboutBlock
        image="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/free-course-967x1024.png"
        title={`Learn new skills to go <u><span>ahead for your </span></u> career.`}
        description="Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages."
        extraText="Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy"
        buttonText="Explore More"
        buttonLink="#"
      />
      <CoursesSection
  background=""
  title="Our <span><u>Courses</u></span>"
  subtitle="Browse our top courses"
  items={coursesData}  
  viewAllLink="#"
/>

 <TopicsSection
  title="Some Fun Fact"
  subtitle="Our Great <span><u>Achievement</u></span>"
  topics={counterTopics}
  colors={["#ff6b00", "#0066ff", "#28a745", "#8e44ad"]}
/>
<VideoSection
  backgroundImage="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/video.jpg"
  videoUrl="https://www.youtube.com/watch?v=0KYxN1kJSb0"
/>
    <PartnerCarousel logos={logosData} title="Trusted Companies Around The World!" />
 <CoursePromotion
        title="Best Online Learning Platform"
        headline="One Platfrom & Many <span><u> Courses </u></span> For You"
        description="From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages."
        features={[
          "9/10 Average Satisfaction Rate",
          "96% Completitation Rate",
          "Friendly Environment & Expert Teacher",
        ]}
        ctaText="Explore Our Courses"
        ctaLink="#"
        backgroundImage="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/section-bg-2.png"
        imageSrc="https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/about5.png"
        imageAlt="Best Online Learning Platform"
      />      
 
      <PricingSection sectionData={sectionData} />
<NewsletterSection/>
 <BlogSection 
        posts={newsItems} 
        sectionTitle="News" 
        sectionSubtitle="Our Latest <span><u>Blogs</u></span>" 
        background={"https://wpdemothemes.com/edusion/wp-content/uploads/2023/10/blog-bg.png"}
      />
    </div>
  );
};

export default MyHome;
