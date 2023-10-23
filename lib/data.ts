import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'
import gym from '@/public/gym.png'
import weather from '@/public/weather.png'
import portfolio from '@/public/portfolio.png'

export const links = [
  // {
  //   name: 'Kezdőlap',
  //   hash: '#home',
  // },
  {
    name: 'Ismeretek',
    hash: '#ismeretek',
  },
  {
    name: 'Projektek',
    hash: '#projektek',
  },
  {
    name: 'Rólam',
    hash: '#rolam',
  },
  // {
  //   name: 'Tapasztalatok',
  //   hash: '#experience',
  // },
  // {
  //   name: 'Tanulmányok',
  //   hash: '#contact',
  // },
] as const

export const projectsData = [
  {
    title: 'Időjárás App',
    description:
      'Ez a weboldal egy API segítségével mutatja valós időben, hogy a keresett helységekben milyen az aktuális időjárás. `filemonmark-weather.netlify.app`',
    tags: ['React', 'JavaScript', 'OpenWeatherMap API'],
    imageUrl: weather,
  },
  {
    title: 'Portfólió',
    description:
      'Egy egyszerű. letisztult portfólió oldal, az eddigi projektjeim bemutatására.',
    tags: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'TypeScript'],
    imageUrl: portfolio,
  },
  {
    title: 'Gym App',
    description:
      'Az időjárás weboldalhoz hasonlóan, ez is API-t használ, különböző gyakorlatok bemutatására. Amikre akár testrész szerint is szűrhetünk `www.victoria-gym.com`',
    tags: ['React', 'JavaScript', 'RapidAPI'],
    imageUrl: gym,
  },
] as const

export const skillsData = [
  'React',
  // 'Next.js',
  'JavaScript',
  'TypeScript',
  'HTML',
  'CSS',
  // 'Node.js',
  // 'Git',
  'Next.js',
  'Tailwind CSS',
  'Framer Motion',
  // 'MongoDB',
  // 'Figma',
  'MUI',
  // 'Socket.io',
  'Bootstrap',
  // 'PHP',
  // 'Vite',
  // 'Express',
  // 'Native React',
  // 'Sanity',
  // 'Expo',
  // 'Convex',
  'Wordpress',
] as const
