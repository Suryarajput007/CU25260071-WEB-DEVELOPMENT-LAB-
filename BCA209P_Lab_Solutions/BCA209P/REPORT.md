# BCA209P - Web Technology Lab: Implementation Report
**BCA 3rd Semester (Session 2026-2027)**

Name:SURYA RAJPUT Roll No:253026223

## How to run
Open any `.html` file by double-clicking it (Chrome / Edge / Firefox).
For AS04 `q5_xml_to_html.html`, run `python -m http.server` in the AS04 folder and open
`http://localhost:8000/q5_xml_to_html.html` so the XML file can be fetched.

## Lab Sheet 01 - HTML basics (AS01)
| File | Implementation | Result |
|---|---|---|
| q01_profile | headings, p, b, i, u, br | Profile page displayed |
| q02_text_tags | h1-h6, b, strong, i, em, u, mark, sup, sub | All formatting shown |
| q03_unordered_list | ul with disc/circle/square/none | 5 languages in 4 styles |
| q04_ordered_list | ol | Steps numbered 1-6 |
| q05_nested_list | ol containing ul | Courses with subjects |
| q06_student_table | table, tr, th, td | Student table with borders |
| q07_timetable | rowspan (lunch), colspan (lab) | Timetable merged cells |
| q08_images | img with width, height, alt | 3 images displayed |
| q09_registration_form | text, email, password, radio, date, select, checkbox, textarea | Form with submit/reset |
| q10_college_admission | headings, lists, images, table, form combined | Complete admission page |

## Lab Sheet 02 - Forms, Frames, CSS, JS (AS02)
1. Styled registration form (`style.css`) 2. Frames website (`frameset` + iframe alternative, `target="main"` links)
3. Login and admission forms with CSS 4. JS calculator (+ - * /, divide-by-zero check)
5. JS validation (name, email, mobile, password, age) with messages.

## Lab Sheet 03 - JavaScript (AS03)
Arithmetic ops, grade (if-else), multiplication table (for loop), factorial (function), registration validation (regex).

## Lab Sheet 04 - XML and DOM (AS04)
`students.xml`, `books.xml` (well-formed, 5 records each); DOM access with `getElementById`, `getElementsByTagName`, `querySelector`;
DOM change on click (`innerHTML`, `textContent`, `style.backgroundColor`); XML read using `fetch` + `DOMParser`.

### DOM methods explained
- `getElementById(id)` - returns the single element with that id.
- `getElementsByTagName(tag)` - returns a live collection of all elements with that tag.
- `querySelector(css)` - returns the first element matching a CSS selector.
- `innerHTML / textContent` - read or change an element's content.
- `DOMParser.parseFromString()` - converts XML text into a DOM tree.

## Lab Sheet 05 - Static websites and Online Book Store (AS05)
q1 profile, q2 college site (clock + image zoom), q3 restaurant (veg/non-veg filter), q4 portfolio (typing effect, form check),
q5 JS features demo; `bookstore/` has Home, Catalogue (10 books + search), Book Details (`details.html?id=B001`),
Register, Login, Cart (quantity, total, localStorage), Contact. Folders: `css/`, `js/`, `images/`.

## Conclusion
All programs were tested in a browser and work as expected.
