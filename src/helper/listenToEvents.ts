import { PrismaClient } from "@prisma/client";
import { ethers } from "ethers";

const prisma = new PrismaClient();
const listenToEvents = () => {
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL);
    const networkId = '888';
    const paymentProcessor = new ethers.Contract(
        '0x3bA478A49cF6D3EE62c7e7ACb8e3243ba9901a94',
        PaymentProcessor.abi,
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
    });
    console.log('paymentProcessor', paymentProcessor);
}

export default listenToEvents();


const DAI =
{
    "abi": [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_admin",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_daiAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "payer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "paymentId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "date",
                    "type": "uint256"
                }
            ],
            "name": "PaymentDone",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dai",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_paymentId",
                    "type": "uint256"
                }
            ],
            "name": "pay",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }
    ]
}

const PaymentProcessor =
{
    abi: [
        {
            "inputs": [
                {
                    "internalType": "address",
                    "name": "_adminAddress",
                    "type": "address"
                },
                {
                    "internalType": "address",
                    "name": "_daiAddress",
                    "type": "address"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "constructor"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "address",
                    "name": "payer",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "amount",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "paymentId",
                    "type": "uint256"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "date",
                    "type": "uint256"
                }
            ],
            "name": "PaymentDone",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "admin",
            "outputs": [
                {
                    "internalType": "address",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [],
            "name": "dai",
            "outputs": [
                {
                    "internalType": "contract IERC20",
                    "name": "",
                    "type": "address"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_amount",
                    "type": "uint256"
                },
                {
                    "internalType": "uint256",
                    "name": "_paymentId",
                    "type": "uint256"
                }
            ],
            "name": "pay",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        }]
}

function async(payer: any, amount: any, paymentId: any, date: any) {
    throw new Error("Function not implemented.");
}
