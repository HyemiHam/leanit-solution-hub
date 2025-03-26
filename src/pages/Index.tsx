
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Brain, Code, Database, FileCode, GraduationCap, Layers, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: any; 
  title: string; 
  description: string; 
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
      className="group p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand mb-4 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
        <Icon size={24} />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
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

const Index: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();
  
  const statsRef = useRef(null);
  const isStatsInView = useInView(statsRef, { once: true, margin: "-100px" });
  const statsControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (isStatsInView) {
      statsControls.start("visible");
    }
  }, [isStatsInView, statsControls]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"
        />
        
        <div className="absolute top-20 right-0 w-full h-full">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover opacity-10 blur-sm"></div>
        </div>
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={heroRef}
              initial="hidden"
              animate={heroControls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { 
                    duration: 0.8,
                    staggerChildren: 0.1
                  }
                }
              }}
              className="max-w-2xl"
            >
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-6 inline-block">
                  Innovative AI & IT Solutions
                </span>
              </motion.div>
              
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
              >
                Transforming Businesses with{" "}
                <span className="text-brand">Custom AI Solutions</span>
              </motion.h1>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              >
                We provide tailored AI and IT solutions to help your business thrive in the digital era. Our expert team also offers specialized education to empower your team with cutting-edge skills.
              </motion.p>
              
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                  <Link to="/services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-brand text-brand hover:bg-brand-50">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
                <div className="glass-card relative z-10 rounded-3xl p-1">
                  <div className="relative aspect-square rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="AI Technology"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                      <h3 className="text-white font-semibold text-lg">Cutting-edge AI Solutions</h3>
                      <p className="text-white text-opacity-90 text-sm">Empowering your business with smart technology</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <motion.div
            ref={statsRef}
            initial="hidden"
            animate={statsControls}
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
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10"
          >
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">50+</h3>
              <p className="text-gray-600 dark:text-gray-400">Clients Worldwide</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">95%</h3>
              <p className="text-gray-600 dark:text-gray-400">Client Satisfaction</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-400">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive AI & IT Solutions for Your Business
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              We provide a range of customized services to help you leverage the power of AI and IT for your business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI Solutions"
              description="Custom artificial intelligence solutions tailored to your specific business needs and challenges."
              delay={0}
            />
            <FeatureCard
              icon={Database}
              title="Data Analytics"
              description="Transform your raw data into actionable insights with our advanced analytics solutions."
              delay={1}
            />
            <FeatureCard
              icon={Code}
              title="Custom Software"
              description="Bespoke software development services designed to streamline your business operations."
              delay={2}
            />
            <FeatureCard
              icon={Layers}
              title="IT Infrastructure"
              description="Modern, scalable, and secure IT infrastructure solutions to support your business growth."
              delay={3}
            />
            <FeatureCard
              icon={GraduationCap}
              title="AI Education"
              description="Comprehensive AI training programs and workshops to upskill your team."
              delay={4}
            />
            <FeatureCard
              icon={Zap}
              title="Process Automation"
              description="Automate repetitive tasks and workflows to increase efficiency and reduce costs."
              delay={5}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-full border-brand text-brand hover:bg-brand-50">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-500/20 to-brand-600/20"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Let's discuss how our tailored AI and IT solutions can help your business grow and stay ahead of the competition.
            </p>
            <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Hear from businesses that have transformed their operations with our AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              text="The AI solution provided by leanIT has completely transformed our customer service operations. We've seen a 40% increase in efficiency and significantly improved customer satisfaction."
              author="Jin-Ho Park"
              position="CTO, Global Tech Industries"
              delay={0}
            />
            <TestimonialCard
              text="The training programs offered by leanIT were comprehensive and practical. Our team now has the skills to implement AI solutions independently, which has been invaluable for our business."
              author="Soo-Jin Kim"
              position="Head of Innovation, Nexus Corporation"
              delay={1}
            />
            <TestimonialCard
              text="Working with leanIT was a game-changer for our data analytics capabilities. Their custom solution has given us insights we never thought possible, driving strategic decisions with confidence."
              author="Min-Jun Lee"
              position="Data Director, Future Finance"
              delay={2}
            />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Education
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Enhance Your Team's Skills with Our AI Training Programs
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We offer comprehensive training programs designed to equip your team with the skills needed to leverage AI technologies effectively.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Custom Training Programs</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tailored courses designed for your team's specific needs and skill levels.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Expert Instructors</h3>
                    <p className="text-gray-600 dark:text-gray-400">Learn from industry professionals with real-world AI implementation experience.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Practical Applications</h3>
                    <p className="text-gray-600 dark:text-gray-400">Hands-on sessions focused on applying AI to solve real business problems.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                <Link to="/education">
                  Learn More About Our Programs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
              <div className="glass-card relative z-10 rounded-3xl p-1">
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="AI Education"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                    <h3 className="text-white font-semibold text-lg">Expert-Led Training</h3>
                    <p className="text-white text-opacity-90 text-sm">Comprehensive AI education for your team</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
