int countCode(string str) {
  if(str.length() < 4) return 0;
  int c = 0;
  for(int i = 0; i < str.length()-3; i++) {
    if(str.substr(i, 2) == "co" && str.substr(i+3, 1) == "e") {
      c++;
    }
  }
  return c;
}
