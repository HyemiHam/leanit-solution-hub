
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, GraduationCap, Users, BookOpen, Award, Brain, Code, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const CourseCard = ({ 
  title, 
  description, 
  level,
  duration,
  features,
  delay = 0 
}: { 
  title: string; 
  description: string; 
  level: string;
  duration: string;
  features: string[];
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: delay * 0.1 }
        }
      }}
    >
      <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow duration-300 group">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 text-xs font-medium bg-brand-100 text-brand rounded-full">{level}</span>
            <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 rounded-full flex items-center">
              <Clock size={14} className="mr-1" />
              {duration}
            </span>
          </div>
          <CardTitle className="text-xl group-hover:text-brand transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-base pt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <h4 className="font-medium text-sm text-gray-600 dark:text-gray-400">What you'll learn:</h4>
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3 h-3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-brand text-brand hover:bg-brand-50 rounded-lg mt-4">
            <Link to="/contact">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const TestimonialCard = ({ 
  text, 
  author, 
  position, 
  delay = 0 
}: { 
  text: string; 
  author: string; 
  position: string; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="glass-card rounded-2xl p-6 flex flex-col"
    >
      <div className="text-2xl text-brand mb-4">"</div>
      <p className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">{text}</p>
      <div>
        <h4 className="font-medium">{author}</h4>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{position}</p>
      </div>
    </motion.div>
  );
};

