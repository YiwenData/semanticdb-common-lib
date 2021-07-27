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

    expect(_.merge([arr1, arr2])).toEqual([
      { _id: '1', v1: 1, v2: 2 },
      { _id: '2', v1: 1, v2: 2 },
      { _id: '3', v2: 2 }
    ])
  })
})
