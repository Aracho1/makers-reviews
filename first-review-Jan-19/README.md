* Client: School reports company
* Help teachers find out how the students did on tests by building a simple report 


Input: a string of csv test results e.g. 'Green, Amber, Red, Green' [case insensitive]
Output: "Green: 2\nAmber: 1\nRed: 2"

Input_______________________________| Output___________________________________
" "                                 | raise error/exception ['no grades found']  
"Red"                               | "Red: 1
"Green, Red"                        | "Green: 1\nRed: 1"
"Green, Green, Amber, Red, Red"     | "Green: 2\nAmber: 1\nRed: 2"

Outliers
* There can be a space between commas -> to account for;

