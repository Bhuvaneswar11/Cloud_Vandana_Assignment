import java.util.HashSet;
import java.util.Scanner;
import java.util.Set;

public class Pnagram {

    public static boolean isPangram(String sentence) {
        Set<Character> alphabetSet = new HashSet<>();

        for (char ch = 'a'; ch <= 'z'; ch++) {
            alphabetSet.add(ch);
        }

        for (char ch : sentence.toLowerCase().toCharArray()) {
            alphabetSet.remove(ch);
        }

        return alphabetSet.isEmpty();
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.print("Enter a sentence: ");
        String inputSentence = scanner.nextLine();

        boolean isPangram = isPangram(inputSentence);

        if (isPangram) {
            System.out.println("The input sentence is a pangram.");
        } else {
            System.out.println("The input sentence is not a pangram.");
        }

        scanner.close();
    }
}
