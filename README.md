# Rails Sprockets jQuery

This is a demo project illustrating how you can gradually convert a legacy jQuery project built with Sprockets to one built with esbuild.

It demonstrates the conversion that you need to perform, which is not much, and also shows how you can use TypeScript with jQuery.

## Setup

Although I have not tested it fully, the following commands should get the development environment running.

We assume that you have Ruby and Node installed and that you have cloned this repository.

```
bundle install
npm install
bin/dev
```

Please let me know if you have problems setting it up

## How this repository was built

Although I will not go into the details, this is the gist of how this project was created.

1. `rails new` – this created a new Rails app with import maps and propshaft.
2. Most legacy jQuery apps will use Sprockets for the asset pipeline. To simulate legacy apps, I removed import maps and propshaft. Instead, I installed the [`sprockets-rails` gem](https://github.com/rails/sprockets-rails) and performed the necessary setup.
3. I wrote the jQuery code inside `app/assets/javascripts`. This is built with Sprockets.
4. I installed [`jsbundling-rails` gem](https://github.com/rails/jsbundling-rails) and installed it with the `esbuild` option. To prevent conflicts with the Sprockets version, I renamed `application.js` to `application_esbuild.js`. Both of these will be loaded in `layouts/application.html.erb`.
5. I wrote the jQuery code for esbuild inside `app/javascript/jquery`

A lot has changed with Rails' modern asset pipeline,
and I have [created a video to explain the main concepts](https://www.youtube.com/watch?v=J2jLG7FtUu4) (in Japanese). 
Expect to run into some hiccups along the way for your legacy project.

The above setup looks like this;

* Legacy jQuery in `app/assets/javascripts` is built using Sprockets. Specifically, it concatenates the JavaScript files and then adds digests for cache-busting.
* Modern jQuery in `app/javascript/jquery` is built using esbuild. Esbuild also handles compiling TypeScript. Note that Sprockets is still used after esbuild has done its job, and it adds digests for cache-busting.
* CSS is built using Sprockets. Digests for cache-busting are also added.
* Neither propshaft nor import maps are used.

## Moving Sprockets code to ES modules

There are a couple of points to consider when moving Sprockets code to esbuild.

Sprockets basically just concatenates your JavaScript files into a single file.
This means that there is no namespace isolation,
and so you need 
to use [IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE) (Immediately Invoked Function Expression)
or other techniques to modularize your code. 

On the other hand, ES modules are true modules and provide namespace isolation.
This means that you do not need the above techniques and every one of your modules is independent.

Hence with ES modules, IIFE is no longer necessary to isolate namespaces.
You just write your code in separate files and they will be independent of each other.

This also means
that with ES modules you need to `import` shared code whereas with Sprockets you can just define variables in the global scope, and they will be shared with every file.

Compare `app/assets/javascripts/components/switch_background.js` with `app/javascript/jquery/switch_background.ts`.

In the Sprockets-only case (`app/assets/javascripts/components/switch_background.js`),
you have access to the `colorClasses` constant defined in `app/assets/javascripts/shared/color_classes.js`,
without any declartion, simply because it was declared earlier in `app/assets/javascripts/application.js`

In the ES modules case, `app/javascript/jquery/switch_background.ts` needs to explicity declare it's dependencies with the following code.

```typescript
import {esColorClasses} from './es_color_classes'
```

TypeScript should be able to help you with this kind of dependency resolution.

