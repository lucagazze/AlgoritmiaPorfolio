import React,{useState, useEffect} from 'react'
import { motion } from "framer-motion"

import "./Abous.scss"

import about01 from "../../assets/about01.png"
import about03 from "../../assets/about02.png"
import about02 from "../../assets/about03.png"
import about04 from "../../assets/about04.png"




const abouts = [
  { title: "Desarrollo Web", descripccion: "Somos un buen equipo", imgUrl: about01},
  { title: "Desarrollo Frontend", descripccion: "Somos un buen equipo", imgUrl: about02},
  { title: "Desarrollo Backend", descripccion: "Somos un buen equipo", imgUrl: about03},
  { title: "UI/UX", descripccion: "Somos un buen equipo", imgUrl: about04}

]

const About = () => {
  return (
    <>
      <h2 className="head-text">Sabemos que <span>Buenos Diseños</span> <br />significa  <span>Buenos Negocios</span></h2>


      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >


          <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>


          </motion.div>
        ))}
      </div>


    </>
  )
}

export default About