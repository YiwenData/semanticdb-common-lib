import _ from "../src/semanticdb-common-lib"

/**
 * test
 */
describe("test", () => {
  it("each", async () => {
    const arr = [1, 2, 3];
    const item = 1;

    const nullRet = await _.each(null, (item: any) => item + 1);
    expect(nullRet).toBeNull();

    const arrRet = await _.each(arr, (item: any) => item + 1);
    expect(arrRet).toEqual([2, 3, 4]);

    const itemRet = await _.each(item, (item: any) => item + 1);
    expect(itemRet).toEqual(2);

    const asyncFunc = (item: number) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item + 1);
        }, 100);
      });
      return promise;
    }

    const arrRetAsync = await _.each(arr, asyncFunc);
    expect(arrRetAsync).toEqual([2, 3, 4]);

    const itemRetAsync = await _.each(item, asyncFunc);
    expect(itemRetAsync).toEqual(2);
  })
})
