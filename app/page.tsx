'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { WandIcon, ShieldIcon, CodeIcon, SparklesIcon, StarIcon, NewspaperIcon, GlobeIcon, BookOpenIcon, UsersIcon, DownloadIcon } from "lucide-react"
import Link from "next/link"
import Header from '@/components/ui/header'

// assets
import * as assetsImages from './assets';
// media-partner
import { MediaPartners } from './assets/media-partner';
// sponsors
import { Sponsors } from './assets/sponsors';

const FloatingIcon = ({ icon: Icon, ...props }: any) => (
  <motion.div
    className="absolute z-10"
    animate={{
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    {...props}
  >
    <Icon className="text-[#FFD700] w-16 h-16" />
  </motion.div>
)

const MagicSparkle = () => (
  <motion.div
    className="absolute"
    initial={{ scale: 0, rotate: 0 }}
    animate={{
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
      times: [0, 0.5, 1],
      repeatDelay: Math.random() * 2,
    }}
  >
    <SparklesIcon className="text-[#FFD700] w-6 h-6" />
  </motion.div>
)

export default function InterfestLandingPage() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 })
  const cursorRef = useRef(null)
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })
  const [imagesLeft, setImagesL] = useState<{ src: string; alt: string; position: { left: string; bottom: string; }; rotate: number; scale: string; animate: boolean; }[]>([]); // Menentukan tipe state images
  const [imagesRight, setImagesR] = useState<{ src: string; alt: string; position: { right: string; bottom: string; }; rotate: number; scale: string; animate: boolean; }[]>([]); // Menentukan tipe state images

  useEffect(() => {
    const handleMouseMove = (e: any) => {
      setCursorPosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const ImagesR = [
      ...(window.innerWidth > 768 ? [
        { src: assetsImages.bukuImage.src, alt: "Buku", position: { right: '5.5rem', bottom: '20rem' }, rotate: 0, scale: 'w-64 h-64', animate: !disableAnimation },
        { src: assetsImages.kucingImage.src, alt: "Kucing", position: { right: '1rem', bottom: '0rem' }, rotate: 0, scale: 'w-16 h-24', animate: disableAnimation },
      ] : []),
      // Gambar khusus untuk mobile
      ...(window.innerWidth <= 768 ? [
        // { src: assetsImages.akarImage.src, alt: "Buku Mobile 1", position: { right: '1rem', bottom: '2rem' }, rotate: 0, scale: 'w-24 h-24' }, 
        // { src: assetsImages.bukuImage.src, alt: "Buku Mobile 2", position: { right: '3rem', bottom: '40rem' }, rotate: 0, scale: 'w-24 h-24', animate: !disableAnimation }, 
        { src: assetsImages.kucingImage.src, alt: "Buku 2", position: { right: '1rem', bottom: '0rem' }, rotate: 0, scale: 'w-16 h-24', animate: disableAnimation },
      ] : []),
    ];
    setImagesR(ImagesR);

    const ImagesL = [
      ...(window.innerWidth > 768 ? [
        { src: assetsImages.kualiImage.src, alt: "Kuali", position: { left: '5.5rem', bottom: '5rem' }, rotate: 0, scale: 'w-48 h-48', animate: !disableAnimation },
        { src: assetsImages.pedangImage.src, alt: "Pedang", position: { left: '10.5rem', bottom: '30rem' }, rotate: 0, scale: 'w-48 h-48', animate: !disableAnimation },
      ] : []),
      // Gambar khusus untuk mobile
      ...(window.innerWidth <= 768 ? [
        // { src: assetsImages.akarImage.src, alt: "Buku Mobile 1", position: { left: '1rem', bottom: '2rem' }, rotate: 0, scale: 'w-24 h-24' }, 
        // { src: assetsImages.kualiImage.src, alt: "Buku Mobile 2", position: { left: '3rem', bottom: '4rem' }, rotate: 0, scale: 'w-24 h-24', animate: !disableAnimation }, 
      ] : []),
    ];
    setImagesL(ImagesL);
  }, []); // Menjalankan efek hanya sekali saat komponen dimount

  const competitions = [
    {
      icon: WandIcon,
      title: "Sport",
      description: "Test your physical prowess and teamwork in a series of exciting sports competitions. From endurance challenges to strategic games, this category celebrates athleticism and collaboration."
    },
    {
      icon: ShieldIcon,
      title: "E-Sport",
      description: "Showcase your gaming skills in our E-Sport competition, where strategy, quick reflexes, and teamwork will be the keys to victory. Compete in popular games and claim the champion title."
    },
    {
      icon: CodeIcon,
      title: "Open Competition",
      description: "Unleash your creativity in the Open Competition, where participants are free to explore various fields of technology, from coding to design. Let your innovative ideas shine in this all-encompassing tech challenge."
    },
  ];

  const workshops = [
    { title: " Frontend Fundamentals: Code Your Way to the Top", icon: WandIcon, description: "merupakan rangkaian kegiatan workshop yang dirancang untuk pemula yang ingin memiliki kemampuan Frontend developer dan memberikan pengalaman komprehensif dan mendalam." },]

  const disableAnimation = false; // Tambahkan variabel ini untuk mengontrol animasi

  return (
    <div className="text-white min-h-screen font-sans overflow-x-hidden">
      <motion.div
        ref={cursorRef}
        className="fixed w-6 h-6 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: cursorPosition.x - 12,
          top: cursorPosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#FFD700] transform-origin-0" style={{ scaleX }} />

      <Header />

      <main>
        <section id="hero" className="min-h-screen flex flex-col justify-center items-center p-4 md:p-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            {[...Array(50)].map((_, i) => typeof window !== 'undefined' && (
              <motion.div
                key={i}
                className="absolute"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: Math.random() * 3 + 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: Math.random() * 2,
                }}
              >
                <StarIcon className="text-[#FFD700] w-5 h-5" />
              </motion.div>
            ))}
          </motion.div>
          <motion.img
            src={assetsImages.kunciImage.src}
            alt="Akar"
            className="top-20 left-20 w-16 h-16"
            animate={{ y: [-10, -20, -10] }} // Menambahkan gerakan naik dan turun
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} // Mengatur durasi dan pengulangan
          />
          <motion.h1
            className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 text-center relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-cover bg-center h-full w-full" style={{ backgroundImage: `url(${assetsImages.siluetImage.src})` }}>
              <span className="silver-stone-font bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text text-[3.5rem] md:text-[7.5rem]">
                INTERFEST
              </span>
            </div>
            <span className="silver-stone-font bg-gradient-to-r from-[#FFD700] to-[#FFA500] text-transparent bg-clip-text block text-[2.5rem]">
              2024
            </span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-center max-w-2xl mb-6 md:mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Unleash your inner magic
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative z-10"
          >
            <Link href="/register">
              <Button size="lg" className="text-lg bg-[#FFD700] text-[#0B0B3B] hover:bg-[#FFA500]">
                Register Now
              </Button>
            </Link>
          </motion.div>
          {imagesRight.map((image, index) => {
            const randomDuration = Math.random() * 20 + 10; // Durasi acak antara 10 hingga 30 detik
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{ right: image.position.right, bottom: image.position.bottom }}
                animate={image.animate ? {
                  y: [0, -20, 0], // Gerakan naik dan turun
                  scale: [1, 1.1, 1], // Efek pembesaran
                } : {}}
                transition={{
                  duration: randomDuration, // Durasi animasi acak
                  repeat: Infinity, // Ulangi animasi
                  ease: "easeInOut", // Jenis easing
                }}
              >
                <img src={image.src} alt={image.alt} className={`${image.scale}`} />
              </motion.div>
            );
          })}

          {imagesLeft.map((image, index) => {
            const randomDuration = Math.random() * 20 + 10; // Durasi acak antara 10 hingga 30 detik
            return (
              <motion.div
                key={index}
                className="absolute"
                style={{ left: image.position.left, bottom: image.position.bottom }}
                animate={image.animate ? {
                  y: [0, -20, 0], // Gerakan naik dan turun
                  scale: [1, 1.1, 1], // Efek pembesaran
                } : {}}
                transition={{
                  duration: randomDuration, // Durasi animasi acak
                  repeat: Infinity, // Ulangi animasi
                  ease: "easeInOut", // Jenis easing
                }}
              >
                <img src={image.src} alt={image.alt} className={`${image.scale}`} />
              </motion.div>
            );
          })}
        </section>

        <section id="about" className="min-h-screen py-12 md:py-24 flex flex-col justify-center p-4 md:p-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto relative z-10"
          >
            <img src={assetsImages.ifestImage.src} alt="Sponsor 3" className="h-32 w-32 my-5" />
            <Link href="#about">
              <h2 className="silver-stone-font text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-[#FFD700]">About Interfest</h2>
            </Link>
            <p className="text-base md:text-lg lg:text-xl mb-4 md:mb-6">
              Interfest is Telkom University's premier tech competition, bringing together the brightest minds in a celebration of innovation and creativity.
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Join us for an enchanting experience where technology meets magic, and where your skills can shine in our mystical challenges.
            </p>
            <div
              className="pt-10 flex flex-wrap justify-left">
              <img src={assetsImages.telyuImage.src} alt="Sponsor 1" className="h-12 w-12 mr-2 rounded-full" />
              <img src={assetsImages.himaImage.src} alt="Sponsor 3" className="h-12 w-12 mx-2" />
              <img src={assetsImages.prodiImage.src} alt="Sponsor 2" className="h-12 w-12 mx-2" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
          // className="max-w-4xl mx-auto relative z-10"
          >
            <div className="absolute top-0 left-0 hidden md:block" style={{ transform: 'rotate(120deg)', left: '-6rem', top: '3rem' }}>
              <img src={assetsImages.akarImage.src} alt="Akar" className="h-64 w-64" />
            </div>
            <div className="absolute top-0 right-0" style={{ transform: 'rotate(-130deg)', right: '-5rem', top: '3rem' }}>
              <img src={assetsImages.akarImage.src} alt="Kunci" className="h-64 w-64" />
            </div>
            {/* <div className="absolute bottom-15 left-20" style={{ transform: 'rotate(20deg)', left: '7rem', top: '35rem' }}>
            <img src={assetsImages.bukuImage.src} alt="Buku" className="h-64 w-64" />
          </div> */}
            <div className="absolute bottom-0 right-0" style={{ transform: 'rotate(20deg)', right: '7rem', top: '35rem' }}>
              <img src={assetsImages.bukuImage.src} alt="Kucing" className="h-32 w-32" />
            </div>
          </motion.div>
        </section>

        <section id="competitions" className="min-h-screen py-12 md:py-24 p-4 md:p-6 relative overflow-hidden">
          <Link href="#competitions">
            <h2 className="silver-stone-font text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#FFD700] relative z-10">Magical Competitions</h2>
          </Link>
          <div className="max-w-2xl mx-auto grid gap-6 md:gap-8 md:grid-rows-1 relative z-10">
            {competitions.map((comp, index) => (
              <motion.div
                key={comp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#2D1B4E] border-[#FFD700] border h-full">
                  <CardHeader>
                    <comp.icon className="h-12 w-12 mb-4 text-[#FFD700]" />
                    <CardTitle className="text-[#FFD700]">{comp.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">{comp.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
            <div className='flex justify-center'>
              <Link href="https://drive.google.com/drive/folders/1ge31AkJ7r2tfbNIDoC10AW--Pa-CfTDj?usp=sharing" target='_blank'>
                <Button size="lg" className="text-lg bg-[#FFD700] text-[#0B0B3B] hover:bg-[#FFA500]">
                  <DownloadIcon className="mr-2 h-5 w-5" />
                  Download Guidebook
                </Button>
              </Link>
            </div>
          </div>
          <FloatingIcon icon={CodeIcon} className="bottom-20 right-20" />
        </section>

        <section id="workshops" className="min-h-screen py-12 md:py-24 p-4 md:p-6 relative overflow-hidden">
          <Link href="#workshops">
            <h2 className="silver-stone-font text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#FFD700] relative z-10">Enchanting Workshops</h2>
          </Link>
          <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-6 md:gap-8 relative z-10">
            {workshops.map((workshop, index) => (
              <motion.div
                key={workshop.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-[#2D1B4E] border-[#FFD700] border h-full">
                  <CardHeader className="flex flex-row items-center space-x-4">
                    <workshop.icon className="h-12 w-12 text-[#FFD700]" />
                    <CardTitle className="text-[#FFD700]">{workshop.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white">{workshop.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <FloatingIcon icon={BookOpenIcon} className="top-20 left-20" />
          <FloatingIcon icon={UsersIcon} className="bottom-20 right-20" />
        </section>

        {/* <section id="sponsors" className="min-h-screen py-12 md:py-24 p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
          <Link href="#sponsors">
            <h2 className="silver-stone-font text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#FFD700] relative z-10">Our Magical Sponsors</h2>
          </Link>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8 max-w-4xl mx-auto relative z-10">
            {Sponsors.map((sponsor: { name: string; src: string }, i: number) => (
              <motion.div
                key={sponsor.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full h-auto md:w-48 md:h-48"
              >
                <div className="bg-[#2D1B4E] w-full h-full flex flex-col items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300">
                  <img src={sponsor.src} alt={sponsor.name} className="h-12 w-auto md:h-16 mb-2" />
                  <h3 className="text-center text-[#FFD700] text-xs md:text-sm font-bold uppercase mt-4">{sponsor.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <FloatingIcon icon={SparklesIcon} className="top-20 left-20" />
        </section> */}

        <section id="media-partners" className="min-h-screen py-12 md:py-24 p-4 md:p-6 flex flex-col justify-center relative overflow-hidden">
          <Link href="#media-partners">
            <h2 className="silver-stone-font text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-[#FFD700] relative z-10">Media Partners</h2>
          </Link>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mx-auto justify-center gap-6">
            {MediaPartners.map((partner: { name: string; src: string }, i: number) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, rotate: -10 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="w-full h-auto md:w-48 md:h-48"
              >
                <div className="bg-[#2D1B4E] w-full h-full flex flex-col items-center justify-center p-4 transform hover:scale-110 transition-transform duration-300">
                  <img src={partner.src} alt={partner.name} className="h-12 w-auto md:h-16 mb-2" />
                  <h3 className="text-center text-[#FFD700] text-xs md:text-sm font-bold uppercase mt-4">{partner.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
          <FloatingIcon icon={NewspaperIcon} className="bottom-20 right-20" />
        </section>
      </main>
    </div>
  )
}