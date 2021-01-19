import React from 'react'

import { FaTwitter as Twitter, FaYoutube as Youtube } from 'react-icons/fa'

const socials = {
  linkedin: 'https://www.linkedin.com/in/iagobarreto',
  github: 'https://github.com/iagokrt',
  tumblr: 'https://chilseok.tumblr.com',
  youtube: 'https://www.youtube.com/channel/UCSVD4tMIbM1FyyBgGY6zbwQ',
  twitter: 'https://www.twitter.com/iagokrt',
  pallete: {
    blue: '#1ca1f3',
    red: '#ff0101'
  },
  sizing: [42]
}

const Socials = () => {
  return (
    <article id="socials-icons-container">
      <aside>
        <a target="_blank" rel="noopener noreferrer" href={socials.twitter}>
          <Twitter color={socials.pallete.blue} size={socials.sizing[0]} />
        </a>
        <a target="_blank" rel="noopener noreferrer" href={socials.youtube}>
          <Youtube color={socials.pallete.red} size={socials.sizing[0]} />
        </a>
      </aside>
    </article>
  )
}

export default Socials
