/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.css';
import HeaderTitle from '../../ui/HeaderTitle';
import {profile8} from '../../assets';
import CodeBlock from '../../ui/CodeBlock';
import Facts from '../../ui/Facts';
import SocialHandles from '../../ui/SocialHandles';
import BreathCircle from '../../ui/BreathCircle'
const code = `const developer = {
   firstName: 'Mohammed Farook',
   lastName: 'Imran',
   aka:'Software Developer',
   hobby:repeat = () =>{
      //eat();
      //sleep();
      //code();
      //repeat();
   }
 }
`
const Header = () => {
  return (
    <header id='header'>
       <BreathCircle/>
       <div className='section__wrapper'>
        <div className='grid upper'>
          <div className='column'>
             <HeaderTitle/>
          </div>
          <div className='column'>
            <img src={profile8} className='profile__photo' alt='ProfilePic'/>
          </div>
        </div>
        <div className='card grid lower'>
          <CodeBlock 
            language={"Javascript"}
            code={code}  
            />
            <div>
            <p className='text__muted description'>
            I dissect intricate user experience challenges to engineer integrity-focused solutions that resonate with billions of users.
            
            </p>
            <Facts/>
            <SocialHandles/>
            </div>
        </div>
       </div>
    </header>
  )
}

export default Header