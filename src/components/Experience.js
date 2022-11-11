import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component'
import WorkIcon from '@material-ui/icons/Work'
import SchoolIcon from '@material-ui/icons/School'
import ComputerIcon from '@material-ui/icons/Computer'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import StarIcon from '@material-ui/icons/Star'

const Experience = () => {
  return (
    <>
      <div id="experience" className="container">
        <h2>Experience & Education</h2>
        
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#172C3C' }}
            // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
            date="June 2022 - October 2022"
            iconStyle={{ background: '#172C3C', color: '#fff' }}
            icon={<ComputerIcon/>}
          >
            <h3 className="vertical-timeline-element-title">Software Engineering Immersive</h3>
            <h4 className="vertical-timeline-element-subtitle">General Assembly</h4>
            <p>London, UK (Remote)</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="May 2013 - October 2021"
            iconStyle={{ background: '#B97853', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">The Seafood Shanty</h4>
            <p>Edgartown, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="September 2021, Valid Through March 2024"
            iconStyle={{ background: '#5B6C52', color: '#fff' }}
            icon={<LocalHospitalIcon />}
          >
            <h3 className="vertical-timeline-element-title">Registered Nurse</h3>
            <h4 className="vertical-timeline-element-subtitle">Reg MA License RN 2358207</h4>
            <p>Massachusetts</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2021 - Present"
            iconStyle={{ background: '#CCD6A5', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science: Nursing</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Massachusetts Amherst</h4>
            <p>Amherst, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="May 2021"
            iconStyle={{ background: '#CCD6A5', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Associate Degree: Nursing</h3>
            <h4 className="vertical-timeline-element-subtitle">Massasoit Community College</h4>
            <p>Brockton, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="September 2019 - May 2021"
            iconStyle={{ background: '#5B6C52', color: '#fff' }}
            icon={<LocalHospitalIcon />}
          >
            <h3 className="vertical-timeline-element-title">Student Nurse</h3>
            <h4 className="vertical-timeline-element-subtitle">Signature Healthcare Brockton Hospital, Brockton Veterans Association Medical Center, Good Samaritan Medical Center, New England Sinai Hospital</h4>
            <p>Brockton, MA & Stoughton, MA
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="June 2008 - March 2020"
            iconStyle={{ background: '#B97853', color: '#fff' }}
            icon={<WorkIcon />}
          >
            <h3 className="vertical-timeline-element-title">Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">Bosworth Place Inc. (Beantown Pub, Beantown Pub Cafe, The Hub Pub)</h4>
            <p>Boston, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="August 2016"
            iconStyle={{ background: '#172C3C', color: '#fff' }}
            icon={<ComputerIcon />}
          >
            <h3 className="vertical-timeline-element-title">Front-End Web Development</h3>
            <h4 className="vertical-timeline-element-subtitle">General Assembly</h4>
            <p>Boston, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="February 2015"
            iconStyle={{ background: '#CCD6A5', color: '#fff' }}
            icon={<SchoolIcon />}
          >
            <h3 className="vertical-timeline-element-title">Bachelor of Science: Biochemical Engineering</h3>
            <h4 className="vertical-timeline-element-subtitle">University of Massachusetts Amherst</h4>
            <p>Amherst, MA</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            iconStyle={{ background: '#172C3C', color: '#fff' }}
            icon={<StarIcon />}
          />
        </VerticalTimeline>


      </div>
      <div className="image-section palm-2"></div>
    </>
  )
}

export default Experience