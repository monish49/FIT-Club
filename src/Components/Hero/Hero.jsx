import React from 'react'
import Header from '../Header/Header'
import hero_image from '../../assets/hero_image.png'
import hero_image_back from '../../assets/hero_image_back.png'
import heart from '../../assets/heart.png'
import calories from '../../assets/calories.png'
import './Hero.css'
import { motion } from 'framer-motion'

function Hero() {
  const transition = { type: 'spring', duration: 3 }
  const mobile = window.innerWidth <= 768 ? true : false

  return (
    <div className="hero" id="home">
      <div className="blur hero-blur" ></div>
      <div className="left-h">
        <Header />
        {/* the best add */}
        <div className="the-best-ad">
          <motion.div initial={{ left: mobile ? '139px' : '239px' }}
            whileInView={{ left: '8px' }} transition={{ ...transition, type: 'tween' }} ></motion.div>
          <span>The best fitness club in Town</span>
        </div>

        {/* hero heading */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div>
            <span>In here we will help you to shape and build your ideal body and live up your life to fullest</span>
          </div>
        </div>

        {/* figures */}

        <div className="figures">
          <div>
            <span>+140</span>
            <span>EXPERT COACHES</span>
          </div>
          <div>
            <span>+ 978</span>
            <span>MEMBERS JOINED</span>
          </div>
          <div>
            <span>+ 50</span>
            <span>Fitness Programs</span>
          </div>
        </div>

        {/* hero button */}
        <div className="hero-button">
          <div className="btn">get started</div>
          <div className="btn">learn more</div>
        </div>



      </div>
      <div className="right-h">
        <button className="btn">join now</button>
        <motion.div initial={{ right: '-1rem' }}
          whileInView={{ right: '4rem' }} transition={transition} className="heart-rate">
          <img src={heart} alt="" />
          <span>heart rate</span><span>116 bpm</span>
        </motion.div>

        {/* hero images */}
        <img src={hero_image} alt="" className="hero-image" />
        <motion.img initial={{ right: '11rem' }}
          whileInView={{ right: '20rem' }} transition={transition} src={hero_image_back} alt="" className="hero-image-back" />

        {/* calories */}

        <motion.div initial={{ right: '37rem' }}
          whileInView={{ right: '28rem' }} transition={transition} className="calories">
          <img src={calories} alt="" />
          <div>
            <span>Calories burned </span>
            <span>220 kcal</span>
          </div>

        </motion.div>

      </div>
    </div>
  )
}

export default Hero