# Gatsby Typescript Template

The template uses complete typescript features, even the gatsby configuration files are written in typescipt.

## Rolling a new project

Run the following command to start a new Gatsby project with our template.

```sh
gatsby new hello-world https://github.com/developbharat/gatsby-typescript-template
```

## Folder Structure

```txt
.
├── dist # Compiled Typescript files
├── gatsby-browser.ts # Gatsby Configuration files
├── gatsby-config.ts # Gatsby Configuration files
├── gatsby-node.ts # Gatsby Configuration files
├── node_modules # You know it right.
├── package.json # Your dependencies
├── public # Gatsby Generated Output site
├── Readme.md # Your Project Readme
├── src # All Your code will be here.
│   ├── images
│   ├── pages
│   │   └── index.tsx
│   └── utils
│       └── createPages.ts
├── tsconfig.json # Configuration for Typescript
```

All the folders are self explanatory and easy to use. Here is the final folder view you will be working with most often.

```txt
.
├── gatsby-browser.ts # Gatsby Configuration files
├── gatsby-config.ts # Gatsby Configuration files
├── gatsby-node.ts # Gatsby Configuration files
├── src # All Your code will be here.
│   ├── images
│   ├── pages # Gatsby pages for your site.
│   │   └── index.tsx
│   └── utils # Your own custom utilities.
│       └── createPages.ts
```

## Development Procedure

Here are the steps you need to take in order to develop your application.

Compile typescript files to javascript files

```sh
yarn develop:ts
```

Launch Gatsby development server

```sh
yarn gatsby:develop
```

## Extended Development Control

Our `package.json` file holds the following scripts

| Script           | Command                                       | Description                                            |
| ---------------- | --------------------------------------------- | ------------------------------------------------------ |
| "start"          | "node dist/index.js"                          | Starts your site server in production                  |
| "dev"            | "nodemon"                                     | Starts your site server in development                 |
| "watch"          | "tsc -w"                                      | Watches for changes in `src` folder                    |
| "tsc:root-watch" | "yarn run tsc:root -w"                        | Watches for changes in root directory of your project  |
| "build"          | "yarn run tsc:root & tsc"                     | Generates JS from Typescript                           |
| "tsc:root"       | "tsc \*.ts --outDir . --esModuleInterop true" | Compiles gatsby configuration files to JS files        |
| "gatsby:develop" | "gatsby develop"                              | Starts gatsby server in development mode               |
| "gatsby:build"   | "gatsby build"                                | Builds your Gatsby site                                |
| "develop:ts"     | "yarn run tsc:root-watch & yarn watch         | Easy command to run typescript compilation in parallel |

## Thanks

Thanks for using our template, we are a community at [Develop Bharat](https://developbharat.com). Your Support is most appreciated. Thanks for using our product. If you want to contribute then feel free to fork the repository.
