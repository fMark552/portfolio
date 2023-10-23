'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { skillsData } from '@/lib/data'

export default function Ismeretek() {
  return (
    <motion.section
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="ismeretek"
    >
      <h1 className="text-[3rem] mb-5">Ismeretek</h1>
      <ul className="flex flex-wrap justify-center gap-2 texl-lg">
        {skillsData.map((skill, index) => (
          <li
            className="bg-black dark:bg-white dark:text-black p-5 m-1 text-[1rem] tracking-wider text-white rounded-full"
            key={index}
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.section>
  )
}
