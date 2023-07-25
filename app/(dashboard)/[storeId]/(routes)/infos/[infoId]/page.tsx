import prismadb from "@/lib/prismadb";
import { InfoForm } from "./components/info-form";

const InfosPage = async ({
    params
}: {
    params: { infoId: string }
}) => {
    const info = await prismadb.info.findUnique({
        where: {
            id: params.infoId
        }
    });

    return (
        <div className="flex-col">
            <div className="flex-1 space-y-4 p-8 pt-6">
                <InfoForm initialData={info}/>
            </div>
        
        </div>
    );
}

export default InfosPage;