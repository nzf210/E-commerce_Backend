import { PrismaClient } from "@prisma/client";
import { ethers } from "ethers";
import { DAI, PaymentProcessor } from "./abi";

const prisma = new PrismaClient();
const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const networkId = '888';
    const paymentProcessor = new ethers.Contract(
        '0x3bA478A49cF6D3EE62c7e7ACb8e3243ba9901a94',
        PaymentProcessor.abi,
        provider
    );
    const USDT = new ethers.Contract(
        '0xB799Ca92f1754D63C9E655923438D026Bc5fb67b',
        DAI.abi,
        provider
    );
    paymentProcessor.on('PaymentDone', async (payer: any, amount: any, paymentId: any, date: any) => {
        console.log(`
        from ${payer}
        amount ${amount}
        paymentId ${paymentId}
        date ${(new Date(date.toNumber() * 1000).toLocaleString())}`);
        const payment = await prisma.e_commerce.findUnique({
            where: {
                id: paymentId
            }
        });
        if (payment) {
            await prisma.e_commerce.update({
                where: {
                    id: paymentId
                },
                data: {
                    paid: true
                }
            })
        }
        console.log('Payment', payment);
    });
    return { provider, paymentProcessor, USDT }
}

export default listenToEvents();