const Education: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        <div className="absolute top-20 right-0 w-full h-full">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover opacity-10 blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            ref={heroRef}
            initial="hidden"
            animate={heroControls}
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { 
                  staggerChildren: 0.1,
                  delayChildren: 0.1
                }
              }
            }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Education
              </span>
            </motion.div>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Master the Future with <span className="text-brand">AI Education</span>
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Our comprehensive AI and IT training programs are designed to equip individuals and teams with the skills needed to thrive in the rapidly evolving technology landscape.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* About Our Education Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Education Designed for Real-World Impact
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At leanIT, we believe in education that goes beyond theory. Our training programs are designed to provide practical, hands-on experience that can be immediately applied in real-world scenarios.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our courses are led by industry experts who bring their extensive experience to the classroom, ensuring you learn not just the fundamentals but also best practices and cutting-edge techniques.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Users className="text-brand" size={20} />
                    <span className="font-medium">Expert Instructors</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Learn from industry professionals with years of experience.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <BookOpen className="text-brand" size={20} />
                    <span className="font-medium">Practical Curriculum</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Focus on real-world applications and hands-on projects.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-brand" size={20} />
                    <span className="font-medium">Flexible Scheduling</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Choose from various time options to fit your schedule.</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <Award className="text-brand" size={20} />
                    <span className="font-medium">Certification</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Earn recognized certificates to boost your career.</p>
                </div>
              </div>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                <Link to="/contact">
                  Explore Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
              <div className="glass-card relative z-10 rounded-3xl p-1">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Our Courses
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI & IT Programs
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Choose from our range of specialized courses designed to build your skills from fundamentals to advanced applications.
            </p>
          </div>

          <Tabs defaultValue="ai" className="space-y-8">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="ai">AI Programs</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="dev">Development</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ai" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CourseCard
                  title="AI Fundamentals"
                  description="A comprehensive introduction to artificial intelligence concepts and applications."
                  level="Beginner"
                  duration="8 Weeks"
                  features={[
                    "Introduction to AI concepts",
                    "Machine learning basics",
                    "Neural networks fundamentals",
                    "Practical AI applications",
                    "Hands-on projects"
                  ]}
                  delay={0}
                />
                <CourseCard
                  title="Advanced Machine Learning"
                  description="Deep dive into sophisticated machine learning techniques and applications."
                  level="Intermediate"
                  duration="10 Weeks"
                  features={[
                    "Advanced ML algorithms",
                    "Feature engineering",
                    "Model optimization",
                    "Natural language processing",
                    "Computer vision techniques"
                  ]}
                  delay={1}
                />
                <CourseCard
                  title="AI Implementation Strategy"
                  description="Learn how to successfully integrate AI solutions into business operations."
                  level="Advanced"
                  duration="6 Weeks"
                  features={[
                    "AI solution design",
                    "Implementation roadmaps",
                    "Change management",
                    "ROI calculation",
                    "Case studies of successful deployments"
                  ]}
                  delay={2}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="data" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CourseCard
                  title="Data Science Essentials"
                  description="Master the core concepts and tools of modern data science."
                  level="Beginner"
                  duration="8 Weeks"
                  features={[
                    "Data collection and cleaning",
                    "Statistical analysis",
                    "Data visualization",
                    "Python for data science",
                    "Intro to machine learning"
                  ]}
                  delay={0}
                />
                <CourseCard
                  title="Big Data Analytics"
                  description="Learn to process, analyze and derive insights from large datasets."
                  level="Intermediate"
                  duration="10 Weeks"
                  features={[
                    "Big data platforms",
                    "Distributed computing",
                    "Real-time analytics",
                    "Data warehousing",
                    "Practical big data projects"
                  ]}
                  delay={1}
                />
                <CourseCard
                  title="Predictive Analytics Mastery"
                  description="Advanced techniques for forecasting and predictive modeling."
                  level="Advanced"
                  duration="8 Weeks"
                  features={[
                    "Predictive modeling techniques",
                    "Time series analysis",
                    "Model evaluation",
                    "Deployment strategies",
                    "Real-world case studies"
                  ]}
                  delay={2}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="dev" className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CourseCard
                  title="Full-Stack AI Development"
                  description="Comprehensive training on building end-to-end AI applications."
                  level="Intermediate"
                  duration="12 Weeks"
                  features={[
                    "Frontend frameworks",
                    "Backend development",
                    "API design",
                    "AI model integration",
                    "Deployment and scaling"
                  ]}
                  delay={0}
                />
                <CourseCard
                  title="Cloud-Based AI Solutions"
                  description="Learn to develop and deploy AI applications in the cloud."
                  level="Intermediate"
                  duration="8 Weeks"
                  features={[
                    "Cloud architecture",
                    "Serverless computing",
                    "Cloud AI services",
                    "Scalability and performance",
                    "Security best practices"
                  ]}
                  delay={1}
                />
                <CourseCard
                  title="MLOps for Enterprise"
                  description="Master the practices for operationalizing machine learning in enterprise settings."
                  level="Advanced"
                  duration="10 Weeks"
                  features={[
                    "CI/CD for ML models",
                    "Model monitoring",
                    "Version control for ML",
                    "Scalable ML infrastructure",
                    "Automated testing and deployment"
                  ]}
                  delay={2}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Student Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Students Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Hear from professionals who have transformed their careers through our training programs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TestimonialCard
              text="The AI Fundamentals course was exactly what I needed to transition into a machine learning role. The instructors were knowledgeable, and the hands-on projects gave me practical experience I could immediately apply in my work."
              author="Min-Jae Cho"
              position="Data Scientist, Tech Innovations"
              delay={0}
            />
            <TestimonialCard
              text="Taking the Advanced Machine Learning course has been transformative for my career. The curriculum was challenging but incredibly rewarding, and the support from instructors was excellent."
              author="Ji-Woo Kim"
              position="AI Engineer, Future Systems"
              delay={1}
            />
            <TestimonialCard
              text="As a business manager, the AI Implementation Strategy course gave me the knowledge I needed to lead AI initiatives in my company. The real-world focus of the course was particularly valuable."
              author="Soo-Yeon Park"
              position="Innovation Manager, Global Corp"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Corporate Training Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-brand-500/10 to-brand-600/10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
                <div className="glass-card relative z-10 rounded-3xl p-1">
                  <div className="relative aspect-video rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1572521165329-b197f9ea3da6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Corporate Training"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Corporate Training
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Customized Training for Your Team
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                We offer specialized corporate training programs designed to meet your company's specific needs and challenges. Our tailored approach ensures that your team develops the exact skills required for your business objectives.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Tailored curriculum to your industry and challenges</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Flexible delivery options: on-site, virtual, or hybrid</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Hands-on projects using your company's actual data</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">Ongoing support and consultation after training</span>
                </div>
              </div>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                <Link to="/contact">
                  Request Corporate Training
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Advance Your AI Skills?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Enroll in one of our programs today and take the first step towards becoming an AI expert.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">
                Enroll Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
