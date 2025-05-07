function getPaginationRange(
  current: number,
  total: number,
  delta: number = 2
): (number | string)[] {
  const range: (number | string)[] = [];
  const left = Math.max(2, current - delta);
  const right = Math.min(total - 1, current + delta);

  range.push(1); // Always show page 1

  if (left > 2) {
    range.push("...");
  }

  for (let i = left; i <= right; i++) {
    range.push(i);
  }

  if (right < total - 1) {
    range.push("...");
  }

  if (total > 1) {
    range.push(total); // Always show last page
  }

  return range;
}

export default getPaginationRange;
