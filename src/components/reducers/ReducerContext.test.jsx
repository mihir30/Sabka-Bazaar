import {reducer} from './ReducerContext';
describe("reducer function", () => {

    const actionAdd = {type: "ADD_ITEM", product: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
    quantity: 1}};
    
    it("should return current state", () => {
      expect(reducer({count:0, products: {}},"default")).toStrictEqual({count:0, products: {}});
    });
    

    it("should add item and return updated state", () => {
      expect(reducer({count:1, products: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
      name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
      quantity: 1}}, actionAdd.type)).toStrictEqual({count:1, products: actionAdd.product});
    });
    
    const actionEdit = {type: "EDIT_ITEM", product: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
    quantity: 2}};

    it("should edit item and return updated state", () => {
        expect(reducer({count:2, products: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
        quantity: 2}}, actionEdit.type)).toStrictEqual({count:2, products: actionEdit.product});
    });

    const actionRemove = {type: "REMOVE_ITEM", product: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
    name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
    quantity: 1}};

    it("should delete item and return updated state", () => {
        expect(reducer({count:1, products: {id: "5b6c6a7f01a7c38429530883", imageUrl: "./static/images/products/fruit-n-veg/kiwi-green.jpg",
        name: "Fresho Kiwi - Green, 3 pcs", price: 87, stock: 50,
        quantity: 1}}, actionRemove.type)).toStrictEqual({count:1, products: actionRemove.product});
    });

  });