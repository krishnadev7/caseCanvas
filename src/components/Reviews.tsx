import { useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { useInView } from "framer-motion";

const PHONES = [
    '/testimonials/1.jpg',
    '/testimonials/2.png',
    '/testimonials/3.jpg',
    '/testimonials/4.png',
    '/testimonials/5.png',
    '/testimonials/6.png'
]

function splitArray<T>(array:Array<T>, numParts:number){
    const result: Array<Array<T>> = []

    for(let i = 0; i < array.length; i++){
        const index = i % numParts;
        if(!result[index]){
            result[index]=[]
        }
        result[index].push(array[i]);
    }
    return result;
}

function reviewGrid() {
    const containerRef = useRef<HTMLDivElement | null>(null)
    const isInview = useInView(containerRef,{once:true,amount:0.4})
    const columns = splitArray(PHONES,3);
    const column1 = columns[0];
    const column2 = columns[1];
    const column3 = splitArray(columns[2],2);

    return (
        <div
            ref={containerRef}
            className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden
        px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3
        ">
            {isInview && (
                <ReviewColumn/>
            )}
        </div>
    )
}

export function Reviews() {
    return (
        <MaxWidthWrapper className="relative max-w-5xl">
            <img src="/what-people-are-buying.png" alt="what people are buying images" />
        </MaxWidthWrapper>
    )
}