import React from "react";
import {
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
  Clock
} from "../components/Icons.jsx";

export default function About() {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We continuously push the boundaries of data science to deliver cutting-edge solutions that drive real business value."
    },
    {
      icon: Shield,
      title: "Security & Privacy",
      description: "Your data's security is paramount. We implement enterprise-grade protection and comply with all major privacy regulations."
    },
    {
      icon: Users,
      title: "User-Centric Design",
      description: "Every feature is designed with our users in mind, ensuring intuitive experiences that empower data professionals at all levels."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to customer support and data accuracy."
    }
  ];

  const team = [
    {
      name: "Dr. Sarah Chen",
      role: "Chief Data Scientist",
      bio: "Former Google AI researcher with 15+ years in machine learning and data analytics.",
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      role: "VP of Engineering",
      bio: "Ex-Microsoft engineer specializing in scalable data platforms and cloud architecture.",
      avatar: "MR"
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Research",
      bio: "PhD in Statistics from MIT, leading our AI research initiatives and algorithm development.",
      avatar: "EW"
    }
  ];

  const stats = [
    { number: "500K+", label: "Data Points Processed Daily", icon: Database },
    { number: "99.9%", label: "Uptime SLA", icon: Clock },
    { number: "150+", label: "Enterprise Clients", icon: Users },
    { number: "24/7", label: "Expert Support", icon: Award }
  ];

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
            <div className="flex flex-col items-center mb-1">
              <div className="relative mb-4">
                <img
                  src="src/assets/data-analysis.jpg"
                  alt="Data Analysis Dashboard"
                  className="w-[450px] h-64 md:w-[450px] md:h-80 rounded-2xl object-cover shadow-2xl border-4 border-white/20"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-tight mb-8 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 dark:from-white dark:via-blue-100 dark:to-indigo-100 bg-clip-text text-transparent">
                About Data Clinic
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                Empowering organizations worldwide with intelligent data solutions that transform raw information into strategic advantages.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="py-20">
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Mission</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  To democratize data science by providing accessible, powerful, and intelligent tools that enable organizations of all sizes to unlock the full potential of their data. We believe that every business decision should be data-driven, and we're here to make that a reality.
                </p>
              </div>

              <div className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-3xl flex items-center justify-center mb-8 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Lightbulb className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">Our Vision</h3>
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  To become the world's most trusted data intelligence platform, where AI-powered insights drive innovation and growth across every industry. We envision a future where data literacy is universal and every organization can harness the power of their information.
                </p>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do and shape our culture
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={index}
                    className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500 h-full flex flex-col"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 mx-auto">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-center flex-grow">{value.description}</p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Leadership Team */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                Leadership Team
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
                Meet the experts driving innovation at Data Clinic
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500 text-center"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300 text-white font-bold text-2xl">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">{member.role}</p>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{member.bio}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                By the Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className="group text-center p-8 backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/30 hover:bg-white/15 dark:hover:bg-slate-800/30 hover:transform hover:scale-105 transition-all duration-500"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900 dark:text-white mb-3">{stat.number}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-20">
            <div className="text-center">
              <div className="backdrop-blur-xl bg-white/10 dark:bg-slate-800/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-slate-700/30 max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-200 bg-clip-text text-transparent">
                  Ready to Transform Your Data?
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
                  Join thousands of organizations already using Data Clinic to unlock their data's potential.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
                    <span className="relative z-10">Start Free Trial</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-500 transform hover:scale-105 transition-all duration-300">
                    Schedule Demo
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
