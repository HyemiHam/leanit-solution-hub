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
                  혁신적인 AI 및 IT 솔루션
                </span>
              </motion.div>
              
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-balance"
              >
                스마트 기술로{" "}
                <span className="text-brand">비즈니스의 혁신을 이끕니다</span>
              </motion.h1>
              
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
              >
                디지털 시대에 기업의 성장을 위한 맞춤형 AI 및 IT 솔루션을 제공합니다. 또한 전문가 팀이 최신 기술 역량 강화를 위한 특화된 교육 프로그램을 제공합니다.
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
                    서비스 알아보기
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="rounded-full border-brand text-brand hover:bg-brand-50">
                  <Link to="/contact">문의하기</Link>
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
                      alt="AI 기술"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                    
                    <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                      <h3 className="text-white font-semibold text-lg">최첨단 AI 솔루션</h3>
                      <p className="text-white text-opacity-90 text-sm">스마트 기술로 비즈니스의 혁신을 이끕니다</p>
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
              <p className="text-gray-600 dark:text-gray-400">글로벌 고객사</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">95%</h3>
              <p className="text-gray-600 dark:text-gray-400">고객 만족도</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">100+</h3>
              <p className="text-gray-600 dark:text-gray-400">완료된 프로젝트</p>
            </motion.div>
            
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="text-center"
            >
              <h3 className="text-4xl lg:text-5xl font-bold text-brand mb-2">15+</h3>
              <p className="text-gray-600 dark:text-gray-400">업계 경험</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features/Services Section */}
      <section className="py-20 px-6 md:px-10 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-brand-100 text-brand text-sm font-medium mb-4 inline-block">
              서비스 소개
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              비즈니스를 위한 종합 AI 및 IT 솔루션
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              기업 성장을 위한 AI와 IT 기술의 힘을 활용할 수 있도록 맞춤형 서비스를 제공합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Brain}
              title="AI 솔루션"
              description="비즈니스의 특정 요구사항과 과제에 맞춰 설계된 맞춤형 인공지능 솔루션을 제공합니다."
              delay={0}
            />
            <FeatureCard
              icon={Database}
              title="데이터 분석"
              description="고급 분석 솔루션으로 원시 데이터를 실행 가능한 통찰력으로 변환합니다."
              delay={1}
            />
            <FeatureCard
              icon={Code}
              title="맞춤형 소프트웨어"
              description="비즈니스 운영을 간소화하도록 설계된 맞춤형 소프트웨어 개발 서비스를 제공합니다."
              delay={2}
            />
            <FeatureCard
              icon={Layers}
              title="IT 인프라"
              description="비즈니스 성장을 지원하는 현대적이고 확장 가능하며 안전한 IT 인프라 솔루션을 제공합니다."
              delay={3}
            />
            <FeatureCard
              icon={GraduationCap}
              title="AI 교육"
              description="팀의 역량을 강화하기 위한 종합적인 AI 교육 프로그램과 워크숍을 제공합니다."
              delay={4}
            />
            <FeatureCard
              icon={Zap}
              title="프로세스 자동화"
              description="효율성을 높이고 비용을 절감하기 위해 반복적인 작업과 워크플로우를 자동화합니다."
              delay={5}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline" className="rounded-full border-brand text-brand hover:bg-brand-50">
              <Link to="/services">
                모든 서비스 보기
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
              AI로 비즈니스를 혁신할 준비가 되셨나요?
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              맞춤형 AI 및 IT 솔루션이 비즈니스 성장과 경쟁 우위를 유지하는 데 어떻게 도움이 될 수 있는지 논의해 보세요.
            </p>
            <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
              <Link to="/contact">
                문의하기
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
              고객 후기
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              고객사의 평가
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              당사의 AI 및 IT 솔루션으로 비즈니스 운영을 혁신한 기업들의 이야기를 들어보세요.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              text="leanIT에서 제공한 AI 솔루션은 고객 서비스 운영을 완전히 변화시켰습니다. 효율성이 40% 향상되었고 고객 만족도가 크게 개선되었습니다."
              author="박진호"
              position="CTO, 글로벌 테크 인더스트리"
              delay={0}
            />
            <TestimonialCard
              text="leanIT에서 제공하는 교육 프로그램은 포괄적이고 실용적이었습니다. 이제 우리 팀은 자체적으로 AI 솔루션을 구현할 수 있는 기술을 갖추게 되었고, 이는 비즈니스에 매우 가치 있는 자산이 되었습니다."
              author="김수진"
              position="혁신 책임자, 넥서스 코퍼레이션"
              delay={1}
            />
            <TestimonialCard
              text="leanIT와의 협업은 데이터 분석 역량에 있어 게임 체인저였습니다. 맞춤형 솔루션 덕분에 전에는 불가능하다고 생각했던 인사이트를 얻을 수 있게 되었고, 이를 통해 자신감 있게 전략적 결정을 내릴 수 있게 되었습니다."
              author="이민준"
              position="데이터 디렉터, 퓨처 파이낸스"
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
                교육 프로그램
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                AI 교육 프로그램으로 팀의 역량을 강화하세요
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
                AI 기술을 효과적으로 활용하는 데 필요한 기술을 갖추도록 설계된 종합적인 교육 프로그램을 제공합니다.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">맞춤형 교육 프로그램</h3>
                    <p className="text-gray-600 dark:text-gray-400">팀의 특정 요구사항과 기술 수준에 맞춰 설계된 커리큘럼을 제공합니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">전문 강사진</h3>
                    <p className="text-gray-600 dark:text-gray-400">실제 AI 구현 경험을 갖춘 업계 전문가들로부터 배우게 됩니다.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-100 text-brand flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">실용적인 적용</h3>
                    <p className="text-gray-600 dark:text-gray-400">실제 비즈니스 문제를 해결하기 위한 AI 적용에 중점을 둔 실습 세션을 진행합니다.</p>
                  </div>
                </div>
              </div>
              <Button asChild size="lg" className="bg-brand hover:bg-brand-600 text-white rounded-full">
                <Link to="/education">
                  교육 프로그램 자세히 알아보기
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
                    alt="AI 교육"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl">
                    <h3 className="text-white font-semibold text-lg">전문가 주도 교육</h3>
                    <p className="text-white text-opacity-90 text-sm">팀을 위한 종합적인 AI 교육 프로그램</p>
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
