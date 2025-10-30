import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DocumentDuplicateIcon,
  Cog6ToothIcon,
  ChartBarIcon,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Zap,
  Shield,
  Users,
  Target,
  Award,
  Lightbulb,
  TrendingUp,
  Brain,
  Database,
  BarChart3,
  Clock,
  Star,
  Play
} from '../components/Icons.jsx';

const steps = [
  {
    title: "Seamless Upload",
    description: "Simply upload your Excel or CSV dataset, and our AI takes care of the entire workflow with intelligent automation.",
    icon: DocumentDuplicateIcon,
    features: ["Drag & drop interface", "Auto-detect file formats", "Real-time validation"]
  },
  {
    title: "Smart Preprocessing",
    description: "Advanced AI algorithms clean, transform, and prepare your data for analysis with unprecedented accuracy.",
    icon: Cog6ToothIcon,
    features: ["Missing value imputation", "Outlier detection", "Data normalization"]
  },
  {
    title: "AI-Powered Insights",
    description: "Generate comprehensive reports with actionable insights, beautiful visualizations, and predictive analytics.",
    icon: ChartBarIcon,
    features: ["Automated reporting", "Interactive dashboards", "Predictive modeling"]
  }
];

const benefits = [
  {
    icon: Clock,
    title: "Save 80% Time",
    description: "Reduce data preparation time from days to hours with automated workflows."
  },
  {
    icon: TrendingUp,
    title: "Increase Accuracy",
    description: "AI-powered algorithms deliver 99.9% accuracy in data processing and analysis."
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption and compliance with GDPR, HIPAA, and SOC 2 standards."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights, collaborate on projects, and maintain version control across teams."
  }
];

const faqs = [
  {
    question: "How does Data Clinic handle sensitive data?",
    answer: "We implement enterprise-grade security with end-to-end encryption, SOC 2 compliance, and never store your raw data permanently. All processing happens in secure, isolated environments."
  },
  {
    question: "What file formats are supported?",
    answer: "We support Excel (.xlsx, .xls), CSV, JSON, and SQL databases. Our AI automatically detects and handles various data formats and encodings."
  },
  {
    question: "Can I integrate Data Clinic with my existing tools?",
    answer: "Yes! We offer REST APIs, Python SDK, and integrations with popular tools like Tableau, Power BI, and major cloud platforms (AWS, GCP, Azure)."
  },
  {
    question: "What's included in the free trial?",
    answer: "Free trial includes full access to all features, processing up to 100MB of data, unlimited reports, and 24/7 support for 14 days."
  }
];

export default function LearnMore() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState(null);
  const totalSteps = steps.length;

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalSteps);
  };

  const ActiveIcon = steps[activeIndex].icon;

  return (
    <>
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10">
        <main className="py-16">
          {/* Hero Section */}
          <section className="text-center py-20">
            <div className="flex flex-col items-center mb-16">
              <div className="relative mb-8">
                <img
                  src="/data-analysis.jpg"
                  alt="Data Analysis Dashboard"
                  className="w-32 h-32 md:w-40 md:h-40 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                />
                <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full p-3 shadow-lg">
                  <Zap className="w-6 h-6 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Learn More About Data Clinic
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Discover how our AI-powered platform transforms raw data into strategic insights that drive business growth.
              </p>
            </div>
          </section>

          {/* Process Overview */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Your End-to-End Data Solution
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
                From raw data to actionable insights in minutes, not days. Our intelligent platform handles every step of your data journey.
              </p>
            </div>

            {/* Enhanced Carousel */}
            <div className="flex flex-col items-center w-full max-w-6xl mx-auto">
              <div className="flex justify-center items-center gap-8 mb-8">
                <button
                  aria-label="Previous step"
                  onClick={goPrev}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <ChevronLeft className="w-7 h-7" />
                </button>
                <div className="relative">
                  <ActiveIcon className="w-48 h-48 text-blue-600 drop-shadow-2xl transition-all duration-500" />
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-full blur-xl"></div>
                </div>
                <button
                  aria-label="Next step"
                  onClick={goNext}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300"
                >
                  <ChevronRight className="w-7 h-7" />
                </button>
              </div>

              <div className="flex gap-3 mb-12">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      idx === activeIndex ? "bg-blue-600 scale-125" : "bg-blue-300 hover:bg-blue-400"
                    }`}
                  />
                ))}
              </div>

              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 max-w-4xl w-full">
                <h3 className="text-3xl font-bold mb-6 text-center flex items-center justify-center gap-4">
                  <ActiveIcon className="w-10 h-10 text-blue-500" />
                  {steps[activeIndex].title}
                </h3>
                <p className="text-xl text-center leading-relaxed mb-8 text-slate-600 dark:text-slate-300">
                  {steps[activeIndex].description}
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  {steps[activeIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Why Choose Data Clinic?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Join thousands of organizations already transforming their data workflows
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">{benefit.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center flex-grow">{benefit.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Everything you need to know about getting started with Data Clinic
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-2xl border border-white/20 dark:border-slate-700/30 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 dark:hover:bg-slate-800/10 transition-colors duration-300"
                  >
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{faq.question}</h3>
                    <ChevronRight className={`w-6 h-6 text-slate-500 transition-transform duration-300 ${activeFaq === index ? 'rotate-90' : ''}`} />
                  </button>
                  {activeFaq === index && (
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="text-center">
              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Ready to Transform Your Data Workflow?
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Start your free trial today and experience the power of AI-driven data analysis.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button
                    onClick={() => navigate('/auth/login')}
                    className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button
                    onClick={() => navigate('/about')}
                    className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transform hover:scale-105 transition-all duration-300"
                  >
                    Learn About Us
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
