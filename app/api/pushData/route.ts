
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { userId } = auth();
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { slug, formData, output } = await req.json();
        const serializedFormData = JSON.stringify(formData);
        const createNewData = await db.aiContent.create({
            data: {
                slug: slug,
                formData: serializedFormData,
                output: output,
                userId: userId,
            },
        });

        revalidatePath(`/`);
        return NextResponse.json(createNewData, { status: 200 });
    } catch (error) {
        console.error("Error pushing data:", error);
        return NextResponse.json({ error: (error as Error).message }, { status: 500 });
    }
}
