
'use client';

import Link from '@docusaurus/Link';
import { Carousel } from 'flowbite-react';

export const SliderContent = () => {
  return (
      <Carousel>
        <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
            <div className="flex w-full h-full bg-black justify-center items-center flex-col">
                <h1 className="text-white">Do you want to contribute to a go project?</h1>
                <Link href="/github" className="text-white">Join us on Github</Link>
            </div>
        </div>
        <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
  );
}

export default SliderContent;
