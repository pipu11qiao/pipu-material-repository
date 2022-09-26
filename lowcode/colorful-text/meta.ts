
import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const ColorfulTextMeta: ComponentMetadata = {
  "componentName": "ColorfulText",
  "title": "ColorfulText",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "pipu-material-repository",
    "version": "0.1.0",
    "exportName": "ColorfulText",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "ColorSetter",
          "props": {
            "defaultValue": "#dddddd"
          },
        }
      },
      {
        "title": "尺寸",
        "name": "size",
        "setter": {
          "componentName": 'RadioGroupSetter',
          "isRequired": true,
          "props": {
            "options": [
              { "title": "大", "value": "large" },
              { "title": "中", "value": "normal" },
              { "title": "小", "value": "small" },
            ]
          },
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: Snippet[] = [
  {
    "title": "ColorfulText",
    "screenshot": "",
    "schema": {
      "componentName": "ColorfulText",
      "props": {}
    }
  }
];

export default {
  ...ColorfulTextMeta,
  snippets
};
