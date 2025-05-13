import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // You can add a console.log here for testing if you want
  // console.log('Middleware triggered for:', request.nextUrl.pathname);
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*', // Apply middleware to all routes
};
