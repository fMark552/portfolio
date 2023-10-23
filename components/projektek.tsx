'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { projectsData } from '@/lib/data'

import Project from './projekt'

export default function Projects() {
  return (
    <motion.section
      id="projektek"
      className="scroll-mt-28 mb-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <div className="text-center mb-5">
        <h1 className="text-[3rem]">Projektek</h1>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </motion.section>
  )
}
