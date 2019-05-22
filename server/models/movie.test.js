const mockingoose = require("mockingoose").default;

const model = require("./movie");

describe("Movie Model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "5ce542a97153e121843a75c5",
      title: "sometitle"
    };

    mockingoose(model).toReturn(_doc, "findOne");

    return model.findById("5ce542a97153e121843a75c5").then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });

  it("should return the doc with update", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      title: "sometitle",
      director: "Anthony"
    };

    mockingoose(model).toReturn(_doc, "update");

    return model
      .update({ title: "Some Other Title" }) // this won't really change anything
      .where({ _id: "507f191e810c19729de860ea" })
      .then(doc => {
        expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
      });
  });
});
