'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'

const incentives = [
  {
    "name": "Auto Detect Currency",
    "imageSrc": "/autodetect.png",
    "description": "Automatically detects and displays the currency based on currency symbol."
  },
  {
    "name": "Auto Convert on Select Amount",
    "imageSrc": "/autoconvert.png",
    "description": "Converts the selected amount to different currencies automatically when selected."
  },
  {
    "name": "Multiple Currency Converter",
    "imageSrc": "/multiple-convert.png",
    "description": "Allows conversion between multiple currencies with real-time exchange rates."
  },
  {
    "name": "Regularly Update Rates",
    "imageSrc": "/autoupdate.png",
    "description": "Frequently updates currency exchange rates to reflect current market values."
  },
  {
    "name": "On-Page Auto Converter",
    "imageSrc": "/onpage.png",
    "description": "Converts currencies automatically within the webpage without redirecting."
  },
  {
    "name": "Dark & Light Mode",
    "imageSrc": "/darkmode.png",
    "description": "Supports both dark and light themes for user preference."
  },
  {
    "name": "Customization Amount Format",
    "imageSrc": "/amount-format.png",
    "description": "Allows users to customize how currency amounts are displayed (custom decimal, thousand separator)."
  },
  {
    "name": "On-Page Popup Customization",
    "imageSrc": "/popupsize.png",
    "description": "Customizes popups for currency conversion on the webpage (small or medium)."
  },
  {
    "name": "160+ Support Currencies",
    "imageSrc": "/currency-support.png",
    "description": "Support conversion for 160 more currencies."
  }
]

export default function Page() {

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlayVideo, setIsPlayVideo] = useState<boolean>(videoRef.current?.paused ?? false)

  const addToChrome = () => {
    window.open('https://chromewebstore.google.com/detail/cbbfphmmpeojhblmcbnkedcfbocnmlkm', '_blank')
  }

  const seeDemo = () => {
    videoRef.current?.play()
    setIsPlayVideo(state => !state)
  }

  return (
    <div className="bg-gray-900">
      <header className="inset-x-0 top-0 z-50 w-7xl">
        <nav aria-label="Global" className="flex items-center justify-center p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center gap-2 font-semibold">
              <span className="sr-only">rapid currency converter</span>
              <Image
                alt="rapid currency converter"
                src="/logo.png"
                className="h-8 w-auto -rotate-3"
                width={100}
                height={100}
              /> Rapid Currency Converter
            </a>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-28 sm:py-48 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-200 sm:text-5xl">
              The fastest and most efficient currency converter.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              Simplify currency converter on your web page. Lightning fast converter. Reliable and user friendly.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                onClick={addToChrome}
                href="#addtochrome"
                className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 group"
              >
                <Image
                  src={'/chrome-logo.png'}
                  alt='Chrome logo'
                  width={25}
                  height={25}
                  className='group-hover:rotate-180 transition-all duration-500 '
                />
                Add to Chrome
              </a>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className='flex justify-center sm:-mt-16 mt-[-4rem]'>
        <div className='max-w-5xl relative rounded-xl overflow-hidden'>
        <iframe width="890" height="545" src="https://www.youtube-nocookie.com/embed/-13UJLV2ahc?si=iZQjuLDpKmgfhftO&amp;controls=0" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          {/* <video
            ref={videoRef}
            src='/video.mov'
            autoPlay={true}
            width={'100%'}
            loop
          /> */}
          {/* {
            !isPlayVideo && <>
              <div className='absolute backdrop-blur-sm w-[100%] h-full bg-gray-900 bg-opacity-30 top-0 left-0' />
              <button
                onClick={seeDemo}
                className="text-sm font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary px-4 py-2 rounded-full text-white hover:bg-blue-500 shadow-lg h-[100px] w-[100px] bg-opacity-80">
                {`PLAY`}
              </button>
            </>
          } */}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="rounded-2xl px-6 py-16 sm:p-16">
          <div className="mx-auto max-w-xl lg:max-w-none">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-100">
                How it works
              </h2>
            </div>
            <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-x-8 gap-y-10 sm:max-w-none lg:grid-cols-3">
              {incentives.map((incentive) => (
                <div key={incentive.name} className="text-center sm:flex sm:text-left lg:block lg:text-center mb-12 p-2">
                  <div className="sm:flex-shrink-0">
                    <div className="flow-root">
                      <img alt="" src={incentive.imageSrc} className="mx-auto" />
                    </div>
                  </div>
                  <div className="mt-3 sm:ml-6 sm:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-lg font-semibold text-gray-200">{incentive.name}</h3>
                    <p className="mt-2 text-md text-gray-400">{incentive.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="mx-auto max-w-7xl px-4 pb-32 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-100">
          Chrome Extension Rating
        </h2>
        <div className='flex gap-2 justify-center mt-3'>
          {[...Array(4)].map(i => (
            <Image
              key={'star' + i}
              src='/star.png'
              alt='rapid currency converter rating'
              width={32}
              height={32}
            />
          ))}
        </div>
        <div className="my-10 flex items-center justify-center gap-x-6">
            <a
              onClick={addToChrome}
              href="#addtochrome"
              className="rounded-full bg-primary px-8 py-2.5 text-sm font-semibold text-white shadow-sm hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 group"
            >
              {/* <Image
                src={'/chrome-logo.png'}
                alt='Chrome logo'
                width={25}
                height={25}
                className='group-hover:rotate-180 transition-all duration-500 '
              /> */}
              Rate Rapid Currency Converter
            </a>
          </div>
      </div>

      <footer className="bg-black">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div>
            <h4 className='mb-2'>Contact Us</h4>
            <a href={'mailto:iam.otnansirk@gmail.com'} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Mail</span>
              <Image src='/email.svg' aria-hidden="true" className="h-6 w-6" alt='email to' width={10} height={10} />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-500">
              &copy; 2024 Rapid Currency Converter, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
