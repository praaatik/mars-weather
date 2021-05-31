# Mars Weather

- This is a small project which fetches the current weather on Mars using the [NASA's InSight Weather API](https://mars.nasa.gov/insight/weather/).
- Out of a myriad of details which the API provides, only the following are the ones displayed
  - Sol (which is the solar day on Mars)
  - Date
  - Season
  - Maximum and minimum Temperature (in degrees celsius)
  - Average Wind Speed (in meters/sec)
  - Average Pressure (in Pascal)

- This site has been published on [GitHub Pages](https://praaatik.github.io/mars-weather/)

![Screenshot](https://raw.githubusercontent.com/praaatik/mars-weather/main/screenshot.PNG)

## Want to run the app locally instead?

You need to have [Node.js](https://nodejs.org/en/) pre-installed on your machine, check out [this link](https://nodejs.org/en/download/package-manager/) in case you haven't.

To run the app, first clone the repository.

```
git clone https://github.com/praaatik/mars-weather
```

Change to the directory

```
cd mars-weather/
```

Install the dependencies by running the following command

```
npm install
```

Finally, run the app!

```
npm start
```

### Finally, if you've got any modifications or suggestions, please feel free to raise a PR :)
