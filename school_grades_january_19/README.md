# Process Review

* The client is a school reports company who helps teachers find out how the students did on tests
* Based on a string of test results, the program should return a simple report of student performances 



| Input (Comma Separated String)  | Output (Sting)                            |
|---------------------------------|-------------------------------------------|
| " "                             | raise error/exception ['no grades found'] |
| "Red"                           | "Red: 1"                                  |
| "Green, Red"                    | "Green: 1\nRed: 1"                        |
| "Green, Green, Amber, Red, Red" | "Green: 2\nAmber: 1\nRed: 2"              |

Outlier
There can be a space between commas -> to account for;

