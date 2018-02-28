# electron-hmi

Demonstration project to explore the possibilities offered by multiplatform technologies such as node.js, typescript and electron, in **H**uman **M**achine **I**nterfaces (HMI) development.

## Foreward

As an engineer involved in the last two decades in design and development of complex systems in different fields such as Industrial Automation, Internet Of Things, and lately in Virtual/Augmented Reality aided Training Systems, one of the tasks to face with is the development of different HMI clients to allow the interaction between the end user and the above mentioned systems.

This note, and the attached project, is aimed to identify a set of technologies that will allow the realization of those interfaces independently, as far as possible, from the hardware and operating system platform on which they are intended to run. Independency, in my humble opinion, is, and will be, a key concept, that will allow system engineers to scale all the components to the real needs and to the budget available to accomplish the requirements of a project.

Among all the different techonologies available on the market nowadays, the only ecosystem that is really cross platform is the one centered on the [javascript](https://www.javascript.com/) programming language. Neither Java or .NET are capable of such a capillary diffusion natively. The language once used only for client applications running in a browser, thanks technologies like [Node.js](https://nodejs.org/) make its use allowed server side also. There's a lot of tools and libraries borrowed from the Web Applications field that make the implementation of appealing user interfaces really simple. Boxing all this stuff in a desktop application runnable on **Windows**, **Linux** or even **macOS**, is really straightforward with frameworks such as [electronjs](https://electronjs.org/).

The only *caveat* toward the use of plain javascript for large applications is in the nature of javascript itself or in the fact of being a loosely typed programming language. This fact made me, and many other *old style* programmers I suspect, suspicious respect the use of this idoma, but when I first read about [**Type**Script](https://www.typescriptlang.org/), a superset of Javascritpt introduced by Microsoft, that introduces **types** in JS, I felt very curious, and, a I always do with those kind of things, I began to study, and to search for some tools that hopefully will allow me to achieve the target that is to implement an HMI capable to connect and communicate over some channels and to run on my macbook, on a Windows pc/laptop and also on a tiny [Raspbery Pi](https://www.raspberrypi.org/).

## Development workstation setup

Let's begin preparing to necessary to build do our application. To prove that the final product is really cross platform I will use a Macbook Pro with **macOS** *High Sierra* ver. 10.3.3 as my main development machine and a Windows 10 Pro laptop and an Ubuntu Server 16.04 LTS machine to repackage and test the resulting application.

To install all the necessary packages and frameworks I'll make use of package managers, and, in detail:

- [Homebrew](https://brew.sh/) on macOS;
- [Chocolatey](https://chocolatey.org/) on Windows;
- [Advanced Packaging Tool](https://it.wikipedia.org/wiki/Advanced_Packaging_Tool)  a.k.a. **apt** on Ubuntu;

### Node.js

First of all we need to have node.js, the javascript runtime, installed on development machines. I prefer using an LTS version, that, at the time of writing is **8.9.4 LTS**. We can download the installer for the desired os from the node.js [site](https://nodejs.org/), or we can use the above mentioned package managers.

On macOS, on a terminal we'll issue the command

```cmd
MacBook-Pro-di-Maurizio:/ maurizioattanasi$  brew install node@8
```

which will download and install the latest release of version 8. After the installation process terminates, on the same command line we'll state the following command:

On a Windows system, with Chocolatey installed, on a command prompt, we'll use the command:

```cmd
C:\> choco install nodejs-lts
````

On Debian/Ubuntu machines, we'll use:

```cmd
m***@m***-server:~$ apt-get install -y nodejs
```

#### Node installation check

After the installation process, on a command promp (or Terminal), we'll issue the command *node -v* to check the current version of node, and *npm -v*, to check the current version of npm.

```cmd
MacBook-Pro-di-Maurizio:/ maurizioattanasi$ node -v
v8.9.4
```

that tells us that we have installed the desired version. As a side effect of installing node.js, we have also at our disposal the **Node Package Manager* a.k.a. npm. To check the npm version, on the terminal, we'll issue:

```cmd
MacBook-Pro-di-Maurizio:/ maurizioattanasi$ npm -v
5.6.0
```

### TypeScript

By installing TypeScript we mean the TypeScript compiler, named **tsc** that is the main component needed to compile TypeScript code into plain JavaScritpt. Having *npm* installed on our development machines, this step is quite straightforward. On a command prompt, or a terminal, simply type:

```cmd
MacBook-Pro-di-Maurizio:/ maurizioattanasi$ npm install -g typescript
```

then hit enter. After completion we'll have tsc, the TypeScript compiler, installed globally (-g switch applyed to the npm command). To check the version installed, as usal, type:

```cmd
MacBook-Pro-di-Maurizio:~ maurizioattanasi$ tsc -v
Version 2.6.2
```

Perfect! We have **node.js version 8.9.4**,  **npm version 5.6.0** and **TypeScript version 2.6.2** installed on our machine. From now on we only need a text editor, one with which we feel at ease, and we can start writing down some code.

## Project setup

To start a node project we'll use npm again:

```cmd
maurizioattanasi$ npm init -y
```

that will result in a *package.json* file which content will be similar to:

```json
{
  "name": "electron-hmi",
  "version": "1.0.0",
  "description": "Demonstration project to explore the possibilities offered by multiplatform technologies such as node.js, typescript and electron, in **H**uman **M**achine **I**nterfaces (HMI) development.",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/alien70/electron-hmi.git"
  },
  "keywords": [],
  "author": "",
  "license": "MIT",
  "bugs": {
    "url": "https://github.com/alien70/electron-hmi/issues"
  },
  "homepage": "https://github.com/alien70/electron-hmi#readme"
}
```

### electronjs setup

Following the instructions on the npm page for [electron](https://www.npmjs.com/package/electron), on the terminal:

```cmd
maurizioattanasi$ npm install electron --save-dev --save-exact
````

or

```cmd
maurizioattanasi$ npm i electron -D -E
```

at the end we'll have the **package.json** file

```json
  "devDependencies": {
    "electron": "1.8.2"
  }
```

### First electron app... The JavaScritp way

```
<tldr></tldr>
````

Following the electron tutorial [Writing Your First Electron App
](https://electronjs.org/docs/tutorial/first-app#writing-your-first-electron-app), we'll create a main.js file and a index.html file and we'll modify the **package.json** as follow:

```json
...
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  },
...
```

Now we can try our application running...

```cmd
maurizioattanasi$ npm start
```

...and, here we have our first web based desktop application.


![Figure 1: My First Electron HMI](./images/my-first-electron-hmi.png)

The next step is to replace the JavaScript code with TypeScript.
