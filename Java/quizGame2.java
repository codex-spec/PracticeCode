import java.util.Scanner;

/**
* Guessing Game.
* 
* @author O 
* @version 99
*/
public class Quiz
{
public static void main(String[] args)
{
    Scanner keyboard = new Scanner(System.in);
    boolean answerIsCorrect;

    System.out.println("Think of an animal.\n");

    if(ask("Is it a bird? ", keyboard))
    {
        if(ask("Can it fly? ", keyboard))
        {
            answerIsCorrect = ask("Is it a parrot? ", keyboard);
        }
        else
        {
            answerIsCorrect = ask("Is it an emu? ", keyboard);
        }

    {
        if(ask("Does it live in the ocean? ", keyboard))
    {
        if(ask("Is it a whale? ", keyboard))
        {
            answerIsCorrect = ask("Answer 1? ", keyboard);
        }
        else
        {
            answerIsCorrect = ask("Answer 2? ", keyboard);
        }
    }
    }
    }



    else



    {
        if(ask("Does it lay eggs? ", keyboard))
        {
            answerIsCorrect = ask("Is it a platypus? ", keyboard);
        }
        else
        {
            answerIsCorrect = ask("Is it a kangaroo? ", keyboard);
        }
    }


    if(answerIsCorrect)
    {
        System.out.println("I am good!");
    }
    else
    {
        System.out.println("Drats! I guess I don't know then!");
    }
 }

 /**
 * A utility method to ask a yes/no question
 * 
 * @param question the question to ask
 * @param a scanner for user input
 * 
 * @return whether the user answered "yes" (actually, whether the user answered
   anything starting with Y or y)
 */
 private static boolean ask(String question, Scanner keyboard)
 {
    System.out.print(question);

    String answer = keyboard.nextLine().trim();



    return answer.charAt(0) == 'Y' || answer.charAt(0) == 'y';
  }
   }
