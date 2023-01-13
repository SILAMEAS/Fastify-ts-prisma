import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function deteleAll() {
  try {
    const user = await prisma.user.deleteMany();
    return user;
  } catch (error) {
    return error;
  }
}
export async function userAll() {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return error;
  }
}
export async function detele(id: string) {
  try {
    const user = await prisma.user.delete({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
export async function find(id: string) {
  try {
    const user = await prisma.user.findFirst({
      where: {
        id: id,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
type typeData = {
  // name  String
  // email String @unique
  // password String
  // age Int @default(16)
  // address String
  // phone String?
  name: string;
  email: string;
  password: string;
  phone: string;
  address?: string;
  age: number;
};
export async function create(datat: typeData) {
  try {
    const user = await prisma.user.create({
      data: datat,
    });
    return { user, message: "T" };
  } catch (error) {
    console.log(error);
    return { error, message: "F" };
  }
}
export async function update(datat: typeData, id: string) {
  // console.log(datat);
  console.log(id);
  try {
    const user = await prisma.user.update({
      where: {
        id: id,
      },
      data: datat,
    });
    return user;
  } catch (error) {
    return error;
  }
}
export async function check(datat: typeData) {
  console.log("(controler)=>" + datat.email + "/" + datat.name);
  try {
    const user = await prisma.user.findFirst({
      where: {
        email: datat.email,
        name: datat.name,
      },
    });
    return user;
  } catch (error) {
    return error;
  }
}
