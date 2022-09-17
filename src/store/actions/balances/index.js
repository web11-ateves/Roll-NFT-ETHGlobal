import { BALANCES_UPDATE, BALANCES_RESET, BALANCE_SELECT } from "..";

export const balancesUpdate = (balances) => ({
    type: BALANCES_UPDATE,
    payload: balances,
});

export const balancesReset = () => ({
    type: BALANCES_RESET,
});

export const balanceSelect = (id) => ({
    type: BALANCE_SELECT,
    id,
});
