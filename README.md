# grunt-angular-extender

Extend AngularJS applications by injecting module dependencies at build time.

Take at look at https://github.com/mariocasciaro/angular-extender to know what exactly this task is doing 
 and and explanation of the motivations.
 

[![NPM](https://nodei.co/npm/grunt-angular-extender.png?downloads=true)](https://nodei.co/npm/grunt-angular-extender/)

[![Build Status](https://travis-ci.org/mariocasciaro/grunt-angular-extender.png)](https://travis-ci.org/mariocasciaro/grunt-angular-extender)
[![Dependency Status](https://david-dm.org/mariocasciaro/grunt-angular-extender.png)](https://david-dm.org/mariocasciaro/grunt-angular-extender)

## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the 
[Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a 
[Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. 
Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-angular-extender --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-angular-extender');
```

## The "angular_extender" task

### Overview
In your project's Gruntfile, add a section named `angular_extender` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  angular_extender: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.modules
Type: `Object`
Default value: `{}`

An object where the keys are the modules to extend and the values are arrays containing a list of module names 
that will be added to the extended module dependencies.

### Usage Examples

#### Transform the files in place

Transforms all the `.js` files in a given directory.
**WARNING: use this option only on fresh copies of your sources, this grunt task is NOT idempotent and will change 
the contents of your sources**

```js
grunt.initConfig({
  angular_extender: {
    options: {
      modules: {
        "myApp": [
          "plugin1",
          "plugin2"
        ]
      }
    },
    src: "assets/*.js"
  }
});
```


#### Copy and transform the files

Copy all the files to the specified target directory and transforms the angular modules in the process.

```js
grunt.initConfig({
  angular_extender: {
    options: {
      modules: {
        "myApp": [
          "plugin1",
          "plugin2"
        ]
      }
    },
    files: [
      {
        expand: true, 
        cwd: 'src/', 
        src: ['**/*.js'], 
        dest: 'compiled/', 
        filter: 'isFile'
      }
    ]
  }
});
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. 
Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_
