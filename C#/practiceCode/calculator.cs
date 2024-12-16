using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace WebApplication1
{
public partial class _Default : Page
{
string input = String.Empty;
string num1 = string.Empty;
string num2 = string.Empty;
char operation;
double result = 0.0;
protected void one_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "1";
this.Textbox.Text += input;
}
protected void two_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "2";
this.Textbox.Text += input;
}
protected void three_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "3";
this.Textbox.Text += input;
}
protected void four_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "4";
this.Textbox.Text += input;
}
protected void five_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "5";
this.Textbox.Text += input;
}
protected void six_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "6";
this.Textbox.Text += input;
}
protected void seven_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "7";
this.Textbox.Text += input;
}
protected void eight_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "8";
this.Textbox.Text += input;
}
protected void nine_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "9";
this.Textbox.Text += input;
}
protected void zero_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += "0";
this.Textbox.Text += input;
}
protected void add_Click(object sender, EventArgs e)
{
num1 = input;
operation = '+';
input = string.Empty;
}
protected void sub_Click(object sender, EventArgs e)
{
num1 = input;
operation = '-';
input = string.Empty;
}
protected void multi_Click(object sender, EventArgs e)
{
num1 = input;
operation = '*';
input = string.Empty;
}
protected void div_Click(object sender, EventArgs e)
{
num1 = input;
operation = '/';
input = string.Empty;
}
protected void remain_Click(object sender, EventArgs e)
{
num1 = input;
operation = '%';
input = string.Empty;
}
protected void point_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
input += ".";
this.Textbox.Text += input;
}
protected void del_Click(object sender, EventArgs e)
{
this.Textbox.Text = "";
this.input = string.Empty;
this.num1 = string.Empty;
this.num2 = string.Empty;
}
protected void result_Click(object sender, EventArgs e)
{
num2 = input;
double n1, n2;
double.TryParse(num1, out n1);
double.TryParse(num2, out n2);
this.Textbox.Text = "";
this.input = string.Empty;
this.num1 = string.Empty;
this.num2 = string.Empty;
if (operation == '+')
{
result = n1 + n2;
Textbox.Text = result.ToString();
}
else if (operation == '-')
{
result = n1 - n2;
Textbox.Text = result.ToString();
}
else if (operation == '*')
{
result = n1 * n2;
Textbox.Text = result.ToString();
}
else if (operation == '/')
{
if (n2 != 0)
{
result = n1 / n2;
Textbox.Text = result.ToString();
}
else
{
Textbox.Text = "******";
}
}
}
}
}