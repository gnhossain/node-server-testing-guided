const db = require("../data/dbConfig");

const { inser } = require("./hobbitsModel.js");

describe("hobbits model", function);

it("should return the inserted hobbit", async function() {
    let hobbit = await insert({ name: "sam"});
    expect(hobbit.name).toBe("sam");
    expect(hobbit.id).toBeDefined();

    hobbit = await insert({name: "gaffer"});
    expect(hobbit.name).toBe("gaffer");
    expect(hobbit.id).toBeDefined();
});