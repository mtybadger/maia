/**
 * v0 by Vercel.
 * @see https://v0.dev/t/rUuMOMaU0CD
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"


export default function PapersCarousel() {
  return (
    <div className="w-full max-w-5xl py-12">
    <Carousel className="">
      <CarouselContent>
        <PaperComponent 
          altText="Research Paper 1"
          imgSrc="/papers/paper1.png"
          tags={[{title: "NeurIPS 2022", color: "bg-blue-200"}, {title: "Adversarial Attacks", color: "bg-red-200"}]}
          title="Robust Feature-Level Adversaries are Interpretability Tools"
          authors={["Stephen Casper"]}
          link="https://arxiv.org/abs/2110.03605"
        />
        <PaperComponent 
          altText="Research Paper 2"
          imgSrc="/papers/paper2.png"
          tags={[{title: "RLHF", color: "bg-green-200"}]}
          title="Open Problems and Fundamental Limitations of RLHF"
          authors={["Stephen Casper", "Tony Wang", "Eric J. Michaud"]}
          link="https://arxiv.org/abs/2307.15217"
        />
        <PaperComponent 
          altText="Research Paper 3"
          imgSrc="/papers/paper3.png"
          tags={[{title: "Adversarial Attacks", color: "bg-red-200"}]}
          title="Adversarial Policies Beat Superhuman Go AIs"
          authors={["Tony Wang"]}
          link="https://arxiv.org/pdf/2211.00241.pdf"
        />
        <PaperComponent 
          altText="Research Paper 4"
          imgSrc="/papers/paper4.png"
          tags={[{title: "NeurIPS 2023", color: "bg-blue-200"}, {title: "Scaling Laws", color: "bg-purple-200"}]}
          title="The Quantization Model of Neural Scaling"
          authors={["Eric J. Michaud", "Uzay Girit"]}
          link="https://arxiv.org/abs/2303.13506"
        />
        <PaperComponent 
          altText="Research Paper 5"
          imgSrc="/papers/paper5.png"
          tags={[{title: "NeurIPS 2023", color: "bg-blue-200"}, {title: "Mech Interp", color: "bg-orange-200"}]}
          title="Forbidden Facts: An Investigation of Competing Objectives in Llama-2"
          authors={["Tony Wang", "Kaivu Hariharan"]}
          link="https://arxiv.org/pdf/2312.08793.pdf"
        />
        <PaperComponent 
          altText="Research Paper 6"
          imgSrc="/papers/paper6.png"
          tags={[{title: "NeurIPS 2023", color: "bg-blue-200"}, {title: "Adversarial Attacks", color: "bg-red-200"}]}
          title="Red Teaming Deep Neural Networks
          with Feature Synthesis Tools"
          authors={["Stephen Casper", "Kaivu Hariharan"]}
          link="https://arxiv.org/pdf/2302.10894.pdf"
        />
        <PaperComponent 
          altText="Research Paper 7"
          imgSrc="/papers/paper7.png"
          tags={[{title: "OpenAI", color: "bg-rose-200"}, {title: "Governance", color: "bg-sky-200"}]}
          title="Building an early warning system for LLM-aided biological threat creation"
          authors={["Neil Choudhury"]}
          link="https://openai.com/research/building-an-early-warning-system-for-llm-aided-biological-threat-creation"
        />
      </CarouselContent>
      <CarouselNext />
    </Carousel>
    </div>
  )
}

interface Tag {
  title: string;
  color: string;
}

interface PaperComponentProps {
  altText: string;
  imgSrc: string;
  tags: Tag[];
  title: string;
  authors: string[];
  link: string;
}

const PaperComponent: React.FC<PaperComponentProps> = ({altText, imgSrc, tags, title, authors, link}) => {
  return (
    <CarouselItem className="basis-1/5">
      <a href={link}>
      <div className="flex flex-col p-1">
        <img
          alt={altText}
          className="aspect-[4/5] object-cover rounded-lg shadow-lg"
          height={280}
          src={imgSrc}
        />
        <h4 className="mt-3 mb-1 text-md font-bold">{title}</h4>
        {authors.map((author, index) => (
          <p key={index} className="text-sm text-gray-600">{author}</p>
        ))}
        <div className="mt-3 flex flex-wrap gap-1">
          {tags.map((tag, index) => (
            <span key={index} className={`px-2 py-1 rounded-full text-xs ${tag.color} text-black`}>{tag.title}</span>
          ))}
        </div>
      </div>
      </a>
    </CarouselItem>
  )
}
