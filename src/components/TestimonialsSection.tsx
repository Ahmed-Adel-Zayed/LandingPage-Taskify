'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'
import Image from 'next/image'

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Project Manager',
      company: 'TechCorp Inc.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'Taskify has completely transformed how our team manages projects. The intuitive interface and powerful collaboration features have helped us cut project delivery time by 40%. It\'s simply the best task management tool we\'ve ever used.',
      highlight: 'Cut project time by 40%'
    },
    {
      name: 'Michael Chen',
      role: 'Startup Founder',
      company: 'InnovateLab',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'As a startup founder, I need tools that are both powerful and easy to use. Taskify delivers on both fronts. The real-time collaboration and progress tracking have been game-changers for our remote team.',
      highlight: 'Game-changer for remote teams'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      company: 'Creative Agency',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'The analytics and reporting features in Taskify give us incredible insights into our team\'s productivity. We can now identify bottlenecks early and optimize our workflows. The ROI has been phenomenal.',
      highlight: 'Phenomenal ROI'
    },
    {
      name: 'David Thompson',
      role: 'Operations Manager',
      company: 'Global Solutions',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'Managing multiple teams across different time zones was a nightmare before Taskify. Now everything is organized, transparent, and efficient. The mobile app keeps everyone connected no matter where they are.',
      highlight: 'Perfect for global teams'
    },
    {
      name: 'Lisa Wang',
      role: 'Product Designer',
      company: 'Design Studio',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'The user experience is absolutely beautiful. As a designer, I appreciate the attention to detail and the clean interface. But beyond looks, the functionality is top-notch. It\'s rare to find a tool that\'s both beautiful and powerful.',
      highlight: 'Beautiful and powerful'
    },
    {
      name: 'James Miller',
      role: 'Engineering Lead',
      company: 'DevTech Solutions',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      quote: 'The integrations with our existing tools saved us countless hours. Taskify seamlessly connects with our GitHub, Slack, and other development tools. It\'s like having a central command center for all our projects.',
      highlight: 'Seamless integrations'
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

  const StarRating = ({ rating }: { rating: number }) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <FiStar
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="testimonials" className="section-padding bg-gray-50 dark:bg-gray-800">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-200 text-sm font-medium mb-6"
          >
            <FiStar className="mr-2" size={16} />
            Customer Stories
          </motion.div>
          
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Loved by Teams
            <br />
            <span className="gradient-text">Around the World</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what real customers say about 
            how Taskify has transformed their productivity and teamwork.
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <div className="text-4xl text-blue-500 font-bold">"</div>
              </div>

              {/* Rating */}
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed relative z-10">
                "{testimonial.quote}"
              </blockquote>

              {/* Highlight */}
              <div className="mb-6">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
                  {testimonial.highlight}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 ring-2 ring-gray-200 dark:ring-gray-700">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 rounded-full translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700"
        >
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">4.9/5</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Rating</div>
              <div className="mt-2">
                <StarRating rating={5} />
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50K+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">99.9%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Support Available</div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            Join Thousands of Satisfied Customers
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Start your free trial today and see why teams love Taskify.
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

export default TestimonialsSection