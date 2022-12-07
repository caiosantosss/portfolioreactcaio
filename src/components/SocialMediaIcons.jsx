import React from 'react';

const SocialMediaIcons = () => {
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      <a
        className='hover:opacity-50 transition duration-500 ease-in-out'
        href='https://www.linkedin.com/in/caiosantosss/'
        target='_blank'
        rel='noreferrer'
      >
        <img src='../assets/linkedin.png' alt='LinkedIn' />
      </a>
      <a
        className='hover:opacity-50 transition duration-500 ease-in-out'
        href='https://github.com/caiosantosss'
        target='_blank'
        rel='noreferrer'
      >
        <img src='../assets/githubicon.png' alt='github' />
      </a>
    </div>
  )
}

export default SocialMediaIcons
