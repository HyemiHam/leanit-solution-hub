
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Calendar, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";

const ContactCard = ({ 
  icon: Icon, 
  title, 
  info, 
  delay = 0 
}: { 
  icon: any; 
  title: string; 
  info: string | React.ReactNode; 
  delay?: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="p-6 rounded-2xl bg-white dark:bg-gray-900 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col items-center text-center"
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-brand-100 text-brand mb-4">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="text-gray-600 dark:text-gray-400">{info}</div>
    </motion.div>
  );
};

const Contact: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
    contactPurpose: "inquiry"
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prev => ({ ...prev, contactPurpose: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "We've received your message and will get back to you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
        contactPurpose: "inquiry"
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 z-0"></div>
        
        <div className="container mx-auto px-6 md:px-10 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
                Contact Us
              </span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Get in Touch with <span className="text-brand">leanIT</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Have questions or ready to start your AI journey? Reach out to our team for expert assistance.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-12 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ContactCard
              icon={MapPin}
              title="Our Location"
              info="123 Innovation Street, Seoul, South Korea"
              delay={0}
            />
            <ContactCard
              icon={Phone}
              title="Phone Number"
              info={
                <a 
                  href="tel:+821012345678" 
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  +82 10 1234 5678
                </a>
              }
              delay={1}
            />
            <ContactCard
              icon={Mail}
              title="Email Address"
              info={
                <a 
                  href="mailto:contact@leanit.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-brand transition-colors duration-200"
                >
                  contact@leanit.com
                </a>
              }
              delay={2}
            />
            <ContactCard
              icon={Calendar}
              title="Working Hours"
              info="Monday - Friday: 9:00 AM - 6:00 PM"
              delay={3}
            />
          </div>
        </div>
      </section>

      {/* Contact Form & Map Section */}
      <section className="py-16 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="overflow-hidden shadow-lg">
              <CardContent className="p-0">
                <div className="p-8">
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name*</Label>
                        <Input 
                          id="name" 
                          name="name" 
                          placeholder="Your name" 
                          value={formData.name} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address*</Label>
                        <Input 
                          id="email" 
                          name="email"
                          type="email" 
                          placeholder="your.email@example.com" 
                          value={formData.email} 
                          onChange={handleChange} 
                          required 
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company</Label>
                        <Input 
                          id="company" 
                          name="company" 
                          placeholder="Your company" 
                          value={formData.company} 
                          onChange={handleChange} 
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input 
                          id="phone" 
                          name="phone" 
                          placeholder="Your phone number" 
                          value={formData.phone} 
                          onChange={handleChange} 
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service">Service You're Interested In</Label>
                      <Select onValueChange={handleSelectChange} value={formData.service}>
                        <SelectTrigger id="service">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-solutions">AI Solutions</SelectItem>
                          <SelectItem value="data-analytics">Data Analytics</SelectItem>
                          <SelectItem value="custom-software">Custom Software</SelectItem>
                          <SelectItem value="it-infrastructure">IT Infrastructure</SelectItem>
                          <SelectItem value="education">Education & Training</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label>Reason for Contact</Label>
                      <RadioGroup 
                        value={formData.contactPurpose} 
                        onValueChange={handleRadioChange}
                        className="flex flex-wrap gap-6"
                      >
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="inquiry" id="inquiry" />
                          <Label htmlFor="inquiry" className="cursor-pointer">General Inquiry</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="quote" id="quote" />
                          <Label htmlFor="quote" className="cursor-pointer">Request a Quote</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="support" id="support" />
                          <Label htmlFor="support" className="cursor-pointer">Support</Label>
                        </div>
                      </RadioGroup>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Message*</Label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        placeholder="Please tell us about your project or inquiry" 
                        rows={5} 
                        value={formData.message} 
                        onChange={handleChange} 
                        required 
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full bg-brand hover:bg-brand-600 text-white" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
            
            <div className="relative">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-brand to-blue-500 opacity-20 blur-xl"></div>
              <div className="relative z-10 rounded-3xl p-1 bg-white dark:bg-gray-900 shadow-lg overflow-hidden h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202405.41235680125!2d126.83227822320547!3d37.56306396940181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca28b61c565cd%3A0x858aedb4e4ea83eb!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2sus!4v1685951367249!5m2!1sen!2sus" 
                  style={{ border: 0, width: "100%", height: "100%", minHeight: "500px" }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="leanIT Location"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-6 md:px-10">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Questions? We Have Answers
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Find answers to commonly asked questions about our services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-3">How long does it typically take to implement an AI solution?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Implementation timelines vary based on the complexity of the solution and your specific requirements. Simple solutions may take a few weeks, while more complex enterprise-wide implementations can take several months. During our initial consultation, we'll provide you with a detailed timeline.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Do you offer post-implementation support?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes, we provide comprehensive post-implementation support to ensure your AI solution continues to perform optimally. We offer various support packages tailored to your needs, including regular maintenance, updates, and training for your team.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What industries do you specialize in?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We have experience across multiple industries including finance, healthcare, manufacturing, retail, and education. Our diverse team brings industry-specific knowledge to each project, ensuring solutions that address the unique challenges of your sector.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Can you customize your training programs for our team?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Absolutely! We specialize in creating customized training programs tailored to your team's specific needs, skill levels, and industry context. Our corporate training solutions can be delivered on-site, virtually, or in a hybrid format.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">How do you ensure the security of our data?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Data security is our top priority. We implement robust security measures including encryption, secure access controls, and regular security audits. We comply with international data protection regulations and can work within your existing security frameworks.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">What is your approach to AI solution development?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                We follow a collaborative, iterative approach that starts with understanding your business needs. We then design, develop, test, and refine solutions with your feedback at each stage. This ensures the final product truly addresses your specific challenges and objectives.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Still have questions? Feel free to reach out to us directly.
            </p>
            <Button asChild variant="outline" className="border-brand text-brand hover:bg-brand-50 rounded-full">
              <a href="mailto:contact@leanit.com">
                Email Your Question
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
