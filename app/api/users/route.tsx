import { NextRequest, NextResponse } from "next/server";

// if we remove the request: NextRequest Next.js will cache the result to prevent this add request: NextRequest
export function GET(request: NextRequest) {
    return NextResponse.json([
        { id: 1, name: 'Hashir' }
    ])

}

export async function POST(request: NextRequest) {
    const body = await request.json()
    if (!body.name) {
        return NextResponse.json({
            error: 'Name required',
            status: 400
        }, { status: 400 })
    }
    return NextResponse.json({ id: body.id, name: body.name, }, { status: 201 })
}