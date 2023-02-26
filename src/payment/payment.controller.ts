/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { PaymentService } from './payment.service';

interface HasuraActionsPayload<Input extends {} = {}> {
    action: {
        name: string;
    };
    input: Input;
}

interface CreatePayment {
    itemId: string;
    paid: boolean;
}

@Controller('payment')
export class PaymentController {
    constructor(private readonly paymenService: PaymentService) { }

    @Get()
    getPayment(): any {
        return this.paymenService.getData();
    }

    @Post('/createPayment')
    createPayment(@Body() payload: HasuraActionsPayload<{ params: CreatePayment }>): any {
        return this.paymenService.proccesPaid(payload);
    }

}
