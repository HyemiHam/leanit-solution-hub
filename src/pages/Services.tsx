import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowRight, Brain, Code, Database, FileCode, Layers, Zap, Server, Shield, BarChart, Bot, Cpu } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const ServiceCard = ({ 
  icon: Icon, 
  title, 
  description, 
  features,
  delay = 0 
}: { 
  icon: any; 
  title: string; 
  description: string; 
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
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand mb-4 transition-all duration-300 group-hover:bg-brand group-hover:text-white">
            <Icon size={24} />
          </div>
          <CardTitle className="text-xl group-hover:text-brand transition-colors duration-300">{title}</CardTitle>
          <CardDescription className="text-base pt-2">{description}</CardDescription>
        </CardHeader>
        <CardContent>
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
        </CardContent>
        <CardFooter>
          <Button asChild variant="outline" className="w-full border-brand text-brand hover:bg-brand-50 rounded-lg mt-4">
            <Link to="/contact">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

const ProcessStep = ({
  number,
  title,
  description,
  delay = 0
}: {
  number: number;
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
      className="relative"
    >
      {number < 4 && (
        <div className="absolute top-10 left-10 right-0 h-0.5 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>
      )}
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-20 h-20 rounded-full bg-brand-100 text-brand flex items-center justify-center text-2xl font-bold mb-4">
          {number}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 max-w-xs">{description}</p>
      </div>
    </motion.div>
  );
};

const Services: React.FC = () => {
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
          <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-no-repeat bg-cover opacity-10 blur-sm"></div>
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
                Our Services
              </span>
            </motion.div>
            
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Customized <span className="text-brand">AI & IT Solutions</span> for Your Business
            </motion.h1>
            
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              We provide a comprehensive range of AI and IT services tailored to meet your specific business needs and challenges.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Comprehensive Service Portfolio
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore our range of specialized services designed to help you harness the power of AI and IT for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={Brain}
              title="AI Solutions"
              description="Custom artificial intelligence solutions tailored to your business needs."
              features={[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision Systems",
                "Predictive Analytics",
                "AI Integration Services"
              ]}
              delay={0}
            />
            <ServiceCard
              icon={Bot}
              title="Process Automation"
              description="Streamline operations with intelligent process automation."
              features={[
                "Robotic Process Automation (RPA)",
                "Workflow Optimization",
                "Document Processing",
                "Business Process Management",
                "Intelligent Automation"
              ]}
              delay={1}
            />
            <ServiceCard
              icon={Database}
              title="Data Analytics"
              description="Transform raw data into actionable business insights."
              features={[
                "Big Data Processing",
                "Business Intelligence",
                "Data Visualization",
                "Predictive Analytics",
                "Custom Reporting Solutions"
              ]}
              delay={2}
            />
            <ServiceCard
              icon={Code}
              title="Custom Software"
              description="Bespoke software solutions designed for your unique requirements."
              features={[
                "Custom Application Development",
                "Web & Mobile Applications",
                "Enterprise Software Solutions",
                "Legacy System Modernization",
                "API Development & Integration"
              ]}
              delay={3}
            />
            <ServiceCard
              icon={Server}
              title="IT Infrastructure"
              description="Robust and scalable IT infrastructure solutions."
              features={[
                "Cloud Computing Solutions",
                "Network Design & Implementation",
                "IT Infrastructure Optimization",
                "Virtualization Services",
                "Disaster Recovery Planning"
              ]}
              delay={4}
            />
            <ServiceCard
              icon={Shield}
              title="Cybersecurity"
              description="Comprehensive security solutions to protect your digital assets."
              features={[
                "Security Assessment & Audit",
                "Network Security Implementation",
                "Data Protection Strategies",
                "Security Monitoring",
                "Incident Response Planning"
              ]}
              delay={5}
            />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Our systematic approach ensures we deliver high-quality solutions that truly address your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            <ProcessStep
              number={1}
              title="Consultation"
              description="We start by understanding your business, challenges, and goals."
              delay={0}
            />
            <ProcessStep
              number={2}
              title="Strategy"
              description="We develop a customized strategy and solution design."
              delay={1}
            />
            <ProcessStep
              number={3}
              title="Implementation"
              description="Our experts build and implement the solution."
              delay={2}
            />
            <ProcessStep
              number={4}
              title="Support"
              description="We provide ongoing support and optimization."
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Special Focus Section */}
      <section className="py-20 px-6 md:px-10 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Industry Solutions
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Specialized AI Solutions for Your Industry
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                We understand that each industry has unique challenges and opportunities. Our team develops specialized AI solutions tailored to your specific industry needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1 flex-shrink-0">
                    <BarChart size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Finance & Banking</h3>
                    <p className="text-gray-600 dark:text-gray-400">Fraud detection, risk assessment, algorithmic trading, and personalized financial advice systems.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1 flex-shrink-0">
                    <Cpu size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                    <p className="text-gray-600 dark:text-gray-400">Predictive maintenance, quality control automation, supply chain optimization, and smart factory solutions.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1 flex-shrink-0">
                    <FileCode size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                    <p className="text-gray-600 dark:text-gray-400">Diagnostic assistance, medical image analysis, patient monitoring systems, and healthcare operations optimization.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                <Link to="/contact">
                  Discuss Your Industry Needs
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
              <div className="glass-card relative z-10 rounded-3xl p-1">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                    alt="Industry Solutions"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                    <h3 className="text-white font-semibold text-lg">Industry-Specific Solutions</h3>
                    <p className="text-white text-opacity-90 text-sm">Tailored AI systems for your unique industry challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 px-6 md:px-10 bg-gradient-to-r from-brand-500 to-brand-600 text-white">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Contact us today to discuss how our customized AI and IT solutions can help your business grow and innovate.
            </p>
            <Button asChild size="lg" variant="secondary" className="rounded-full">
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;


