const colors = require('colors');
const figlet = require('figlet');
const browserlist = require('browserlist');

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

    // Display browser compatibility info using browserlist
    try {
        const browsers = browserlist.getBrowserList();
        console.log('\n' + colors.cyan('🌐 Browser Compatibility:'));

        if (Array.isArray(browsers) && browsers.length > 0) {
            console.log(colors.white('  Supported browsers: ' + browsers.length));
            browsers.slice(0, 3).forEach((browser, index) => {
                console.log(colors.white(`  ${index + 1}. ${browser}`));
            });
            if (browsers.length > 3) {
                console.log(colors.gray(`  ... and ${browsers.length - 3} more`));
            }
        } else {
            console.log(colors.white('  Browser data: Available'));
        }
    } catch (error) {
        console.log(colors.yellow('  Browser compatibility: Not available'));
    }

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