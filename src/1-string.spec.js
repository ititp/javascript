import { reverse, isPalindrome } from "./1-string";

describe("String Tests", () => {
    test("Test de la fonction reverse", () => {
        const reversedA = reverse("A");
        expect(reversedA).toStrictEqual("A");
        
        const reversedB = reverse("Hello World!");
        expect(reversedB).toStrictEqual("!dlroW olleH");
        
        const reversedC = reverse("anticonstitutionnellement");
        expect(reversedC).toStrictEqual("tnemellennoitutitsnocitna");
    });

    test("Test de la fonction isPalindrome", () => {
        const palyndormeA = "ressasser";
        const palyndormeB = "kayak";
        const palyndormeC = "ici";
        const palyndormeD = "A";

        expect(isPalindrome(palyndormeA)).toBeTruthy();
        expect(isPalindrome(palyndormeB)).toBeTruthy();
        expect(isPalindrome(palyndormeC)).toBeTruthy();
        expect(isPalindrome(palyndormeD)).toBeTruthy();

        expect(isPalindrome("Hello World!")).toBeFalsy();
    });
});