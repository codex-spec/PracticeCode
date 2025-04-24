#include <string>
#include <cctype>

std::string withoutString(const std::string& base, const std::string& remove) {
    std::string result;
    size_t baseLength = base.length();
    size_t removeLength = remove.length();
    size_t i = 0;

    while (i <= baseLength - removeLength) {
        if (std::equal(base.begin() + i, base.begin() + i + removeLength, remove.begin(),
            [](char a, char b) { return std::tolower(a) == std::tolower(b); })) {
            i += removeLength;
        } else {
            result += base[i];
            i++;
        }
    }

    while (i < baseLength) {
        result += base[i];
        i++;
    }

    return result;
}
