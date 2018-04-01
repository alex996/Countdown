# Countdown

The complete React countdown app from [React JS Tutorial series](https://www.youtube.com/watch?v=xHQsBWtFy6c&list=PLcCp4mjO-z9_mirThFLgn6AVSp4JEazxw) on YouTube.

## Installation

```
git clone https://github.com/alex996/Countdown.git /path/to/countdown

cd /path/to/countdown

npm i
```

### Caveats

[moment-holiday](https://github.com/kodie/moment-holiday) lib doesn't seem to play very nicely with the default webpack config in [create-react-app](https://github.com/facebook/create-react-app). That means you'll have to either tweak it yourself, or do a quick'n'dirty hack I describe in [this video](https://www.youtube.com/watch?v=ZO8ii8IkXa8). It's worth to note that I *was* able to get it working on CodeSandbox though.

If you want to follow up on the issue, I opened a [ticket](https://github.com/kodie/moment-holiday/issues/19) under the repo. Considering that it wasn't updated since Aug, 2017, I don't have much hope that this will be PR'ed any time soon (maybe I'll make one myself later). If you come across a solution, don't hesitate to share it on my channel!