// import Copy from "@/components/Copy";
// import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell, TableCaption } from "@/components/ui/table"
// import { db } from "@/lib/db";
// import { auth } from "@clerk/nextjs/server"
// import { NextResponse } from "next/server";
// export default async function History() {
//   try {
//     const { userId } = auth();
//     if (!userId) {
//       return NextResponse.redirect("/login");
//     }
//     // @ts-ignore
//     const userHistory = await db.aiContent.findMany({
//       where: {
//         userId: userId as string,
//       },
//     });
    
//     return (
//       <div className="min-h-screen overflow-y-auto container mx-auto ">
//                <div className="min-h-screen overflow-y-auto container mx-auto">
//             <Table>
//                 <TableCaption>A list of your recent invoices.</TableCaption>
//                 <TableHeader>
//                     <TableRow>
//                         <TableHead className="w-[100px]">
//                             index
//                         </TableHead>
//                         <TableHead>
//                             Slug
//                         </TableHead>
//                         <TableHead>
//                             Output
//                         </TableHead>
//                         <TableHead className="text-right">
//                             Actions
//                         </TableHead>
//                     </TableRow>
//                 </TableHeader>
//                 <TableBody>
//                     {userHistory.map((history:any , index:number) => (
//                         <TableRow key={history.id}>
//                             <TableCell className="font-medium">
//                                 {index + 1}
//                             </TableCell>
//                             <TableCell>
//                                 {history.slug}
//                             </TableCell>
//                             <TableCell className="truncate max-w-40">
//                                 {history.output}
//                             </TableCell>
//                             <TableCell className="text-right">
//                                     <Copy output={history.output} />
//                             </TableCell>
//                         </TableRow>
//                     ))}
//                 </TableBody>
//             </Table>

//         </div>
//       </div>
//     );
//   } catch (error) {
//     console.error("Error fetching user history:", error);
//     return NextResponse.json({ error: "Failed to fetch user history" }, { status: 500 });
//   }
// }


import React from 'react'

const page = () => {
  return (
    <div className='flex justify-center items-center min-h-screen overflow-y-scroll'>
        <h1>History page in development</h1>
    </div>
  )
}

export default page