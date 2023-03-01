/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

const items = {
    '1': { id: 1, url: 'http://UrlToDownloadItem1' },
    '2': { id: 2, url: 'http://UrlToDownloadItem2' }
}

@Injectable()
export class PaymentService {
    private static product = [
        { id: 'ywquyqwbu', itemId: 'ywqeyqwtqwu', paid: false }
    ];

    public calculateTotal(params: { itemId_: string; paid: boolean }) {
        console.log('params', params.itemId_, params.paid);
    }

    public processPayment(params: { total: number }): boolean {
        console.log("This is where you'd call a payment processor, and charge the customer for " + params.total);
        return true;
    }

    public async getPaymentId(item_id: any) {
        const paymentId = (Math.random() * 10000).toFixed(0);
        try {
            if (item_id && item_id) {
                const data = await prisma.e_commerce.create({
                    data: {
                        id: paymentId,
                        item_id: item_id,
                        paid: false
                    }
                });
                return { data }
            }
        } catch (err) {
            return { data: err.message }
        }
    }

    public async getPaymentUrl(paymentId: any) {
        try {
            const payment = await prisma.e_commerce.findUnique({
                where: {
                    item_id: paymentId
                }
            });
            if (payment && payment.paid === true) {
                return {
                    data: {
                        url: items[paymentId].url
                    }
                }
            } else {
                return {
                    data: {
                        url: ''
                    }
                }
            }

        } catch (err) {

        }
        return { get: 'uji Coba' }
    }

    public async proccesPaid(params: any) {
        let userId = nanoid(14);
        console.log('dataPaid', params?.item_id, params?.paid);
        try {
            const dataRecord: object = await prisma.e_commerce.create({
                data: {
                    id: userId,
                    item_id: params?.item_id,
                    paid: params?.paid
                }
            }).then(e => { return e }).catch(() => { throw new Error('Gagal Menyimpan data payment') })
            return { data: dataRecord }
        } catch (error) {
            console.log(error);
            return { data: error }
        }
    }
}
