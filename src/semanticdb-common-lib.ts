/**
 *
 * @param arr Array or item
 * @param func function on each item
 */
const each = async (arr: any, func: Function) => {
  if (arr === null || arr === undefined) return null

  if (Array.isArray(arr)) {
    const result = await Promise.all(arr.map(i => func(i)))
    return result
  }

  return func(arr)
}

/**
 *
 * @param arr Array or item
 * @param keys multiple sorting keys
 */
const sort = (arr: any[], keys: { [key: string]: number }) => {
  return arr.sort((itemA, itemB) => {
    for (const key of Object.keys(keys)) {
      const a = itemA[key]
      const b = itemB[key]
      if (a === b) {
        continue
      }

      const direction = keys[key]
      if (typeof a === 'number') {
        return direction === 1 ? a - b : b - a
      }

      return direction === 1 ? a.localeCompare(b) : b.localeCompare(a)
    }
  })
}

export const merge = (arrays: any[][]): any[] => {
  const merged: any = {}

  arrays.forEach(array => {
    array.forEach(i => {
      const id = i._id
      if (id in merged) {
        merged[id] = { ...merged[id], ...i }
      } else {
        merged[id] = i
      }
    })
  })

  return Object.values(merged)
}

export default {
  each,
  sort,
  merge
}
