import { experiences } from '../constants'
import { Timeline } from '../components/TimeLine'

const Experiences = () => {
  return (
    <div className='w-full' id='work'>
        <Timeline data={experiences} />
    </div>
  )
}

export default Experiences