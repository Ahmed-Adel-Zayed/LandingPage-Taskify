'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCheck, FiX, FiStar, FiZap, FiAward } from 'react-icons/fi'

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false)

  const plans = [
    {
      name: 'Free',
      icon: FiZap,
      description: 'Perfect for individuals getting started',
      monthlyPrice: 0,
      annualPrice: 0,
      color: 'from-gray-500 to-gray-600',
      popular: false,
      features: [
        { name: 'Up to 5 projects', included: true },
        { name: 'Basic task management', included: true },
        { name: '2 team members', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Email support', included: true },
        { name: 'Advanced analytics', included: false },
        { name: 'Custom integrations', included: false },
        { name: 'Priority support', included: false },
      ]
    },
    {
      name: 'Pro',
      icon: FiStar,
      description: 'Best for growing teams and businesses',
      monthlyPrice: 12,
      annualPrice: 120,
      color: 'from-blue-500 to-purple-600',
      popular: true,
      features: [
        { name: 'Unlimited projects', included: true },
        { name: 'Advanced task management', included: true },
        { name: 'Up to 25 team members', included: true },
        { name: 'Mobile app access', included: true },
        { name: 'Priority email support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Time tracking', included: true },
        { name: 'Custom integrations', included: false },
      ]
    },
    {
      name: 'Enterprise',
      icon: FiAward,
      description: 'For large organizations with advanced needs',
      monthlyPrice: 25,
      annualPrice: 250,
      color: 'from-purple-500 to-pink-600',
      popular: false,
      features: [
        { name: 'Unlimited everything', included: true },
        { name: 'Advanced task management', included: true },
        { name: 'Unlimited team members', included: true },
        { name: 'Mobile app access', included: true },
        { name: '24/7 phone & email support', included: true },
        { name: 'Advanced analytics', included: true },
        { name: 'Time tracking', included: true },
        { name: 'Custom integrations', included: true },
      ]
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
    <section id="pricing" className="section-padding bg-white dark:bg-gray-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200 text-sm font-medium mb-6"
          >
            <FiStar className="mr-2" size={16} />
            Simple Pricing
          </motion.div>
          
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Choose the Perfect
            <br />
            <span className="gradient-text">Plan for Your Team</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Start free and scale as you grow. All plans include our core features 
            with no hidden fees or surprise charges.
          </p>

          {/* Billing toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center space-x-4"
          >
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                isAnnual ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-medium ${isAnnual ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-200">
                Save 20%
              </span>
            )}
          </motion.div>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const originalPrice = isAnnual ? plan.monthlyPrice * 12 : null
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ 
                  scale: plan.popular ? 1.02 : 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border overflow-hidden ${
                  plan.popular 
                    ? 'border-blue-500 dark:border-blue-400 lg:scale-105' 
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0">
                    <div className={`bg-gradient-to-r ${plan.color} text-white text-center py-2 text-sm font-medium`}>
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`p-8 ${plan.popular ? 'pt-16' : ''}`}>
                  {/* Plan header */}
                  <div className="text-center mb-8">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} mb-4`}>
                      <IconComponent className="text-white" size={28} />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {plan.name}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {plan.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-gray-900 dark:text-white">
                          ${price}
                        </span>
                        <span className="text-gray-600 dark:text-gray-300 ml-2">
                          /{isAnnual ? 'year' : 'month'}
                        </span>
                      </div>
                      {isAnnual && originalPrice && originalPrice > 0 && (
                        <div className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                          <span className="line-through">${originalPrice}/year</span>
                          <span className="text-green-600 dark:text-green-400 ml-2 font-medium">
                            Save ${originalPrice - price}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* CTA Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                        plan.popular
                          ? `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg`
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {plan.name === 'Free' ? 'Get Started' : 'Start Free Trial'}
                    </motion.button>
                  </div>

                  {/* Features list */}
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-4">
                      What's included:
                    </h4>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * featureIndex }}
                        className="flex items-center"
                      >
                        {feature.included ? (
                          <FiCheck className="text-green-500 mr-3 flex-shrink-0" size={16} />
                        ) : (
                          <FiX className="text-gray-400 mr-3 flex-shrink-0" size={16} />
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? 'text-gray-700 dark:text-gray-300' 
                            : 'text-gray-400 dark:text-gray-500'
                        }`}>
                          {feature.name}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-500/5 to-purple-500/5 rounded-full translate-y-16 translate-x-16"></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include a 14-day free trial. No credit card required.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need a custom plan? <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">Contact our sales team</button>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default PricingSection