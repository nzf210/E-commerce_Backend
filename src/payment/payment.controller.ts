/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get, Query } from '@nestjs/common';
import { PaymentService } from './payment.service';

interface HasuraActionsPayload<Input extends {} = {}> {
    action: {
        name: string;
    };
    input: Input;
}

interface CreatePayment {
    item_id: string;
    paid: boolean;
}

@Controller('api')
export class PaymentController {
    constructor(private readonly paymenService: PaymentService) { }

    @Get('getPaymentId')
    getPaymentId(@Query('itemId') itemId: string) {
        return this.paymenService.getPaymentId(itemId);
    }

    @Get('getItemUrl')
    createPayment(@Query('paymentId') paymentId: string): any {
        return this.paymenService.proccesPaid(paymentId);
    }

    @Get('getCalculate')
    getCalculate(@Body() params: any) {
        return this.paymenService.calculateTotal(params)
    }
}
