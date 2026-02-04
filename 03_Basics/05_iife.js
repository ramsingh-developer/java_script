// Immediately Invoked Function Expression (IIFE)

(function chai(){                // pure function ko () me wrap kar dege
    // named IIFE                  
    console.log(`DB CONNECTED`);
    
})();         // do iife ko aksath likhne ke liye ; ka use karte hai

( (name) => {
    console.log(`DB CONNECTED two ${name}`);
    
})('ram singh')

// iife ka use kab karte hai hai => global scope ke polusion se problem hoti hai kayi bar to us global scope ke jo
// variables hai uske polusion ko hatane ke liye ham IIfe ka use kiya