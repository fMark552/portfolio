'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Rolam() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8  scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="rolam"
    >
      <h1 className="text-[3rem] mb-5">Rólam</h1>
      <br />
      <p className="text-[1.2rem]">
        <strong>Filemon Márk</strong> vagyok, 23 éves. 2019-ben érettségiztem és
        mellé szereztem asztalos végzettéget is. A faipari munkákakat nem
        találtam hozzám illőnek, ezért kipróbáltam magam, mint
        <i> targoncavezető</i>, <i>futár</i>, <i>áruszállító</i> vagy egy
        pizzázóban <i>szakács</i>, ahol az iskola mellett továbbra is dolgozok.
        Végül viszont áttértem az informatikára, azon belül is a weboldalak
        készítésére, mind frontend és backend részen.
      </p>
      <br />
      <hr />
      <br />
      <p className="text-[1.2rem]">
        Szabadidőmet szeretem edzésre, autózásra és motorozásra fordítani, de
        jelenleg inkább a tanulás és a projektjeim elkészítése teszi ki az időm
        legnagyobb részét. Ezeken kívül önkéntes szolgálatot teljesítek a Magyar
        Honvédség 6. Sipos Gyula Területvédelmi Ezredénél, mint
        <i> szakaszvezető</i>.
      </p>
    </motion.section>
  )
}
