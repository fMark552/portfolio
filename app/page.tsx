import Ismeretek from '@/components/ismeretek'
import Projektek from '@/components/projektek'
import Rolam from '@/components/rolam'

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 py-8">
      <Ismeretek />
      <Projektek />
      <Rolam />
    </main>
  )
}
