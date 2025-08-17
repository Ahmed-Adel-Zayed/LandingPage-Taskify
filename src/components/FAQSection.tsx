'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlus, FiMinus, FiHelpCircle } from 'react-icons/fi'

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Is there a free trial available?',
      answer: 'Yes! We offer a 14-day free trial for all our paid plans. You can explore all features without any limitations. No credit card is required to start your trial, and you can cancel anytime during the trial period.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Absolutely! You can cancel your subscription at any time from your account settings. If you cancel during your billing cycle, you\'ll continue to have access to all features until the end of your current billing period. No cancellation fees or hidden charges.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Security is our top priority. We use enterprise-grade encryption (AES-256) to protect your data both in transit and at rest. Our servers are hosted on secure cloud infrastructure with regular security audits. We are SOC 2 Type II compliant and follow GDPR guidelines for data protection.'
    },
    {
      question: 'How many team members can I add?',
      answer: 'It depends on your plan. The Free plan allows up to 2 team members, Pro plan supports up to 25 members, and Enterprise plan offers unlimited team members. You can always upgrade your plan as your team grows.'
    },
    {
      question: 'Do you offer integrations with other tools?',
      answer: 'Yes! We integrate with over 50+ popular tools including Slack, Microsoft Teams, Google Workspace, GitHub, Jira, Trello, Asana, and many more. Our API also allows for custom integrations. Enterprise customers get priority support for custom integration requests.'
    },
    {
      question: 'Is there a mobile app available?',
      answer: 'Yes, we have native mobile apps for both iOS and Android devices. The mobile apps include all core features like task management, team collaboration, notifications, and offline access. You can download them from the App Store or Google Play Store.'
    },
    {
      question: 'What kind of customer support do you provide?',
      answer: 'We offer multiple support channels: email support for all users, priority email support for Pro users, and 24/7 phone and email support for Enterprise customers. We also have an extensive knowledge base, video tutorials, and webinar training sessions.'
    },
    {
      question: 'Can I import data from other project management tools?',
      answer: 'Yes! We provide easy migration tools to import your data from popular platforms like Asana, Trello, Monday.com, Jira, and others. Our migration specialists can also help Enterprise customers with complex data migrations at no additional cost.'
    },
    {
      question: 'Do you offer custom plans for large organizations?',
      answer: 'Absolutely! For organizations with specific needs, we offer custom Enterprise plans with tailored features, dedicated account management, custom integrations, advanced security options, and volume discounts. Contact our sales team to discuss your requirements.'
    },
    {
      question: 'What happens to my data if I cancel my subscription?',
      answer: 'If you cancel your subscription, you\'ll have 30 days to export all your data. We provide easy export tools in multiple formats (CSV, JSON, PDF). After 30 days, your data will be permanently deleted from our servers. You can reactivate your account anytime during this period.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="section-padding bg-white dark:bg-gray-900">
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
            className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200 text-sm font-medium mb-6"
          >
            <FiHelpCircle className="mr-2" size={16} />
            Frequently Asked Questions
          </motion.div>
          
          <h2 className="heading-lg text-gray-900 dark:text-white mb-6">
            Got Questions?
            <br />
            <span className="gradient-text">We Have Answers</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Find answers to the most common questions about Taskify. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <span className="text-lg font-semibold text-gray-900 dark:text-white pr-8">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    {openIndex === index ? (
                      <FiMinus className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    ) : (
                      <FiPlus className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                    )}
                  </motion.div>
                </motion.button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <motion.p
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.2, delay: 0.1 }}
                          className="text-gray-600 dark:text-gray-300 leading-relaxed"
                        >
                          {faq.answer}
                        </motion.p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          {/* Contact support */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Our friendly support team is here to help. Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary"
                >
                  Contact Support
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-secondary"
                >
                  Browse Help Center
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid md:grid-cols-3 gap-8 text-center"
          >
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">&lt; 2 hours</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">98%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Enterprise Support</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default FAQSection