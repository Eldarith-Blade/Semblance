<p align="center"><img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/mask-159-549634.png"></p>
<h1 align="center">Semblance Development</h1> <br>

   <h2 align="center"><i>Web development project for the promotion of a fictional game provided by a non-existent client</i></h2> <br>

## Framework

<ul>
 <li><b>HTML 5</b> &nbsp&nbsp&nbsp<img src="https://image.flaticon.com/icons/svg/174/174854.svg" height="32" width="32"> </li> <br>
 <li><b>Bootstrap 4<b/> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/free/png-128/bootstrap-226077.png" height="32" width="32"> </li> <br>
 <li><b>Jquery</b> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/free/png-128/jquery-10-1175155.png" height="32" width="32"> </li> <br>
 <li><b>Popper.js</b> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/javascript-22-625241.png" height="32" width="32"> </li> <br>
 <li><b>GSAP Library</b> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/premium/png-128-thumb/javascript-22-625241.png" height="32" width="32"> </li> <br>
 <li><b>Node.js</b> &nbsp&nbsp&nbsp<img src="https://image.flaticon.com/icons/svg/919/919825.svg" height="32" width="32"> </li> <br>
 <li><b>CSS3</b> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/free/png-128/css3-11-1175239.png" height="32" width="32"> </li> <br>
 <li><b>SASS</b> &nbsp&nbsp&nbsp<img src="https://cdn.iconscout.com/icon/free/png-128/sass-226054.png" height="32" width="32"> </li> <br>
</ul>

## Prerequisites

To continue developing this website, a developer must have knowledge about Bootstrap, Javascript libraries, Node.js package manager, and general SASS syntax and compiling. <br>

Every .js, .html, and .scss files contain extensive comments to help a developer further understand the functionality or usage.

Bootstrap documentation: [https://getbootstrap.com/docs/4.1/getting-started/introduction/](https://getbootstrap.com/docs/4.1/getting-started/introduction/)<br>
GSAP documentation: [https://greensock.com/docs/](https://greensock.com/docs/)<br>
SASS documentation: [https://sass-lang.com/documentation](https://sass-lang.com/documentation)<br>
Node.js documentation: [https://nodejs.org/api/documentation.html](https://nodejs.org/api/documentation.html)<br>

## Getting started

First download [Node.js](https://nodejs.org/en/) and then open up the Command Line Interface(CLI):

Check that your Node Package Manager is up to date by typing this command in the CLI: <br><br>
#### `$npm npm i -g npm` <br><br>

Next step is to install the [Git Bash](https://gitforwindows.org/) for retrieving repositories for <br>local work or add the addition of a pull request for features based on collaborators assigned.<br>

Once Git Bash is installed, open the CLI and change the current directory to desired installation location of the repository<br><br>

To view the current directory use: <br>
#### `$ dir`  <br>
This will list the current directory that you are in - to create a folder in the directory use: <br>
#### `$ mkdir` <br>
and finally once the desired directory is found or made, then you must change to that directory using: <br>
#### `$ cd path/folder` <br>
To go backwards in the directory use: <br>
#### `$ .` <br>
Move to root: <br>
#### `$ ..` <br><br>

After all the initial setup is done and you're in the desired directory, then use:
#### `git clone https://github.com/Ryathi/Semblance`<br><br>

You may now close Git Bash and reopen Node.js CLI to continue with developing the website. Using similar commands as before, navigate to the folder directory of the Github Repository until your command-line replicates this: <br>
#### `C:/Users/Name/Path/Path/Semblance`<br><br>

## Automation

This project utilises [Gulp](https://gulpjs.com/) automation via Javascript custom functions for certain tasks<br>

### SASS pipeline

If you're using the SASS(SCSS) files, then they need to be compiled into a suitable format for the browser (.CSS), and to do this, you will type the command in the current directory: <br>

For the mainStyle: <br>
#### `$gulp mainStyle` <br>
For Index: <br>
#### `$gulp home` <br>
For Navigation bar:
#### `$gulp navbar` <br><br>

To upload the website to simulate a server using the localhost as well as automatic reload of browser to visually see the website use: <br>
#### `$gulp watch` <br>
Functionality of 'watch' is slightly broken currently due to being refactored from old code to align with newer Gulp guideline standards. Use 'Ctrl + C' to exit the loop of live browsing. <br><br>

## File transfer protocol (FTP)

The project currently uses [Filezilla](https://filezilla-project.org/) to upload files to the server. 

## Resources

[Colour Scheme Designer - Colormind AI](http://colormind.io/)

[Hexadecimal Colour Values - HTML Color Codes](https://htmlcolorcodes.com/)

[W3C reference](https://www.w3.org/)
