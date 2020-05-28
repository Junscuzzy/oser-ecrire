import React, { CSSProperties } from 'react'

export function FooterWave({ color }: { color?: CSSProperties['color'] }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 42 1440 220">
      <path
        fill={color || '#0097a7'}
        fillOpacity="1"
        d="M0,160L40,165.3C80,171,160,181,240,192C320,203,400,213,480,208C560,203,640,181,720,154.7C800,128,880,96,960,74.7C1040,53,1120,43,1200,42.7C1280,43,1360,53,1400,58.7L1440,64L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </svg>
  )
}

export function Blob1({ color }: { color?: CSSProperties['color'] }) {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color || 'rgba(0, 184, 212, 0.3)'}
        d="M51.2,-63.8C62.1,-51.8,63.8,-31.7,63.5,-14.1C63.1,3.5,60.6,18.5,54.1,32.6C47.6,46.6,37,59.6,21.6,69.5C6.3,79.5,-13.8,86.4,-29.8,81C-45.8,75.6,-57.7,57.9,-67.4,39.6C-77,21.4,-84.4,2.6,-82.2,-15.3C-80,-33.2,-68.1,-50.1,-52.8,-61.4C-37.5,-72.6,-18.8,-78.2,0.7,-79C20.1,-79.8,40.2,-75.9,51.2,-63.8Z"
        transform="translate(100 100)"
      />
    </svg>
  )
}

export function LightSectionTopWave({
  color,
}: {
  color?: CSSProperties['color']
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill={color || 'rgba(0, 184, 212, 0.3)'}
        fillOpacity="1"
        d="M0,32L80,48C160,64,320,96,480,112C640,128,800,128,960,122.7C1120,117,1280,107,1360,101.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  )
}

export function QuoteIconBefore({ color }: { color?: CSSProperties['color'] }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 508.044 508.044">
      <path
        fill={color || 'rgba(0, 184, 212, 0.3)'}
        d="M507.93 155.673c0-.055.006-.11.006-.165 0-66.793-54.145-120.938-120.938-120.938S266.061 88.714 266.061 155.508c0 66.794 54.15 120.938 120.938 120.938 13.727 0 26.867-2.393 39.162-6.609-27.209 156.09-148.93 256.752-36.096 173.905C515.182 351.874 508.07 159.198 507.93 155.673zM120.938 276.445c13.727 0 26.867-2.393 39.168-6.609-27.216 156.09-148.937 256.752-36.102 173.905 125.117-91.867 118.006-284.543 117.865-288.068 0-.055.006-.11.006-.165 0-66.793-54.144-120.938-120.937-120.938C54.144 34.57 0 88.714 0 155.508c0 66.794 54.15 120.937 120.938 120.937z"
      />
    </svg>
  )
}

export function InverseWave({ color }: { color?: CSSProperties['color'] }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200">
      <path
        fill={color || '#fff'}
        fillOpacity="1"
        d="M0,160L120,138.7C240,117,480,75,720,69.3C960,64,1200,96,1320,112L1440,128L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
      ></path>
    </svg>
  )
}
