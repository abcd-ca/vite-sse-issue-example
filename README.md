# Vite React Express Boilerplate

> Quickly bootstrap a new project with Vite React Express Boilerplate.

This boilerplate is a fork of [lmachens/vite-boilerplate](https://github.com/lmachens/vite-boilerplate), but replaces TypeScript with JavaScript and removes Storybook.

I created it as an example for this GitHub issue

# Dev mode

Demonstrates SSE not closing connections when the browser window is closed or refreshed. You will see in the Chrome DevTools console that client connections are accumulating when you refresh the page which shouldn't happen.

1. start the app using `npm run dev`
2. visit, http://localhost:3000
3. open the browser console
4. refresh the page a few times and see the number of connections grow ("There are 1 person(s) here right now!" then "There are 2 person(s) here right now!"...)

# Prod mode

Demonstrates SSE disconnect working as expected

1. build the app using `npm run build`
2. start the app using `npm start`
3. visit, http://localhost:3001 (make sure you change https to http if your browser changes it automatically)
4. open the browser console
5. refresh the page a few times and see the number of connections remain at 1 ("There are 1 person(s) here right now!")
