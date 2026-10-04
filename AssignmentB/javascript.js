
//Q1. Create an object mentee with properties name, track, and cohort. 
// Add a new property isGraduated set to false, then delete the cohort property. 
// Log the object after each step.

// Step 1: Create the object
const mentee = {
  name: "Waheed",
  track: "Frontend Engineering",
  cohort: "2026"
};
console.log(mentee);

// Step 2: Add a new property
mentee.isGraduated = false;
console.log(mentee);

// Step 3: Delete the cohort property
delete mentee.cohort;
console.log(mentee);


//Q2. Create an object with a multiword property name (e.g. 'years of experience'). 
// Show that dot notation fails to access it and that square-bracket notation succeeds. 
// Explain in a comment why dot notation breaks here.

const engineer = {
  name: 'Setemi',
  'years of experience': 7,
};

// Dot notation fails:
// console.log(engineer.years of experience);
// This throws "SyntaxError: Unexpected identifier 'of'".

// Square brackets work:
console.log(engineer['years of experience']); // 7

/*
 * Why dot notation breaks:
 * Dot notation only works when the property name is a valid identifier,
 * meaning a single word with no spaces or special characters.
 * In engineer.years of experience, JavaScript reads "years" as the
 * property and then gets confused by the spaces and the words "of"
 * and "experience". Square brackets take a string, so the whole name,
 * spaces included, is read as one property name.
 */

//Q3. Write a function getField(obj, fieldName) that uses square-bracket
//  notation to dynamically return the value of any property name passed in as a string.

function getField(obj, fieldName) {
  return obj[fieldName];
}

const project = { name: 'Chunk8', stack: 'Next.js' };
console.log(getField(project, 'name'));   // "Chunk8"
console.log(getField(project, 'stack'));  // "Next.js"

//Q4. Write a function buildConfig(envName, value) 
// that returns an object where the key is computed 
// from envName (e.g. envName = "PORT" → { PORT: value }) 
// using computed property syntax [ ].

function buildConfig(envName, value) {
  return { [envName]: value };
}

console.log(buildConfig('PORT', 3000));        // { PORT: 3000 }
console.log(buildConfig('NODE_ENV', 'dev'));   // { NODE_ENV: 'dev' }

//Q5. Write a function createRepo(name, stars, language) that returns an object 
// using property value shorthand (not name: name). Then write a second version,
//  createRepoVerbose, the long way, and confirm both produce identical objects with JSON.stringify.

function createRepo(name, stars, language) {
  // shorthand version
  return { name, stars, language };
}

function createRepoVerbose(name, stars, language) {
  // long version
  return { name: name, stars: stars, language: language };
}

console.log(JSON.stringify(createRepo('repo-score', 42, 'TypeScript')));
console.log(JSON.stringify(createRepoVerbose('repo-score', 42, 'TypeScript')));