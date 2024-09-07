import { db } from "@/db";
import { notFound } from "next/navigation";
import DesignPreview from "./DesignPreview";
import { log } from "console";

interface SearchParams {
    searchParams: {
        [key: string]: string | [string] | undefined
    }
}

const Page = async({ searchParams }: SearchParams) => {
    const { id } = searchParams;

    if (!id || typeof id !== 'string') {
        return notFound();
    }

    const configuration = await db.configuration.findUnique({ where: { id } });
    

    if (!configuration) {
        return notFound();
    }
    return <DesignPreview configuration={configuration} />
}

export default Page;