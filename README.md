This is a starter template for [Learn Next.js](https://nextjs.org/learn).

## Run locally

```bash
npm run dev 
```

### Build and export 
- Build the app using next's build process

```bash
next build
```

- Export the app to static HTML

```bash
next export
```

`npm run build` combines these commands. 

If next commands are broken but npm command works, use npx to use the local version of next. It's generally a good practice to use npx when running locally installed Node.js executables, to make sure you're using the version of the tool that is specified in your project, rather than a potentially different globally installed version.

```bash
npx next build && npx next export
```

```bash

- Serve the app using a static server

```bash
serve out
```



