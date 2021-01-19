import React from 'react'

import MusicPlayer from './MusicPlayer'

import { FaGithub as GithubIcon } from 'react-icons/fa'

import { CgRead } from 'react-icons/cg'

const BlogLink = () => {
  return (
    <div className="wrapper-blog">
      <button>
        <a
          href="https://github.com/iagokrt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon color="#3c1e70" size={34} />
        </a>
      </button>
      <button>
        <a
          href="http://writeisland.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CgRead color={'#882923'} size={34} />
        </a>
      </button>
    </div>
  )
}

export default function Header() {
  return (
    <header>
      {/** <MusicPlayer url="/demo.mp3" /> */}
      <BlogLink />
    </header>
  )
}
