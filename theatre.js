const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MATINEE_DISCOUNT = 3;

function buyTicket() {
    const age = prompt('What is your age?');
    let cost = getBaseTicketCost(age);
    
    const isMatinee = prompt('Are you attending a matinee show?').toLowerCase(); // Convert to lowercase

    // Call the new function to apply matinee discount
    cost = applyMatineeDiscount(cost, isMatinee);

    alert('Your ticket will cost: $' + cost);
}

// New function to apply matinee discount
function applyMatineeDiscount(cost, isMatinee) {
    if (isMatinee === 'yes' || isMatinee === 'y') {
        // Instead of modifying cost directly, return the discounted value
        return cost - MATINEE_DISCOUNT;
    }
    // Return the original cost without applying the discount
    return cost;
}

function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    }
    return GENERAL_ADMISSION_TICKET_COST;
}
