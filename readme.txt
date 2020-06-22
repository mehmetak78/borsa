- DB

CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=62 DEFAULT CHARSET=latin1;


- Create an empty project called "oAuthReact"
- npm init
    MEHMETs-MacBook-Pro:contact-keeper mehmetak$ npm init -y
- Change "package.json"
    Use "server.js" instead of "index.js"
- Install packages
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install express express-validator cookie-session bcryptjs jsonwebtoken mysql node-cron date-fns
- Dev dependencies
    MEHMETs-MacBook-Pro:jwtReact mehmetak$ npm install -D nodemon concurrently
- Add scripts to "package.json"
    - add "start"
          "scripts": {
            "start": "node server.js",
            "server": "nodemon server.js"
          },
- create file "server.js"
- Git
    - Create a file ".gitignore"
           /node_modules
    - Initialize the git repository
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git init
    - Add all files
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git add .
    - Commit
        - MEHMETs-MacBook-Pro:contact-keeper mehmetak$ git commit -m "Initial Commit"
    - Share in GitHub
        VCS/Import Into Version Control/Share Project in Github

- Using Crone
    cron.schedule("0 */5 * * * *", () => {
        console.log("Cron is running");
    })
        second minute hour dayOfMonth month dayOfWeek

- Add SCSS features
    - In index.html
         <link rel="stylesheet" href="css/style.css"/>

    - % sudo npm install -g sass

    - Use File Watchers in Webstorm
        ◦ Install SASS plugin in Webstorm in preferences/Plugins
        ◦ Preferences / Tools / File Watchers
            ‣ Make SCSS checked
            ‣ Double click SCSS to change settings (leave default)

                Arguments : $FileName$:../css/$FileNameWithoutExtension$.css
                Output Paths : ../css/$FileNameWithoutExtension$.css:../css/$FileNameWithoutExtension$.css.map

    • Or in the terminal
        ◦ Sass --watch scss/style.scss css/style.css.  (making to a different folder called css)
        ◦ As long as it is running it will check for the changes in sass file and compiles them into css file.

    • Compress CSS file
        ◦ % sudo npm install -g yuicompressor
        ◦ Add File Watcher
            ‣ Yui Compressor CSS

    - Webstorm LiveEdit
        - Documentation : https://confluence.jetbrains.com/display/WI/Live+Edit?_ga=2.53775144.1482590996.1585422253-1223985983.1518190055
        - Install Chrome plugin
            - JetBrains IDE Support
        - To start using Live Edit you need to start a JavaScript debug session for any html file.

            - To start the JavaScript debugger|http://confluence.jetbrains.com/display/WI/Starting+a+JavaScript+debug+session], select Debug file from the context menu of any html file (or in the context menu of the editor when the file is opened).


- Add bootstrap
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>


For editing a SVG icon :
<!--

    Copy the icon from : https://thenounproject.com/
    Drag and drop into Figma
    Edit in Figma
    Group everything inside in a group
    Copy / Copy As SVG in Figma
    Open the svg file in the project and paste the copied svg data

-->

Proxy:
- In the client project, under the route src directory, copy the setupProxy.js file
