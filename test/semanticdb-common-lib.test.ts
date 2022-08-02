import _ from '../src/semanticdb-common-lib'

/**
 * test
 */
describe('test', () => {
  it('each', async () => {
    const arr = [1, 2, 3]
    const item = 1

    const nullRet = await _.each(null, (item: any) => item + 1)
    expect(nullRet).toBeNull()

    const arrRet = await _.each(arr, (item: any) => item + 1)
    expect(arrRet).toEqual([2, 3, 4])

    const itemRet = await _.each(item, (item: any) => item + 1)
    expect(itemRet).toEqual(2)

    const asyncFunc = (item: number) => {
      const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(item + 1)
        }, 100)
      })
      return promise
    }

    const arrRetAsync = await _.each(arr, asyncFunc)
    expect(arrRetAsync).toEqual([2, 3, 4])

    const itemRetAsync = await _.each(item, asyncFunc)
    expect(itemRetAsync).toEqual(2)
  })

  it('sort', async () => {
    const arr = [
      {
        name: 'bac',
        number: 2
      },
      {
        name: 'bac',
        number: 10
      },
      {
        name: 'abc',
        number: 2
      },
      {
        name: 'abc',
        number: 1
      }
    ]

    expect(_.sort(arr, { name: 1, number: -1 })).toEqual([
      { name: 'abc', number: 2 },
      { name: 'abc', number: 1 },
      { name: 'bac', number: 10 },
      { name: 'bac', number: 2 }
    ])

    expect(_.sort(arr, { name: 1, number: 1 })).toEqual([
      { name: 'abc', number: 1 },
      { name: 'abc', number: 2 },
      { name: 'bac', number: 2 },
      { name: 'bac', number: 10 }
    ])

    expect(_.sort(arr, { name: -1, number: -1 })).toEqual([
      { name: 'bac', number: 10 },
      { name: 'bac', number: 2 },
      { name: 'abc', number: 2 },
      { name: 'abc', number: 1 }
    ])
  })

  it('merge', async () => {
    const arr1 = [
      {
        _id: '1',
        v1: 1
      },
      {
        _id: '2',
        v1: 1
      }
    ]

    const arr2 = [
      {
        _id: '1',
        v2: 2
      },
      {
        _id: '2',
        v2: 2
      },
      {
        _id: '3',
        v2: 2
      }
    ]

    expect(_.mergeBy('_id', [arr1, arr2])).toEqual([
      { _id: '1', v1: 1, v2: 2 },
      { _id: '2', v1: 1, v2: 2 },
      { _id: '3', v2: 2 }
    ])

    const arr3 = [
      {
        _id: '9418408030016',
        商品: '9418408030016',
        总销量: 14,
        总折算后瓶数: 14
      },
      { _id: '12345027', 商品: '12345027', 总销量: 6, 总折算后瓶数: 6 },
      {
        _id: '7790975199177',
        商品: '7790975199177',
        总销量: 6,
        总折算后瓶数: 6
      },
      { _id: '12345023', 商品: '12345023', 总销量: 4, 总折算后瓶数: 4 },
      {
        _id: '5000289020701',
        商品: '5000289020701',
        总销量: 4,
        总折算后瓶数: 4
      },
      {
        _id: '3245998863115',
        商品: '3245998863115',
        总销量: 4,
        总折算后瓶数: 4
      },
      {
        _id: '9000267014203',
        商品: '9000267014203',
        总销量: 4,
        总折算后瓶数: 4
      },
      { _id: '12345024', 商品: '12345024', 总销量: 2, 总折算后瓶数: 2 },
      { _id: '12345002', 商品: '12345002', 总销量: 2, 总折算后瓶数: 2 },
      { _id: '12345028', 商品: '12345028', 总销量: 2, 总折算后瓶数: 2 },
      {
        _id: '5000267186078',
        商品: '5000267186078',
        总销量: 2,
        总折算后瓶数: 2
      },
      {
        _id: '9418408050014',
        商品: '9418408050014',
        总销量: 2,
        总折算后瓶数: 2
      },
      {
        _id: '6000267014203',
        商品: '6000267014203',
        总销量: 2,
        总折算后瓶数: 2
      },
      {
        _id: '3262156068755',
        商品: '3262156068755',
        总销量: 2,
        总折算后瓶数: 2
      },
      {
        _id: '6000267024233',
        商品: '6000267024233',
        总销量: 1,
        总折算后瓶数: 1
      }
    ]

    expect(_.mergeBy('_id', [arr3])).toEqual(arr3)
  })
})
