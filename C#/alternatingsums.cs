int[] alternatingSums(int[] a) {
    int[] weight = new int[2];
    weight[1] = Enumerable.Sum(a.Where((x,i) => i % 2 == 1));
    weight[0] = Enumerable.Sum(a.Where((x,i) => i % 2 == 0));
    return weight;
}