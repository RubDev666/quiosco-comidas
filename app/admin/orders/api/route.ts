import { prisma } from "@/src/lib/prisma"

export const dynamic = 'force-dynamic'; //para solucionar problema en produccion

export async function GET() {
    const orders = await prisma.order.findMany({
        where: {
            status: false
        },
        include: {
            orderProducts: {
                include: {
                    product: true
                }
            }
        }
    })
    return Response.json(orders)
}
