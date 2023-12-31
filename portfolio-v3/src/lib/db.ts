import { readable } from "svelte/store"
import computer from '$lib/img/computer-science.png'
import smartphone from '$lib/img/smartphone.png'
import cube from '$lib/img/cube.png'

// project cover imgs
import techAppCoverImg from '$lib/img/tech-app/techAppCoverImg.png'
import auditCoverImg from '$lib/img/audit-app/auditCoverImg.png'
import calculatorCoverImg from '$lib/img/calculator-thumb.png'

const dbData = {
  mainSkills: [
    {
      title: 'Front-end Development',
      desc: 'Proficiently architecting and implementing user interfaces with HTML, CSS, and JavaScript for seamless and engaging web experiences.',
      img: computer,
      imgAlt: 'Image signifying computer based work'
    },
    {
      title: 'Responsive Design',
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
  ],
  portfolio: {
    ordered: [],
    featured: [],
    jsCalculator: {
      title: 'Javascript Calculator',
      quickDesc: 'I made a simple calculator using JS and BigDecimal to get JS to do math correctly.',
      quickLink: 'url',
      coverImg: calculatorCoverImg
    },
    reuseTechnicianApp: {
      title: 'Computer Technician App',
      quickDesc: 'This was an application built to support technicians at ReuseComputers to organize the inventory and fulfill orders.',
      quickLink: 'reuse-tech-app',
      coverImg: techAppCoverImg
    },
    reuseAuditApp: {
      title: 'Inventory Audit Web App',
      quickDesc: 'I built a website, API and backend to simplify the inventory audit process at ReuseComputers and provide the ability to use scanners to reduce time to complete an audit.',
      quickLink: 'reuse-audit-app',
      coverImg: auditCoverImg
    },
    canadaShipmentTool: {
      title: 'Canada Shipment Tool',
      quickDesc: "A browser extension that I built to simplify the process of creating a shipment from the United States to Canada.",
      quickLink: '#',
      coverImg: null
    }
  }
}

export const db = readable(dbData)