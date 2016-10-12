class stringperm {
  public static void main(String[] args) {
    String input = args[0];
    int n = input.length();
    permute(input, 0, n-1);
  }

  private static void permute(String input, int l, int r) {
    if(input.isEmpty()) {
      return ;
    } else {
      char[] chars = input.toCharArray();
      _permute(chars, l, r);
    }
  }
  
  private static void _permute(char[] input, int l, int r) {
    if(l == r) {
      System.out.println(new String(input));
    } else {
      for(int i=l; i <= r ; i++) {
        // swap the two values
        char temp = input[l];
        input[l] = input[i];
        input[i] = temp;
        // find all permutations in the next position
        _permute(input, i+1, r);
        // swap the two values
        char temp2 = input[l];
        input[l] = input[i];
        input[i] = temp2;
      }
    }
  }
}
