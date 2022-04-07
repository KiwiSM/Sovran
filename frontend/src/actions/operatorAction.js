export const addOperator = (operator, amount) => ({
    type: "ADD_OPERATOR",
    payload: operator,
    number: amount
})