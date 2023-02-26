/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { nanoid } from 'nanoid';


// let idnano = nanoid();
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

    public getData() {
        return { get: 'uji Coba' }
    }

    public async proccesPaid(params: any) {
        let userId = nanoid();
        console.log('dataPaid', params?.itemId, params?.paid);

        return {
            action: {
                name: "createPayment"
            },
            input: {
                params: {
                    id: userId,
                    itemId: params?.itemId,
                    paid: params?.paid,
                    updateAt: new Date()
                }
            }
        }
    }
}
