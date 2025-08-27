import java.util.Scanner;

class NumbersGuessingGame {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int guess;
        int count = 0;
        
        double rand = Math.round(Math.random() * 100);
        System.out.println("Enter a number to guess (0-100): ");
        guess = sc.nextInt();
        count++;

        while (guess != rand && count < 3) {
            System.out.println("Wrong guess! Try again:");
            guess = sc.nextInt();
            count++;
        }
        if (guess == rand) {
            System.out.println("🎉 Congratulations!");
            System.out.println("Your guess " + guess + " is correct!");
        } else {
            System.out.println("❌ Out of chances! The correct number was: " + (int)rand);
        }
        sc.close(); 
    }
}
