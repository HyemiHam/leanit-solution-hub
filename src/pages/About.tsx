
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { CheckCircle, Users, Award, Clock, Laptop, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const TeamMember = ({ 
  name, 
  position, 
  image, 
  delay = 0 
}: { 
  name: string; 
  position: string; 
  image: string; 
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
          transition: { duration: 0.5, delay: delay * 0.1 }
        }
      }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <div className="aspect-square">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6 w-full">
            <h3 className="text-xl font-semibold text-white">{name}</h3>
            <p className="text-white/80">{position}</p>
          </div>
        </div>
      </div>
      <h3 className="text-xl font-semibold group-hover:text-brand transition-colors duration-300">{name}</h3>
      <p className="text-gray-600 dark:text-gray-400">{position}</p>
    </motion.div>
  );
};

const ValueCard = ({ 
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
      className="flex flex-col md:flex-row gap-4 items-start p-6 rounded-2xl glass-card"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand text-white shrink-0">
        <Icon size={24} />
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </motion.div>
  );
};

const About: React.FC = () => {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const heroControls = useAnimation();
  
  const storyRef = useRef(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const storyControls = useAnimation();

  useEffect(() => {
    if (isHeroInView) {
      heroControls.start("visible");
    }
  }, [isHeroInView, heroControls]);

  useEffect(() => {
    if (isStoryInView) {
      storyControls.start("visible");
    }
  }, [isStoryInView, storyControls]);

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        <div className="absolute top-20 right-0 w-full h-full">
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover opacity-10 blur-sm"></div>
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
                About Us
              </span>
            </motion.div>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Pioneers in <span className="text-brand">AI Innovation</span>
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              We are a team of passionate AI specialists and IT professionals dedicated to helping businesses leverage cutting-edge technology to achieve their goals.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              ref={storyRef}
              initial="hidden"
              animate={storyControls}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.8 }
                }
              }}
            >
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                From Concept to Industry Leaders
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Founded in 2008, leanIT began as a small IT consulting firm with a vision to make advanced technology accessible to businesses of all sizes. As artificial intelligence emerged as a transformative force, we pivoted our focus to become specialists in AI solutions.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Today, we are proud to be at the forefront of AI innovation, helping companies across various industries implement customized solutions that drive growth and efficiency. Our commitment to excellence and continuous learning has established us as trusted partners for businesses seeking to navigate the complex world of AI and IT.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Our journey is defined by our dedication to staying ahead of technological trends and our passion for sharing knowledge through our educational programs.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-brand" size={20} />
                  <span className="font-medium">15+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-brand" size={20} />
                  <span className="font-medium">50+ Global Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="text-brand" size={20} />
                  <span className="font-medium">100+ Projects Completed</span>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
                <div className="glass-card relative z-10 rounded-3xl p-1">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531973576160-7125cd663d86?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                      alt="Our Team"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Principles That Guide Us
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our core values shape everything we do, from how we develop solutions to how we interact with our clients and teach our students.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ValueCard
              icon={Target}
              title="Innovation"
              description="We constantly push the boundaries of what's possible with AI and IT solutions, staying ahead of industry trends to deliver cutting-edge technology."
              delay={0}
            />
            <ValueCard
              icon={Users}
              title="Collaboration"
              description="We believe in working closely with our clients to understand their unique challenges and create solutions that truly address their needs."
              delay={1}
            />
            <ValueCard
              icon={Award}
              title="Excellence"
              description="We are committed to maintaining the highest standards in everything we do, from solution development to customer service and education."
              delay={2}
            />
            <ValueCard
              icon={Laptop}
              title="Education"
              description="We are passionate about sharing knowledge and empowering others to harness the power of AI and technology."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts Behind leanIT
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our diverse team of AI specialists, IT experts, and educators brings together a wealth of experience and passion for innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Dr. Ji-Sung Kim"
              position="Founder & CEO"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              delay={0}
            />
            <TeamMember
              name="Min-Ju Park"
              position="Chief AI Officer"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80"
              delay={1}
            />
            <TeamMember
              name="Tae-Woo Lee"
              position="Head of Education"
              image="https://images.unsplash.com/photo-1548449112-96a38a643324?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80"
              delay={2}
            />
            <TeamMember
              name="Soo-Min Choi"
              position="Chief Technology Officer"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=761&q=80"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Let's discuss how our AI and IT solutions can transform your business and help you achieve your goals.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
