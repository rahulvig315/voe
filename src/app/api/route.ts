import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    console.log('request', request)
  const requestHeaders = new Headers(request.headers)
}