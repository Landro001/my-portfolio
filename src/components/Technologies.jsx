import { RiReactjsLine } from "react-icons/ri"
import { FaAngular } from "react-icons/fa"
import { FaPython } from "react-icons/fa"
import { FaJava } from "react-icons/fa"
import { FaPhp } from "react-icons/fa"
import { DiMysql } from "react-icons/di"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaAngular className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPython className="text-7xl text-yellow-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaJava className="text-7xl text-white"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaPhp className="text-7xl text-sky-900"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMysql className="text-7xl text-sky-800"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies