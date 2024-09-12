import { Suspense } from "react"
import Thankyou from "./Thankyou";


const Page = () => {
    return (
        <Suspense>
            <Thankyou />
        </Suspense>
    )
}

export default Page;