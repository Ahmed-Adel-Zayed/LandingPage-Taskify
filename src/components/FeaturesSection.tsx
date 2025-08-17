'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  FiCheckSquare, 
  FiUsers, 
  FiTrendingUp, 
  FiSmartphone,
  FiClock,
  FiShield,
  FiZap,
  FiGlobe
} from 'react-icons/fi'

const FeaturesSection = () => {
  const features = [
    {
      icon: FiCheckSquare,
      title: 'Manage Tasks Easily',
      description: 'Create, organize, and prioritize tasks with our intuitive drag-and-drop interface. Set deadlines, add notes, and track progress effortlessly.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: FiUsers,
      title: 'Collaborate with Your Team',
      description: 'Invite team members, assign tasks, and communicate in real-time. Share files, leave comments, and stay synchronized across all projects.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: FiTrendingUp,
      title: 'Track Progress in Real-Time',
      description: 'Monitor project progress with visual dashboards, charts, and reports. Get insights into team productivity and project timelines.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: FiSmartphone,
      title: 'Cross-Platform Access',
      description: 'Access your tasks anywhere, anytime. Our responsive web app and mobile apps ensure you stay productive on any device.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: FiClock,
      title: 'Time Tracking',
      description: 'Built-in time tracking helps you understand how long tasks take and optimize your workflow for better productivity.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Your data is protected with enterprise-grade security, including encryption, secure backups, and compliance certifications.',
      color: 'from-teal-500 to-blue-500'
    },
    {
      icon: FiZap,
      title: 'Automation & Integrations',
      description: 'Automate repetitive tasks and integrate with your favorite tools like Slack, Google Drive, and more to streamline your workflow.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: FiGlobe,
      title: 'Global Accessibility',
      description: 'Available in multiple languages with timezone support. Work with teams across the globe without missing a beat.',
      color: 'from-pink-500 to-rose-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="features" className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm font-medium mb-6"
          >
            <FiZap className="mr-2" size={16} />
            Powerful Features
          </motion.div>
          
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Boost Productivity</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover the tools and features that make Taskify the perfect choice for teams 
            of all sizes. From simple task management to advanced collaboration.
          </p>
        </motion.div>

        {/* Features grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="text-white" size={28} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-pink-500/10 to-yellow-500/10 rounded-full translate-y-8 -translate-x-8 group-hover:scale-150 transition-transform duration-500"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Ready to experience all these features?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
            onClick={() => {
              const element = document.querySelector('#pricing')
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            Start Free Trial
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default FeaturesSection