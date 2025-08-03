function groupAnagram(words) {
    const group = {};
    for (let word of words) {
        let key = word.split("").sort().join("");
        if (!group[key]) {
            group[key] = [];
        }
        group[key].push(word);
    }
    return Object.values(group);
}
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagram(input);
console.log(result);