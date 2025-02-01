class Solution {
    public int iterate(int num) {
        int sumVal = 0;
        String str = String.valueOf(num); 

        for(int i = 0; i < str.length(); i++) {
                String subStr = str.substring(i,i+1);
                int c = Integer.parseInt(subStr);
                sumVal += c;
            }

        return sumVal;
    }


    public int addDigits(int num) {
        int res = iterate(num);
        while(res >= 10) {
            res = iterate(res);
        }
        return res;
    }
}
