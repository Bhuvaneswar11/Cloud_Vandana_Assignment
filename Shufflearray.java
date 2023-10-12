import java.util.Arrays;  

public class ShuffleArray {
    public static void main(String[] args) {
        Integer[] numbers = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(numbers);
        System.out.println("Shuffled array: " + Arrays.toString(numbers));
    }

    public static void shuffleArray(Integer[] array) {
        int n = array.length;
        for (int i = n - 1; i > 0; i--) {
  
            int randomIndex = (int) (Math.random() * (i + 1));

            
            int temp = array[i];
            array[i] = array[randomIndex];
            array[randomIndex] = temp;
        }
    }
}
