class Trie {
    private Trie[] children;
    private boolean isEnd;

    public Trie() {
        this.children = new Trie[26];
        this.isEnd = false;
    }

    public void insert(String word) {
        Trie current = this;
        for (int i = 0; i < word.length(); i++) {
            int index = (int) word.charAt(i) - 97;
            if (current.children[index] == null)
                current.children[index] = new Trie();
            current = current.children[index];
        }
        current.isEnd = true;
    }

    public boolean search(String word) {
        Trie current = this;
        for (int i = 0; i < word.length(); i++) {
            int index = (int) word.charAt(i) - 97;
            if (current.children[index] == null)
                return false;
            current = current.children[index];
        }
        return current.isEnd;
    }

    public boolean startsWith(String prefix) {
        Trie current = this;
        for (int i = 0; i < prefix.length(); i++) {
            int index = (int) prefix.charAt(i) - 97;
            if (current.children[index] == null)
                return false;
            current = current.children[index];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * Trie obj = new Trie();
 * obj.insert(word);
 * boolean param_2 = obj.search(word);
 * boolean param_3 = obj.startsWith(prefix);
 */