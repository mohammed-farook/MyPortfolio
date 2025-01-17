/* eslint-disable no-unused-vars */
import React from 'react';
import './About.css';
import Hole from '../../ui/Hole'
import { skills } from '../../data';
import CardUi from '../../assets/CardUi'
const About = () => {
  return (
    <section id='about'>
      <div className='card section__wrapper'>
        <Hole/>
        <div className='column left-column'>
          <h3 className='skill__title'>My Skills</h3>
          <div className='skills__container'>
            {skills.map((skill,index)=>(
              <div className='flex skill__group' key={index}>
                {skill.data.map((List,key)=>(
                  <div className='blur__overlay flex__center skill' key={key}>
                    <div className='skill__logo'>
                      <img src={List.logo} alt=''/>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <CardUi className="card__ui-item" color={"var(--color-primary)"}/>
        </div>
        <div className='column right-column'>
          <h2 className='shine'>About Me</h2>
          <h1 className='title'>
            I am <span className='color__primary'>Mohammed Farook Imran</span>
          </h1>
          <p className='text__muted description'>
          Experienced Full Stack Developer with a passion for creating dynamic, intuitive, and responsive applications. 
          Proficient in multiple programming languages and frameworks, as well as database design and management. Strong 
          problem-solving and analytical skills, and a track record of delivering high-quality code on time and on budget.
          </p>
        </div>
      </div>    
    </section>
  )
}

export default About