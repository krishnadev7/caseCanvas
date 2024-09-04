import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

 export const formatPrice = (price:number) => {
    const formatter = new Intl.NumberFormat("en-IN",{
      currency: "INR",
      style: "currency"
    })

    return formatter.format(price);
 }