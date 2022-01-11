import { NextRequest, NextResponse } from 'next/server'
import { parseCookies } from "../lib/cookieHelper"


export function middleware(req: NextRequest) {
  const data = parseCookies(req);
  console.log(data);
  // Only rewrite requests to `/`, as _middleware on the `/pages` root will be executed in every request of the app.
  if (req.url === "/") {
   
    const members = ["tobias", "fabi", "kamilla", "monika", "luiza", "nathan", "ray", "hrefna"];
    const random = Math.floor(Math.random() * members.length);
    const path = members[random];

    // Rewrite to the correct page
    //return NextResponse.rewrite(`/${isInBeta ? 'beta' : 'non-beta'}`)
    return NextResponse.redirect(`/story/${path}`)
  }
}