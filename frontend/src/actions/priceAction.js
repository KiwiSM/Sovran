export const buyTicket = (price) => ({
    type: "BUY_TICKET",
    payload: price
})

export const removeTicket = (price) => ({
    type: "REMOVE_TICKET",
    payload: price
})