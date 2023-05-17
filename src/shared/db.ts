import Dexie, { Table } from "dexie";
import { Customer } from "../shared/customer";
import { BetNumber, BetTypeConfig } from "../shared/bet-number";


export class DpsDB extends Dexie {
    customers!: Table<Customer, number>;
    betNumbers!: Table<BetNumber, number>;
    betTypeConfigs!: Table<BetTypeConfig>;

    constructor() {
        super("DpsDB");
        this.version(1).stores({
            customers: "++id",
            betNumbers: "++id, csutomerId",
            betTypeConfigs: "",
        });
    }
}

/**
 * Author : KL9788822468
 * This is the main database to store all dps data in indexed db.
 *  customers, betNumbers, betTypeConfigs
 */
export const db = new DpsDB();

// db.on("populate", populate);

export function resetDatabase() {
    // return db.transaction("rw", db.betTypeConfig, db.customers, async () => {
    //     await Promise.all(db.tables.map(table => table.clear()));
    //     await populate();
    // });
}
