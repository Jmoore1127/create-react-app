const path = require('path');

module.exports = function(plop) {
  plop.addHelper('src', function() {
    return path.join(plop.getPlopfilePath(), 'src');
  });

  plop.addHelper('cwd', function() {
    return process.cwd();
  });

  plop.addHelper('root', function(to) {
    var relative = path.relative(
      process.cwd(),
      path.join(plop.getPlopfilePath(), to)
    );
    return relative.replace(/\\/g, '/');
  });

  plop.setGenerator('component', {
    description: 'Create a React component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name?',
        validate: value => {
          if (value.length) return true;
          return 'Component name is required';
        },
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name?',
        default: 'generic',
        validate: value => {
          if (value.length) return true;
          return 'Feature name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/{{kebabCase name}}.component.jsx',
        templateFile: '.plop/component/component.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/{{kebabCase name}}.component.test.jsx',
        templateFile: '.plop/component/component.test.jsx.hbs',
      },
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/{{kebabCase name}}.component.styles.js',
        templateFile: '.plop/component/component.styles.js.hbs',
      },
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/index.js',
        templateFile: '.plop/component/index.js.hbs',
      },
    ],
  });

  plop.setGenerator('container', {
    description: 'Create a react container',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Main component name?',
        validate: value => {
          if (value.length) return true;
          return 'Main component is required';
        },
      },
      {
        type: 'input',
        name: 'feature',
        message: 'Feature name?',
        default: 'generic',
        validate: value => {
          if (value.length) return true;
          return 'Feature name is required';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/{{kebabCase name}}.container.js',
        templateFile: '.plop/container/container.js.hbs',
      },
      {
        type: 'add',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/{{kebabCase name}}.container.test.js',
        templateFile: '.plop/container/container.test.js.hbs',
      },
      {
        type: 'append',
        path:
          '{{src}}/components/{{kebabCase feature}}/{{kebabCase name}}/index.js',
        template: "export { {{pascalCase name}}Container } from './{{kebabCase name}}.container';",
        abortOnFail: false,
      },
    ],
  });

  plop.setGenerator('action', {
    description: 'Create a redux action/reducer/logic set',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Action name?',
        validate: value => {
          if (value.length) return true;
          return 'Action name is required.';
        },
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/redux/actions/{{kebabCase name}}/{{kebabCase name}}.action.js',
        templateFile: '.plop/action/action.js.hbs',
      },
      {
        type: 'add',
        path: 'src/redux/actions/{{kebabCase name}}/{{kebabCase name}}.action.test.js',
        templateFile: '.plop/action/action.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/redux/actions/{{kebabCase name}}/index.js',
        templateFile: '.plop/action/index.js.hbs',
      },
    ],
  });
};
