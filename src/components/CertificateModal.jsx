import React from 'react'

const CertificateModal = ({ isOpen, onClose, certificate, isPortrait }) => {
  if (!isOpen) return null

  return (
    <div 
      className='fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm'
      onClick={onClose}
    >
      <div 
        className={`relative ${isPortrait ? 'max-w-2xl' : 'max-w-5xl'} max-h-[90vh] w-full mx-4`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button 
          onClick={onClose}
          className='absolute z-10 p-2 transition-all duration-200 rounded-full -top-4 -right-4 bg-midnight hover:bg-royal hover:scale-110'
        >
          <svg 
            className='w-6 h-6 text-white' 
            fill='none' 
            stroke='currentColor' 
            viewBox='0 0 24 24'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>

        {/* Certificate image */}
        <img 
          src={certificate} 
          alt='Certificate' 
          className={`w-full h-auto rounded-xl shadow-2xl ${isPortrait ? 'max-h-[90vh] object-contain' : ''}`}
        />
      </div>
    </div>
  )
}

export default CertificateModal
