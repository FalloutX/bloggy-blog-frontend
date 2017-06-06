# Confy-Conf Frontend

<p>
  <div align="center" style="font-weight:700;font-size:2.1em;margin-bottom:25px"> Built with </div>
  <div align="center">
    <a href="https://github.com/NYTimes/kyt">
      <img src="https://github.com/NYTimes/kyt/raw/master/images/kyt-logo-large.png" alt="KYT logo" style="max-width:252px;">
    </a>
  </div>
</p>


### Configuration Needed to Start

- needs `src/config.json` file with the skeleton given below. Just copy the skeleton and replace `BACKEND_SERVICE_ADDRESS` with your backend server address.

```json

{
  "server": {
    "baseAddress": "BACKEND_SERVICE_ADDRESS",
    "twitterAuth": "login/twitter",
    "api": {
      "me": "api/me"
    }
  }
}


```

### Usage.


- Usage is similar to the process given in [KYT readme](https://github.com/NYTimes/kyt)
