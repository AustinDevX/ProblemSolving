class stringperm {
  public static void main(String[] args) {
    String input = args[0];
    int n = input.length();
    permute(input, 0, n-1);
  }

  private static void permute(String input, int l, int r) {
    if(! input.isEmpty()) {
      char[] chars = input.toCharArray();
      _permute(chars, l, r);
    }
  }

  private static void _permute(char[] input, int l, int r) {
    if(l == r) {
      System.out.println(new String(input));
    } else {
      for(int i=l; i <= r ; i++) {
        // place the current number at the begining of the array
        swap(input, i, l);
        // find all permutations for the remainder of the array
        _permute(input, l+1, r);
        // backtrack
        swap(input, i, l);
      }
    }
  }

  public static void swap(char[] input, int i, int j) {
    char temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
}
