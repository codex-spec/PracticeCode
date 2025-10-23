using System;

class TicTacToe
{
    // Function to draw the Tic-Tac-Toe board
    static void DrawBoard(char[,] board)
    {
        Console.WriteLine("-------------");
        for (int i = 0; i < 3; i++)
        {
            Console.Write("| ");
            for (int j = 0; j < 3; j++)
            {
                Console.Write(board[i, j] + " | ");
            }
            Console.WriteLine("\n-------------");
        }
    }

    // Function to check for a win
    static bool CheckWin(char[,] board, char player)
    {
        // Check rows, columns, and diagonals
        for (int i = 0; i < 3; i++)
        {
            if (board[i, 0] == player && board[i, 1] == player && board[i, 2] == player)
                return true;
            if (board[0, i] == player && board[1, i] == player && board[2, i] == player)
                return true;
        }
        if (board[0, 0] == player && board[1, 1] == player && board[2, 2] == player)
            return true;
        if (board[0, 2] == player && board[1, 1] == player && board[2, 0] == player)
            return true;
        return false;
    }

    static void Main()
    {
        // Initialize the board and players
        char[,] board = new char[3, 3]
        {
            { ' ', ' ', ' ' },
            { ' ', ' ', ' ' },
            { ' ', ' ', ' ' }
        };
        char player = 'X';
        int row, col;
        int turn;

        Console.WriteLine("Welcome to Tic-Tac-Toe!");

        // Game loop
        for (turn = 0; turn < 9; turn++)
        {
            // Draw the board
            DrawBoard(board);

            // Prompt for valid input
            while (true)
            {
                Console.Write($"Player {player}, enter row (0-2) and column (0-2): ");
                string input = Console.ReadLine();
                string[] parts = input?.Split(' ', StringSplitOptions.RemoveEmptyEntries);

                if (parts == null || parts.Length != 2
                    || !int.TryParse(parts[0], out row)
                    || !int.TryParse(parts[1], out col)
                    || row < 0 || row > 2 || col < 0 || col > 2
                    || board[row, col] != ' ')
                {
                    Console.WriteLine("Invalid move. Try again.");
                }
                else
                {
                    break; // Valid input, exit the loop.
                }
            }

            // Make the move
            board[row, col] = player;

            // Check for a win after making a move
            if (CheckWin(board, player))
            {
                DrawBoard(board);
                Console.WriteLine($"Player {player} wins!");
                break; // Exit the loop after a win.
            }

            // Switch to the other player
            player = (player == 'X') ? 'O' : 'X';
        }

        // End of the game
        DrawBoard(board);

        // Check for a draw
        if (turn == 9 && !CheckWin(board, 'X') && !CheckWin(board, 'O'))
        {
            Console.WriteLine("It's a draw!");
        }
    }
}
