import { Button } from 'flowbite-react';

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Want to be in Touch with Technology and Sports ?
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Technology and Sports
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.telefonica.com/en/communication-room/blog/technology-impact-on-sport/" target='_blank' rel='noopener noreferrer'>
                    More about Influence of Technology in fitness
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="https://upperhand.com/wp-content/uploads/2023/11/Blog-Featured-Image-11.webp" />
        </div>
    </div>
  )
}