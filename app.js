const colors = require('colors');
const figlet = require('figlet');

console.log('\n');

// Create fancy "Hello World" text
figlet('Hello World!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }

    console.log(colors.rainbow(data));
    console.log(colors.green('🌍 Welcome to Simple Hello World App!'));
    console.log(colors.blue('✨ This is a basic Node.js application'));
    console.log(colors.yellow('🚀 Ready to be expanded with more features'));

    // Display some basic info
    console.log('\n' + colors.cyan('📋 App Information:'));
    console.log(colors.white('  Name: Simple Hello World'));
    console.log(colors.white('  Version: 1.0.0'));
    console.log(colors.white('  Node Version: ' + process.version));
    console.log(colors.white('  Platform: ' + process.platform));
    console.log(colors.white('  Architecture: ' + process.arch));

    console.log('\n' + colors.magenta('🎉 Hello World application started successfully!'));
    console.log(colors.gray('👋 Thanks for using Simple Hello World!\n'));
});

// Simple greeting function
function greetUser(name = 'World') {
    return `Hello, ${name}! Welcome to our simple app.`;
}

// Export for potential testing
module.exports = {
    greetUser
};