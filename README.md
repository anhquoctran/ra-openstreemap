# A `<OpenStreetMapInput/>` component for `react-admin`

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/anhquoctran/ra-openstreetmap/blob/master/LICENSE) [![GitHub forks](https://img.shields.io/github/forks/Naereen/StrapDown.js.svg?style=social&label=Fork&maxAge=2592000)](https://github.com/anhquoctran/ra-openstreetmap/) [![GitHub stars](https://img.shields.io/github/stars/Naereen/StrapDown.js.svg?style=social&label=Star&maxAge=2592000)](https://github.com/anhquoctran/ra-openstreetmap/stargazers/) [![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://github.com/anhquoctran/ra-openstreetmap/issues/) [![GitHub version](https://badge.fury.io/gh/Naereen%2FStrapDown.js.svg)](https://github.com/anhquoctran/ra-openstreetmap)

### The `OpenStreetMap` binding component for `react-admin` framework. Powered by `react-leaflet`  

## Installation

Using `npm`

```bash
$ npm install ra-openstreetmap
```
Or using `yarn`
```bash
$ yarn add ra-openstreetmap
```

## Usage

```tsx
import React, { FC } from 'react';
import { TextInput, SimpleForm, Edit } from 'react-admin';
import OpenStreetMapInput from 'ra-openstreetmap';

const PostEdit = (props) => {
  
  return (
    <Edit>
      <SimpleForm>
        <TextInput source="title" required />
        <TextInput source="description" required />
        <OpenStreetMapInput
          source="location" 
          />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
```

## Prop types reference

| Name | Type | Required | Description |
|------|------|----------|-------------|
| `source` | String | * | The `react-admin`'s form-field source |
| `className` | String | | |
| `zoom` | Number | * | |
| `style` | CSSProperties | | |
| `bounds` | LatLngBoundsExpression | * | |

## License

This library is licensed under the [MIT Licence](LICENSE).

## Author

This library is maintain by [@anhquoctran](https://github.com/anhquoctran)