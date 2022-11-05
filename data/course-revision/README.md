# Putting Course Revision Resources onto the Learning Platform

The Learning Platform has a standard format for publishing course revision materials. It assumes that a course revision campaign consists of a set of exercises that can be written in markdown.


In this *course-revision* folder observe that there are folders likes *1511* with mdx files inside. There is also a corresponding *1511.mdx* file next to the folder of the same name.

When you create a new course revision campaign, you **must** provide the following:

- An mdx file *course-revision/<course-offering>.mdx* which contains some info about this course revision campaign and how to get set up for the exercises (e.g. downloading some starter code). The <course-offering> should be replaced with the name of the course offering that this revision session is made for e.g. *1511-22T3* (currently the 1511 22T3 course revision campaign is labelled simply 1511 because you might like to re-use it for future offerings). The fields you must provide in the yaml are:
  - title: Title of the course revision campaign (e.g. CSESoc COMP1511 Revision Practice Problems)
  - desc: Brief descriptoin of this course revision campaign (e.g. Practical coding exercises to help you prepare for your COMP1511 22T3 final exam)
  - course: (e.g. COMP1511) (Currently not used in the code)
  - offering: (e.g. 22T3) (Currently not used in the code)
- A folder *course-revision/<course-offering>* which contains mdx files for each exercise. The fields you must provide in the yaml are:
  - title: Title of the exercise (e.g. BST Difference)
  - desc: Brief description of exercise (e.g. Find the mininum distance between any two numbers in a binary search tree)
  - class: Which course this exercise is for (eg. COMP2521)
  - difficulty: Difficult rating (1=easy, 2=medium, 3=hard) (e.g. 2)

Note: Both the <course-offering>.mdx and <course-offering> folder **MUST** share the exact same name in order to work (e.g. file `1511-22T3.mdx` and folder `1511-22T3`)

Once you have uploaded these files you can navigate to them at the url */course-revision* (e.g. *learn.csesoc.org.au/course-revision* or *localhost:3000/course-revision*)