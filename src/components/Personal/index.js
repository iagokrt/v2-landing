import React from 'react'

import { CgPokemon, CgRead, CgGames, CgGhost, CgAlarm } from 'react-icons/cg'
import { GiKnockout } from 'react-icons/gi'

import { BiGame } from 'react-icons/bi'

import Socials from './Socials'

const templateLocales = {
  footerLabel: 'Designed by @iagokrt'
}

const data = {
  katrin: 'https://sketchfab.com/katrin.701'
}

const Personal = () => {
  return (
    <>
      <h4 className="akward">
        I'm a software developer, frontend designer and former visual
        communications designer that loves storytelling concepts and creative
        coding...
      </h4>
      <h4 className="akward">
        I'm currently on 4 Semester on contents related to: C, JavaScript,
        Threejs, WebGL, Node.js Servers, GLSL Shaders, Git.
      </h4>
      <Socials />
      <a id="footer" href="https://twitter.com/iagokrt">
        {templateLocales.footerLabel}
      </a>
    </>
  )
}

export default Personal
