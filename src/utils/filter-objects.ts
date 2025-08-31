// TODO: functions able to filter objects given type

export function filterKeysObject<
  T extends Record<string, string | number | boolean>,
  K extends keyof T,
>(obj: T, allowedKeys: K[]): Pick<T, K> {
  return allowedKeys.reduce((result, k) => {
    if (k in obj) {
      result[k] = obj[k];
    }
    return result;
  }, {} as Pick<T, K>);
}

export function createKeysArray<T extends Record<string, null>>(
  schema: Record<keyof T, null>,
): (keyof T)[] {
  return Object.keys(schema) as (keyof T)[];
}

export function dummyObjectFromType<
  T extends Record<string, string | number | boolean>,
>(objectType: T) {
  return;
}
