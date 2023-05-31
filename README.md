## How to run

```bash
yarn && yarn pod install
yarn ios
```

## How to run tests

```bash
yarn test
```

## Structure

```
src/
  - api/ - methods related to the API client
  - components/ - components that can be combined from others
    - ui/ - basic ui components that can be combined anywhere else
  - screens/ - components that combine other components into a ready-to-display view; at this level we make api calls.
  - theme/ - object that contains all the global styling constants
  - utils/ - methods and classes that contain shared logic
```
