import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowRight,
  Sparkles,
  Zap,
  BarChart3,
  Database,
  Brain,
  Star,
  Play,
  CheckCircle,
  TrendingUp,
  PieChart,
  FileText,
  Shield,
  Clock,
  Users,
  Award,
  ChevronLeft,
  ChevronRight
} from "../components/Icons.jsx";

export default function HomePage() {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    {
      src: "/data-analysis.jpg",
      alt: "Data Analysis Dashboard",
      title: "Advanced Analytics",
      description: "Transform raw data into meaningful insights"
    },
    {
      src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
      alt: "Data Visualization",
      title: "Smart Visualizations",
      description: "Beautiful charts and graphs that tell your story"
    },
    {
      src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center",
      alt: "AI Processing",
      title: "AI-Powered Processing",
      description: "Automated data cleaning and preprocessing"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Analysis",
      description: "Advanced machine learning algorithms analyze your data and provide intelligent insights automatically.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: BarChart3,
      title: "Smart Visualizations",
      description: "Generate beautiful, interactive charts and graphs that tell the story of your data.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Data Cleaning",
      description: "Automatically detect and fix data quality issues with intelligent preprocessing.",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "Report Generation",
      description: "Create comprehensive reports with insights, visualizations, and recommendations.",
      color: "from-green-500 to-green-600"
    }
  ];

  const stats = [
    { number: "10K+", label: "Datasets Processed", icon: Database },
    { number: "99.9%", label: "Accuracy Rate", icon: Award },
    { number: "50+", label: "Analysis Types", icon: BarChart3 },
    { number: "24/7", label: "AI Support", icon: Clock }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Data Scientist",
      company: "TechCorp",
      content: "Data Clinic transformed how we analyze our datasets. The AI suggestions are incredibly accurate!",
      avatar: "SJ"
    },
    {
      name: "Mike Chen",
      role: "Business Analyst",
      company: "DataFlow Inc",
      content: "The visualization features are outstanding. We can now present data insights like never before.",
      avatar: "MC"
    },
    {
      name: "Emily Rodriguez",
      role: "Research Director",
      company: "InnovateLab",
      content: "The automated data cleaning saved us weeks of manual work. Absolutely game-changing!",
      avatar: "ER"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [features.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <>
      {/* Dynamic gradient background - Full screen */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        <main className="w-full">
          {/* Hero Section - True full width */}
          <section className="py-16 w-full">
            <div className="w-full px-6">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-16 w-full">
                <div className="flex-1 w-full">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                    Unlocking Your Data's <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Potential
                    </span>
                  </h1>

                  <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed font-light">
                    Transforming raw data into actionable insights for a smarter tomorrow.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => navigate('/auth/login')}
                      className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                      <span className="relative z-10">Get Started</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button
                      onClick={() => navigate('/learn-more')}
                      className="px-6 py-3 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transform hover:scale-105 transition-all duration-300"
                    >
                      Learn More
                    </button>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="relative w-full">
                    <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                      <img
                        src={heroImages[currentImage].src}
                        alt={heroImages[currentImage].alt}
                        className="w-full h-80 object-cover transition-all duration-1000 ease-in-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{heroImages[currentImage].title}</h3>
                        <p className="text-sm opacity-90">{heroImages[currentImage].description}</p>
                      </div>
                    </div>

                    {/* Carousel Controls */}
                    <div className="flex justify-center mt-6 gap-2">
                      {heroImages.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImage(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === currentImage ? 'bg-blue-600' : 'bg-slate-300'
                          }`}
                        />
                      ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                      onClick={() => setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setCurrentImage((prev) => (prev + 1) % heroImages.length)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - True full width */}
          <section className="py-16 w-full bg-white/5 dark:bg-slate-900/20">
            <div className="w-full px-6">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Your End-to-End Data Solution
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-300  leading-relaxed">
                  Data Clinic is a modern platform providing comprehensive data solutions for businesses, researchers, and students.We handle every step of your data journey, from initial upload to final visualization, ensuring you gain maximum value from your information.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 w-full">
                <div className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto">
                    <CheckCircle className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Seamless Process</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow text-center">
                    Simply upload your Excel or CSV Dataset and we will take care of workflow
                  </p>
                </div>

                <div className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-8 shadow-xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col items-center">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 text-center">Actionable Insights</h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-grow text-center">
                    We transform normal data into clear, concise and impactful insights for informed decision making
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Process Steps - True full width */}
          <section className="py-16 w-full">
            <div className="w-full px-6">
              <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent text-center">
                  From Raw Data to Refined Understanding
                </h2>
              </div>

              <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <Database className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Data Cleaning</h3>
                  <p className="text-slate-600 dark:text-slate-300">Automated preprocessing and quality assurance</p>
                </div>

                <div className="hidden md:block text-slate-400 dark:text-slate-500 my-8">
                  <ArrowRight className="w-8 h-8" />
                </div>

                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <BarChart3 className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Data Preprocessing</h3>
                  <p className="text-slate-600 dark:text-slate-300">Intelligent transformation and feature engineering</p>
                </div>

                <div className="hidden md:block text-slate-400 dark:text-slate-500 my-8">
                  <ArrowRight className="w-8 h-8" />
                </div>

                <div className="text-center group hover:transform hover:scale-105 transition-all duration-300 flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-5 shadow-xl group-hover:shadow-2xl transition-shadow duration-300">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">Exploratory Data Analysis</h3>
                  <p className="text-slate-600 dark:text-slate-300">Deep insights and pattern discovery</p>
                </div>
              </div>

            </div>
          </section>

          {/* Stats Section - True full width */}
          <section className="py-16 w-full bg-white/5 dark:bg-slate-900/20">
            <div className="w-full px-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <div
                      key={index}
                      className="group text-center p-6 backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-[1.02] transition-all duration-3
00"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{stat.number}</div>
                      <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Testimonials - True full width */}
          <section className="py-16 w-full">
            <div className="w-full px-6">
              <div className="text-left mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent text-center">
                  What Our Users Say
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-8 w-full">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-6 shadow-xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-[1.02] transition-all duration-300 h-full flex flex-col"
                  >
                    <div className="flex items-center mb-5">
                      <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-white font-bold text-base mr-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{testimonial.name}</h4>
                        <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">{testimonial.role}, {testimonial.company}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 italic leading-relaxed flex-grow">"{testimonial.content}"</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
