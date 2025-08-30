import SectionTop from "./SectionTop";
import CoursesSection from "./CourseSection"


function CoursesPage (){

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
  {
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-eugene-capon-1261823.jpg",
    price: "Free",
    category: "Modern Physics",
    categoryLink: "https://wpdemothemes.com/edusion/course-category/modern-physics/",
    title: "User Experience Design Essentials Adobe xd UI UX Design",
    link: "https://wpdemothemes.com/edusion/courses/user-experience-design-essentials-adobe-xd-ui-ux-design/",
    lessons: 15,
    hours: 10,
    minutes: 40,
    rating: 4.5,
    level: "Beginner",
  },
  {
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-josh-sorenson-1714202.jpg",
    price: 180,
    currency: "$",
    category: "Modern Physics",
    categoryLink: "https://wpdemothemes.com/edusion/course-category/modern-physics/",
    title: "Basic Fundamentals of Interior & Graphics Design",
    link: "https://wpdemothemes.com/edusion/courses/basic-fundamentals-of-interior-graphics-design-2/",
    lessons: 16,
    hours: 15,
    minutes: 20,
    rating: 5.0,
    level: "Beginner",
  },
  {
    image: "https://wpdemothemes.com/edusion/wp-content/uploads/2019/05/pexels-mikael-blomkvist-6476595.jpg",
    price: "Free",
    category: "Finance / Modern Physics",
    categoryLink: [
      "https://wpdemothemes.com/edusion/course-category/finance/",
      "https://wpdemothemes.com/edusion/course-category/modern-physics/"
    ],
    title: "Sales Training: Practical Sales Techniques",
    link: "https://wpdemothemes.com/edusion/courses/sales-training-practical-sales-techniques/",
    lessons: 14,
    hours: 2,
    minutes: 20,
    rating: 4.0,
    level: "Expert",
  }
];



    return (<>
    <SectionTop
  title="Courses"
  breadcrumbs={[
    { label: "Home", link: "/" },
    { label: "Courses" }
  ]}
/>
     <CoursesSection
  background=""
  title="Our <span><u>Courses</u></span>"
  subtitle="Browse our top courses"
  items={coursesData}  
  viewAllLink="#"
/>

    
    </>)
}
export default CoursesPage;