import React, { useState } from 'react'
import { achievements } from '../constants'
import CertificateModal from '../components/CertificateModal'

const Achievements = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCardClick = (certificate, isPortrait) => {
    setSelectedCertificate({ certificate, isPortrait })
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedCertificate(null)
  }

  return (
    <section className='c-space section-spacing' id='achievements'>
      <h2 className='text-heading'>Achievements & Recognition</h2>
      <div className='grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 md:gap-5 lg:grid-cols-3'>
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            onClick={() => handleCardClick(achievement.certificate, achievement.isPortrait)}
            className='relative p-5 md:p-6 overflow-hidden transition-all duration-300 border cursor-pointer group rounded-xl bg-midnight border-white/5 hover:border-lavender/50 hover:shadow-lg hover:shadow-lavender/20 hover:-translate-y-2'
          >
            {/* Animated gradient background */}
            <div className='absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-lavender/5 via-lavender/10 to-transparent group-hover:opacity-100' />
            
            {/* Medal icon with animation */}
            <div className='relative flex items-center justify-center w-12 h-12 md:w-14 md:h-14 mb-3 md:mb-4 transition-transform duration-300 rounded-full bg-gradient-to-br from-lavender/20 to-lavender/30 group-hover:scale-110 group-hover:rotate-12'>
              <svg 
                className='w-6 h-6 md:w-8 md:h-8 transition-colors duration-300 text-lavender group-hover:text-lavender' 
                fill='currentColor' 
                viewBox='0 0 24 24'
              >
                <path d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z' />
              </svg>
            </div>

            {/* Content */}
            <div className='relative'>
              <h3 className='mb-2 md:mb-3 text-lg md:text-xl font-bold text-white transition-colors duration-300 group-hover:text-lavender'>
                {achievement.title}
              </h3>
              <p className='text-xs md:text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300'>
                {achievement.description}
              </p>
            </div>

            {/* Click indicator */}
            <div className='relative flex items-center gap-2 mt-3 md:mt-4 text-xs font-medium transition-all duration-300 text-lavender/60 group-hover:text-lavender'>
              <span>View Certificate</span>
              <svg 
                className='w-4 h-4 transition-transform duration-300 group-hover:translate-x-1' 
                fill='none' 
                stroke='currentColor' 
                viewBox='0 0 24 24'
              >
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
              </svg>
            </div>

            {/* Animated border effect */}
            <div className='absolute bottom-0 left-0 h-0.5 transition-all duration-500 w-0 bg-gradient-to-r from-lavender via-lavender to-lavender group-hover:w-full' />
          </div>
        ))}
      </div>

      <CertificateModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        certificate={selectedCertificate?.certificate} 
        isPortrait={selectedCertificate?.isPortrait}
      />
    </section>
  )
}

export default Achievements
