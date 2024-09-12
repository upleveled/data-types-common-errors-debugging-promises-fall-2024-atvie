export function fakeFetch(/** @type {string} */ url) {
  const time = Math.floor(Math.random() * 1800 + 200);

  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          message: `answer from ${url}`,
          time: `${time} ms`,
        }),
      time,
    );
  });
}
