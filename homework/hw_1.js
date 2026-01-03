function countString(input, type) {
    if (typeof input !== "string" || !["w", "c", "v"].includes(type)) {
        throw new Error("Invalid parameter");
    }

    if (input.trim().length === 0) {
        if (type === "w" || type === "v") return 0;
         if (type === "c") return 0;
    }

    switch (type) {
        case "w":
            const words = input.trim().split(/\s+/).filter(w => w.length > 0);
            return words.length;

        case "c":
            return input.split("").filter(char => /\S/.test(char)).length;

        case "v":
            const vowels = input.match(/[aeiou]/gi);
            return vowels ? vowels.length : 0;

        default:
            return 0;
    }
}

// ทดสอบการใช้งาน
console.log("Word count:", countString("Hello world, how are you?", "w"));      // Output: 5
console.log("Character count:", countString("Hello world, how are you?", "c")); // Output: 21
console.log("Vowel count:", countString("Hello world, how are you?", "v"));     // Output: 8