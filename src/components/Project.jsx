import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'

const Project = ({ title, description, tags, subDescription, href, image, setPreview}) => {
    const [isHidden, setIsHidden] = useState(false);
  return (
    <>
    <div className='flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0' onMouseEnter={()=>setPreview(image)} onMouseLeave={()=>setPreview(null)}>
        <div>
            <p className='text-2xl'>{title}</p>
            <div className='flex gap-5 mt-2 text-sand'>
                {tags.map((tag) => (
                    <span key={tag.id} className='px-2 py-1 text-sm border border-sand rounded-full'>{tag.name}</span>
                ))}
            </div>
        </div>
        <button onClick={()=>setIsHidden(true)} className='flex items-center gap-1 cursor-pointer hover-animation'>
            Read More
            <img src="assets/arrow-right.svg" alt="right arrow" className='w-5' />
        </button>
    </div>
    <div className='bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full' />
    {isHidden && (<ProjectDetails 
        title={title} 
        description={description} 
        subDescription={subDescription} 
        href={href} 
        image={image}
        tags={tags}
        closeModal={()=>setIsHidden(false)}
    />)}
    </>
  )
}

export default Project