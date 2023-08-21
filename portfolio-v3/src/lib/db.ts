import { readable } from "svelte/store"

const dbData = {
  mainSkills: [
    {
      title: 'Front-end development',
      desc: 'Proficiently architecting and implementing user interfaces with HTML, CSS, and JavaScript for seamless and engaging web experiences.'
    },
    {
      title: 'Responsive design',
      desc: 'Building user interfaces that adapt to every device for a pleasant experience.'
    },
    {
      title: 'Problem Solving',
      desc: 'Identify problems and coordinate effective solutions together to handle business as efficiently as possible.'
    },
  ],
  technologies: [
    {
      name: 'Javascript',
      img: undefined,
    },
    {
      name: 'Typescript',
      img: undefined,
    },
    {
      name: 'Semantic HTML',
      img: undefined,
    },
    {
      name: 'Responsive CSS',
      img: undefined,
    },
    {
      name: 'Sveltekit',
      img: undefined,
    },
    {
      name: 'React',
      img: undefined,
    },
    {
      name: 'Next.js',
      img: undefined,
    },
    {
      name: 'tailwindcss',
      img: undefined,
    },
  ],
  about: [
    {}
  ]
}

export const db = readable(dbData)