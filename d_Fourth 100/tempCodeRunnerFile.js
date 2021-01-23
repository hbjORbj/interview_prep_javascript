function reverseChars(l, r) {
  while (l <= r) {
    [arr[l], arr[r]] = [arr[r], arr[l]];
    l++, r--;
  }
}