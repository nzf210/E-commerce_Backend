import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'
import { nanoid } from 'nanoid';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async postData() {
    const nanoId = nanoid(14);
    const prisma = new PrismaClient();
    try {
      const dataRecord: {} =
        await prisma.users.create({
          data: {
            id: nanoId,
            fisrt_name: 'ujie Coba',
            email: nanoId + 'pass@mail.com',
            id_akun: 'id akun' + nanoId,
            level: 'supporter',
            last_name: 'last_name'
          }
        }).then((e) => {
          return e;
        }).catch((e) => {
          console.log(e);
          throw new Error('Data Gagal record Ke Database')
        });
      return { data: dataRecord }
    } catch (error) {
      console.log(error);
    }
  }


  async postDataEvent(body: any) {
    console.log(body);
  }
}

