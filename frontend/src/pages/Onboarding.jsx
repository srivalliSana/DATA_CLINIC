import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HiDatabase,
  HiChartPie,
  HiCube,
  HiUserGroup,
  HiCog,
  HiShieldCheck,
  HiCheckCircle,
  HiArrowRight,
} from 'react-icons/hi';

export default function Onboarding() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (user && token) {
      navigate('/upload-dataset');
    } else {
      navigate('/auth/login');
    }
  };

  return (
    <>
      {/* Dynamic gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <main className="relative z-10 flex flex-col gap-20 py-16 px-6">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row items-center gap-16 min-h-[80vh] items-center justify-center">
          <div className="flex-1 space-y-8 text-center md:text-left max-w-2xl">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black leading-tight bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                Unlocking Your Data's <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Potential
                </span>
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mx-auto md:mx-0"></div>
            </div>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Transforming raw data into actionable insights that empower smarter decisions for a better tomorrow.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 pt-4">
              <button
                onClick={handleGetStarted}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => navigate('/learn-more')}
                className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transform hover:scale-105 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          <div className="flex-1 max-w-md mx-auto">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-3xl blur-lg opacity-30 animate-pulse"></div>
              <img
                src="https://cdn-user-icons.flaticon.com/104272/104272074/1758961231318.svg?token=exp=1758962241~hmac=341d9d60bb306ae4d69f0064a6b51e5b"
                alt="Data AI analysis"
                className="relative w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Why Choose Data Clinic */}
        <section className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 transition-all duration-500">
          <h2 className="text-4xl font-bold mb-10 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Why Choose Data Clinic?
          </h2>
          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {[
              {
                icon: HiDatabase,
                title: 'Comprehensive Datasets',
                description:
                  'Access and manage a wide variety of datasets from multiple domains for all your needs.',
              },
              {
                icon: HiCog,
                title: 'Automated Preprocessing',
                description:
                  'Benefit from our intelligent pre-cleaning and transformation processes saving you time.',
              },
              {
                icon: HiShieldCheck,
                title: 'Security & Privacy',
                description:
                  'Your data is protected with state-of-the-art security practices and privacy compliance.',
              },
            ].map(({ icon: Icon, title, description }, index) => (
              <div key={index} className="text-center group hover:transform hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Core Features */}
        <section>
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Core Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: HiChartPie,
                title: 'Interactive Visualizations',
                description:
                  'Create stunning charts and dashboards that bring your data to life with user-friendly interactions.',
              },
              {
                icon: HiCube,
                title: 'AI-Powered Analytics',
                description:
                  'Leverage machine learning models that analyze your data patterns and predict trends.',
              },
              {
                icon: HiUserGroup,
                title: 'Collaborative Workflows',
                description:
                  'Collaborate securely with your team members, sharing insights seamlessly in real-time.',
              },
              {
                icon: HiCheckCircle,
                title: 'Custom Reports',
                description:
                  'Generate detailed reports tailored to your requirements and share with stakeholders effortlessly.',
              },
            ].map(({ icon: Icon, title, description }, idx) => (
              <div key={idx} className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-2xl p-8 shadow-xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500">
                <div className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300 flex-shrink-0">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-slate-900 dark:text-white">{title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Achievements */}
        <section className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30">
          <h2 className="text-4xl font-bold mb-16 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: '10+', label: 'Datasets Processed', icon: HiDatabase },
              { number: '99.9%', label: 'Accuracy Rate', icon: HiCheckCircle },
              { number: '20+', label: 'Analysis Types', icon: HiChartPie },
              { number: '24/7', label: 'AI Support', icon: HiCog },
            ].map(({ number, label, icon: Icon }, idx) => (
              <div
                key={idx}
                className="group text-center p-8 backdrop-blur-xl bg-white/5 dark:bg-slate-800/10 rounded-2xl shadow-xl border border-white/10 dark:border-slate-700/20 hover:bg-white/10 dark:hover:bg-slate-800/20 hover:transform hover:scale-105 transition-all duration-500"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-3xl font-bold text-slate-900 dark:text-white block mb-2">{number}</span>
                <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">{label}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
