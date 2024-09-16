# Becoming Talented Tools

 The book _Becoming Talented: A Systematic Method for the Development of Ear
 Training and Music Reading Skills_ by Isador Miller ([amazon
 link](https://www.amazon.com/Becoming-Talented-Systematic-Development-Training/dp/B0CW6HHF7L))
 has a large collection of exercises for improving musical fluency. Some of
 those exercises require either randomly selecting from some choices or having
 a partner play certain musical items so that the person doing the exercise
 can guess.

 This website <https://neilmb.github.io/becoming-talented-tools> has some web
 applications to make it easier to do these exercises on your own.

 ## Contributing

 This website is open source under an MIT License so that the code here can be
 re-used, but the license and author information must be retained in any
 derived work. Contributions from the public are welcome. If you want to make
 changes or add more exercises to the code, visit the Github page
 <https://github.com/neilmb/becoming-talented-tools> and make a pull request
 or file an issue with a feature request.

 ## Developing

 The site is built by the static site generator
 [Eleventy](https://www.11ty.dev). To make changes, clone this Github
 repository, install Node/NPM, and in this directory run

 ```shell
 npm ci
 ```

 Then, start the Eleventy build server with the command

 ```shell
 npx @11ty/eleventy --serve
 ```

 Changes made to files in `src/` will be automatically built into `_site/` and
 served at <http://localhost:8080>.

 The exercises are Web Components on individual web pages in
 `src/exercise/X.Y/index.html` and the Javascript implementations of the
 components are in the same `src/exercise/X.Y/` directory.
