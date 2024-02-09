/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rUuMOMaU0CD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Image from 'next/image';

export default function Logos() {
  const logoSrcs = ["/logos/openai.png", "/logos/csail.png", "/logos/chai.png", "/logos/redwood.png", "/logos/el.png"];

  return (
    <div className="flex flex-wrap mt-12">
      {logoSrcs.map((src, index) => (
        <div key={index} className='relative basis-1/4 h-32'>
          <Image
            src={src}
            alt={`Logo ${index + 1}`}
            fill
            style={{ objectFit: "contain" }}
          />
        </div>
      ))}
    </div>
  );
}
