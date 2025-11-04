import { useEffect } from 'react'
import ReactGA from 'react-ga4'

const TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || 'G-2V2J5T7S34'

export const initGA = () => {
  ReactGA.initialize(TRACKING_ID)
}

export const logPageView = () => {
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname })
}

export const logEvent = (category, action, label) => {
  ReactGA.event({
    category: category,
    action: action,
    label: label
  })
}

export const logException = (description, fatal = false) => {
  ReactGA.event({
    category: 'Exception',
    action: description,
    label: fatal ? 'Fatal' : 'Non-fatal'
  })
}

const Analytics = ({ children }) => {
  useEffect(() => {
    initGA()
    logPageView()
  }, [])

  return children
}

export default Analytics
