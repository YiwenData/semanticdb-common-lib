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

      if (a == null) {
        return 1
      }
      if (b == null) {
        return -1
      }

      try {
        return direction === 1 ? a.localeCompare(b) : b.localeCompare(a)
      } catch (error) {
        console.error(error)
      }
      return 1
    }
  })
}

export const mergeBy = (_id: string, arrays: any[][]): any[] => {
  const merged: any[] = []

  arrays.forEach(array => {
    array.forEach(i => {
      const hit = merged.findIndex(m => m[_id] === i[_id])
      if (hit >= 0) {
        merged[hit] = { ...merged[hit], ...i }
      } else {
        merged.push(i)
      }
    })
  })

  return merged
}

export default {
  each,
  sort,
  mergeBy
}
