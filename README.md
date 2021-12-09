# unpercent
Convert a Percentage String to a Number

# install
```bash
npm install unpercent
```

# usage
```js
import unpercent from "unpercent";

unpercent("50%");
// 0.5

unpercent("10%", { whole: 256 });
//  25.6

unpercent("10%", { whole: 256, round: true });
//  26
```