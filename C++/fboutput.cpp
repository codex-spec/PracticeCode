void checkscore()  //checks if bird gained score
{
    int y;
    for(y=0;y<20;y++)
    {
        if(c[birdx][y]=='|')  //if bird x coord is equal to pipe's coord, you get 1 point
        {
            score++;
            return;
        }
    }
}

bool gameover()  //checks if bird has hit something
{
    int x,y,f=0;
    if(birdy>19) //checks if bird hits ground
    {
        c[birdx][19]='*';  //sets bird and ground again, prevents errors
        c[birdx][20]='-';
        f=1;           //f=1, means function will return true
        goto quit;
    }
    else
    {     //checks if bird has hit pipes, here the 'n' variable is needed (pipe's coordinate's n is equal 2 (more than 0))
        if(n[birdx][birdy]>0 && (c[birdx][birdy]=='|' || c[birdx][birdy]=='*'))
        {
            c[birdx][birdy]='|';
            c[birdx-1][19]='*';
            f=1;
            goto quit;
        }
    }
    quit:
    if(f==1) return true;
    else return false;
}

void endgame() //just some screens for certain actions
{
    screen();   //this one pops up if game ends
    cout<<""<<endl<<endl;
    cout<<" ------------------------------------------------------------------------- "<<endl;
    cout<<"|    *****      *     *       * ******       ****  *       ****** ****    |"<<endl;
    cout<<"|   *          * *    * *   * * *           *    *  *     * *     *   *   |"<<endl;
    cout<<"|   *  ****   *   *   *  * *  * *****       *    *   *   *  ****  ****    |"<<endl;
    cout<<"|   *  *  *  *******  *   *   * *           *    *    * *   *     * *     |"<<endl;
    cout<<"|    *****  *       * *       * ******       ****      *    ***** *   *   |"<<endl;
    cout<<" ------------------------------------------------------------------------- "<<endl;
    cout<<""<<endl<<endl;
    cout<<"                        Y O U R   S C O R E : "<<score<<endl<<endl;
    cout<<"                        H I G H   S C O R E : "<<highscore<<endl;
    cout<<""<<endl<<endl;
}

void menu()  //shows menu
{
    system("cls");
    cout<<""<<endl;
    cout<<" --------------------------------------------------------  "<<endl;
    cout<<"|                                                        | "<<endl;
    cout<<"|   **** *    **** **** **** *   *    ***  * ***  ***    | "<<endl;
    cout<<"|   *    *    *  * *  * *  * *   *    *  * * *  * *  *   | "<<endl;
    cout<<"|   ***  *    **** **** **** *****    ***  * ***  *  *   | "<<endl;
    cout<<"|   *    *    *  * *    *      *      *  * * *  * *  *   | "<<endl;
    cout<<"|   *    **** *  * *    *      *      ***  * *  * ***    | "<<endl;
    cout<<"|                                                  v 1.0 | "<<endl;
    cout<<" --------------------------------------------------------  "<<endl;
    cout<<""<<endl<<endl;
    cout<<"                  High Score:  "<<highscore<<endl<<endl;
    cout<<""<<endl<<endl;
    cout<<"                     M E N U:    "<<endl<<endl;
    cout<<"                  1: Start Game  "<<endl<<endl;
    cout<<"                  2: Help        "<<endl<<endl;
    cout<<"                  3: Credits     "<<endl<<endl;
    cout<<"                  4: Exit        "<<endl<<endl;
}

void credits()
{
    char sel;
    system("cls");
    while(true)
    {
    cout<<""<<endl<<endl;
    cout<<"               Lead programmer: hakeris1010 "<<endl<<endl;
    cout<<"               Designer: hakeris1010 "<<endl<<endl;
    cout<<"               Testers: hakeris1010 "<<endl<<endl;
    cout<<"               Special thanks to: hakeris1010 ,Dong Nguyen (original)"<<endl<<endl;
    cout<<"               Version: 1.0 "<<endl<<endl<<endl;
    cout<<"Go back? [y/n]  ";
    cin>>sel;
    if(sel=='y') return;
    else system("cls");
    }
}

void help()
{
    char sel;
    system("cls");
    while(true)
    {
    cout<<""<<endl<<endl;
    cout<<"                   Controls: Press any key to fly up.         "<<endl<<endl;
    cout<<"             Goal: Fly through the holes between the pipes.   "<<endl;
    cout<<"             When you pass through the hole,you get 1 point.  "<<endl;
    cout<<"                    Try to pass as much as you can.           "<<endl;
    cout<<"            But be careful, don't hit the pipes or the ground!"<<endl<<endl;
    cout<<"                          Are you ready? Go!                  "<<endl<<endl<<endl;
    cout<<"Go back? [y/n]  ";
    cin>>sel;
    if(sel=='y') return;
    else system("cls");
    }
}
