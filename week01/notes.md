## Notes

August 30th, 2023

### Overview
- Mjumbe *highly* recommends going through extra modules in the Free Code Camp online stuff, beyond what he assigns
    - also ecommends going through that HTML lesson on building a cat photo app 
- Exercises are not graded but are very important to do
- Definitely check out the supplementary resources, esp. Javascript.info, Introduction to Web Mapping, and FreeCodeCamp

- Idea for first storymap: project pitch for why it would be worthwhile to create a website to allow community groups to download public information for their particular neighborhood/service area, e.g.,
    1. There are X number of commmunity groups in the city. They have a need for free data (use content from convo w Musa Trawally)
    2. These data are largely publicly available and should be easily recollected and shared for download (maybe do some viz about the different datasets available on ODP)
    3. Lay out users, steps for how this might get built (build dataset, publish to users)


### Intro to HTML

##### Parts of an HTML document:
- head (things about the page, but not on the page itself, e.g., title, styles applied to the page, what language the page is in, what character set it uses, etc.)
- body
- wrapped around these both, the HTML document itself

e.g., 

<!doctype html> tells the browser that this is an HTML document
<html>
<head>
...
</head>
<body>
...
</body>
</html>

##### Jargon:
Element: The things in the page, e.g., paragraphs, images, tables, etc. Can be nested.

Tag: How we write an element, e.g.,
- <html>
- <body>
- <p>

Attribute: modifies an element. Different elements have different sets of attributes. (Syntax looks like of like an argument in a Python function, e.g., attr_name="attr_value")

id/class: Special attributes that may appear on any element and help to identify specific/unique elements for styling or scripting purposes
- ids should be unique
- a class can be used for multiple elements

##### Basic Semantic Tags
- <p> paragraph
- <h1> thru <h6> heading
- <a> anchor, used to link from one page to another
- <table> table
- <ul> unordered list, <ol> ordered list, <li> list item
- <img> image

##### Separation of Concerns
- Generally speaking, we will try to seaparte *structure* (markuip) from *presentation* (styling) from *behavior* (scripting)
- Presentation (style sheets) generally written in CSS; HTML files refere to these in the head uelement using `<link rel="stylesheet" href="...">`
- Behavior is usually defined in JS, refer to at the end of the doc using <script src="..."></script> 


##### Some Notes from DataCodeCamp
- `var` can be declared and redeclared, so it can be overwritten
- `let` cannot be redeclared, so it can't be overwritten
- You should always name variables you don't want to reassign using the `const` keyword. This helps when you accidentally attempt to reassign a variable that is meant to stay constant.