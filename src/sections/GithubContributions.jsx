import React, { useEffect, useState } from 'react'
import GitHubCalendar from 'react-github-calendar'

const GithubContributions = () => {
  const [stats, setStats] = useState({
    totalContributions: 0,
    totalRepos: 0
  })

  useEffect(() => {
    // Fetch GitHub stats
    const fetchGitHubStats = async () => {
      try {
        const githubToken = import.meta.env.VITE_GITHUB_TOKEN || '';
        const headers = githubToken ? { 
          'Authorization': `token ${githubToken}` 
        } : {};
        
        const response = await fetch('https://api.github.com/users/Abhishekgoyal007', { headers })
        const data = await response.json()
        setStats({
          totalRepos: data.public_repos,
          totalContributions: '521+' // GitHub API doesn't provide total contributions easily
        })
      } catch (error) {
        console.error('Error fetching GitHub stats:', error)
      }
    }
    fetchGitHubStats()
  }, [])

  return (
    <section className='c-space section-spacing' id='github'>
      <div className='flex flex-col items-center'>
        <h2 className='mb-3 text-center text-heading'>
          Days I <span className='text-aqua'>code on</span> Github
        </h2>
        <p className='mb-8 text-sm text-center text-neutral-400'>View my github contributions.</p>
        
        {/* GitHub Contribution Calendar - Centered */}
        <div className='flex justify-center w-full overflow-x-auto'>
          <div className='inline-block'>
            <GitHubCalendar 
              username='Abhishekgoyal007'
              blockSize={12}
              blockMargin={4}
              fontSize={14}
              colorScheme='dark'
              theme={{
                dark: ['#030412', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{ margin: '0 auto' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubContributions
