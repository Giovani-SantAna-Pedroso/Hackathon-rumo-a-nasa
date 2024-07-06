import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function GET() {
  console.log('executando');
  // return Response.json({ mess: "ok" });
  //
  return Response.json({ mss: 'tsar' });
}
