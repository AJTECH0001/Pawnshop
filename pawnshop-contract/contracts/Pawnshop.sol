// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Pawnshop {
    
    struct LuxuryItem {
        string itemName; // e.g. watch, necklace
        string description; // description of the item
        string receiptUrl; // URL of the receipt verification
        bytes32 receiptHash; // hash of the receipt for verification
        uint256 value; // value of the luxury item
        address owner;
        bool pawned;
    }

    struct Loan {
    address lender;
    uint256 loanAmount;
    uint256 interest;
    uint256 duration;
    uint256 startTime;
    uint256 itemId; // Store the item ID instead of the owner address
    bool repaid;
}

    mapping(uint256 => LuxuryItem) public luxuryItems; // Store luxury items
    mapping(address => Loan) public loans; // Loans mapped to addresses
    
    uint256 public itemCounter; // Counter for unique item IDs

    event ItemPawned(address indexed owner, uint256 itemId, uint256 value, uint256 loanAmount);
    event LoanIssued(address indexed borrower, uint256 loanAmount, uint256 duration);
    event LoanRepaid(address indexed borrower, uint256 loanAmount);
    event CollateralSeized(address indexed borrower);

    // Add a luxury item to the pawnshop inventory
    // TODO: add one mote details to the struct to accomode luxury type such as shoe bag or watch
    function addLuxuryItem(
        string memory _itemName,
        string memory _description,
        string memory _receiptUrl,
        bytes32 _receiptHash,
        uint256 _value
    ) public {
        // Add the luxury item to the mapping
        luxuryItems[itemCounter] = LuxuryItem({
            itemName: _itemName,
            description: _description,
            receiptUrl: _receiptUrl,
            receiptHash: _receiptHash,
            value: _value,
            owner: msg.sender,
            pawned: false
        });
        itemCounter++;
    }

   // Pawn a luxury item for a loan
function pawnLuxuryItem(uint256 _itemId, uint256 _loanAmount, uint256 _interest, uint256 _duration) public {
    // Verify the item exists and belongs to the sender
    LuxuryItem storage item = luxuryItems[_itemId];
    require(item.owner == msg.sender, "You don't own this item");
    require(!item.pawned, "Item already pawned");

    // Issue the loan to the borrower based on the item value
    require(_loanAmount <= item.value, "Loan amount exceeds item value");

    loans[msg.sender] = Loan({
        lender: msg.sender,
        loanAmount: _loanAmount,
        interest: _interest,
        duration: _duration,
        startTime: block.timestamp,
        itemId: _itemId, // Store item ID
        repaid: false
    });

    item.pawned = true; // Mark item as pawned
    
    emit LoanIssued(msg.sender, _loanAmount, _duration);
    emit ItemPawned(item.owner, _itemId, item.value, _loanAmount);

    // Transfer loan amount to borrower (done through external payment gateway or integrated with token transfer)
}

   function repayLoan() public payable {
    Loan storage loan = loans[msg.sender];
    require(loan.loanAmount > 0, "No loan found for this address");
    require(block.timestamp <= loan.startTime + loan.duration, "Loan has expired");
    require(msg.value == loan.loanAmount + loan.interest, "Incorrect repayment amount");

    loan.repaid = true;

    // Release the pawned luxury item
    LuxuryItem storage item = luxuryItems[loan.itemId];
    item.pawned = false;

    emit LoanRepaid(msg.sender, loan.loanAmount);

    // Transfer funds to the lender (could be handled in a more secure manner)
}

   function seizeCollateral() public {
    Loan storage loan = loans[msg.sender];
    require(block.timestamp > loan.startTime + loan.duration, "Loan is still active");
    require(!loan.repaid, "Loan already repaid");

    // Seize the pawned item by transferring ownership to the lender
    LuxuryItem storage item = luxuryItems[loan.itemId];
    item.owner = loan.lender;

    emit CollateralSeized(item.owner);
}


    // Verify luxury item receipt (optional off-chain verification)
    function verifyReceipt(uint256 _itemId, string memory _receiptUrl, bytes32 _receiptHash) public view returns (bool) {
        LuxuryItem storage item = luxuryItems[_itemId];
        require(keccak256(abi.encodePacked(_receiptUrl)) == keccak256(abi.encodePacked(item.receiptUrl)), "Receipt URL mismatch");
        require(_receiptHash == item.receiptHash, "Receipt hash mismatch");

        // Optionally implement external verification logic with off-chain data
        return true;
    }
}
