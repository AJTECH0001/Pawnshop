export const pawnshop = {
    "address": "0x63aAD7e827845CE56370d36A61eF859522b771Cc",
    "abi": [
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "borrower",
              "type": "address"
            }
          ],
          "name": "CollateralSeized",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "itemId",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "loanAmount",
              "type": "uint256"
            }
          ],
          "name": "ItemPawned",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "borrower",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "loanAmount",
              "type": "uint256"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            }
          ],
          "name": "LoanIssued",
          "type": "event"
        },
        {
          "anonymous": false,
          "inputs": [
            {
              "indexed": true,
              "internalType": "address",
              "name": "borrower",
              "type": "address"
            },
            {
              "indexed": false,
              "internalType": "uint256",
              "name": "loanAmount",
              "type": "uint256"
            }
          ],
          "name": "LoanRepaid",
          "type": "event"
        },
        {
          "inputs": [
            {
              "internalType": "string",
              "name": "_itemName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_receiptUrl",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "_luxuryType",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "_receiptHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "_value",
              "type": "uint256"
            }
          ],
          "name": "addLuxuryItem",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "itemCounter",
          "outputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "address",
              "name": "",
              "type": "address"
            }
          ],
          "name": "loans",
          "outputs": [
            {
              "internalType": "address",
              "name": "lender",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "loanAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "interest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "itemId",
              "type": "uint256"
            },
            {
              "internalType": "bool",
              "name": "repaid",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
            }
          ],
          "name": "luxuryItems",
          "outputs": [
            {
              "internalType": "string",
              "name": "itemName",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "description",
              "type": "string"
            },
            {
              "internalType": "string",
              "name": "receiptUrl",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "receiptHash",
              "type": "bytes32"
            },
            {
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
            },
            {
              "internalType": "address",
              "name": "owner",
              "type": "address"
            },
            {
              "internalType": "string",
              "name": "luxuryType",
              "type": "string"
            },
            {
              "internalType": "bool",
              "name": "pawned",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_itemId",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_loanAmount",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_interest",
              "type": "uint256"
            },
            {
              "internalType": "uint256",
              "name": "_duration",
              "type": "uint256"
            }
          ],
          "name": "pawnLuxuryItem",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "repayLoan",
          "outputs": [],
          "stateMutability": "payable",
          "type": "function"
        },
        {
          "inputs": [],
          "name": "seizeCollateral",
          "outputs": [],
          "stateMutability": "nonpayable",
          "type": "function"
        },
        {
          "inputs": [
            {
              "internalType": "uint256",
              "name": "_itemId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "_receiptUrl",
              "type": "string"
            },
            {
              "internalType": "bytes32",
              "name": "_receiptHash",
              "type": "bytes32"
            }
          ],
          "name": "verifyReceipt",
          "outputs": [
            {
              "internalType": "bool",
              "name": "",
              "type": "bool"
            }
          ],
          "stateMutability": "view",
          "type": "function"
        }
      ]
} as const 