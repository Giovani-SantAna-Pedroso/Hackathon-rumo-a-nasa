import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return Response.json({ users: users }, { status: 200 });
  } catch (err: any) {
    console.log(err);
    return Response.json({ msg: err.message }, { status: 500 });
  }
}
export async function POST(req: Request) {
  const { name, email } = await req.json();
  try {
    const user = await prisma.user.create({
      data: { name: name, email: email },
    });
    console.log(user);
    return Response.json({ msg: 'User created' }, { status: 201 });
  } catch (err: any) {
    console.log(err);
    return Response.json({ msg: err.message }, { status: 500 });
  }
}
