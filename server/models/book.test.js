const mockingoose = require("mockingoose").default;

const model = require("./book");

describe("Book Model", () => {
  it("should return the doc with findById", () => {
    const _doc = {
      _id: "5ce5421df84c2221b07e080b",
      title: "sometitle"
    };

    mockingoose(model).toReturn(_doc, "findOne");

    return model.findById("5ce5421df84c2221b07e080b").then(doc => {
      expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
    });
  });
  it("should return the doc with update", () => {
    const _doc = {
      _id: "507f191e810c19729de860ea",
      title: "sometitle",
      author: "Anthony"
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
