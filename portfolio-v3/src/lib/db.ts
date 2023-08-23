import { readable } from "svelte/store"
import computer from '$lib/img/computer-science.png'
import smartphone from '$lib/img/smartphone.png'
import cube from '$lib/img/cube.png'

const dbData = {
  mainSkills: [
    {
      title: 'Front-end development',
      desc: 'Proficiently architecting and implementing user interfaces with HTML, CSS, and JavaScript for seamless and engaging web experiences.',
      img: computer,
      imgAlt: 'Image signifying computer based work'
    },
    {
      title: 'Responsive design',
      desc: 'Building user interfaces that adapt to every device for a pleasant experience.',
      img: smartphone,
      imgAlt: 'Image representing different devices'
    },
    {
      title: 'Problem Solving',
      desc: 'Identify problems and coordinate effective solutions together to handle business as efficiently as possible.',
      img: cube,
      imgAlt: 'Rubiks cube puzzle game'
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