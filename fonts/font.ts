import { JetBrains_Mono as FontMono } from "next/font/google"
import localFont from 'next/font/local'

export const fontMono = FontMono({
  subsets: ["latin"]
})

export const SmileySans = localFont({ src: 'SmileySans-Oblique.otf.woff2', variable:'--font-smiley'})

export const ChillReunion = localFont({ src: 'ChillReunion_Round.woff2', variable:'--font-chill' })

export const UranusPixel = localFont({ src: 'Uranus_Pixel_11Px.woff2', variable:'--font-pixel' })