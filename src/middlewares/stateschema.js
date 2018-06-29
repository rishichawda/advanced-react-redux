export default {
    "$id": "http://example.com/example.json",
    "type": "object",
    "definitions": {},
    "$schema": "http://json-schema.org/draft-07/schema#",
    "properties": {
      "comments": {
        "$id": "/properties/comments",
        "type": "array"
      },
      "auth": {
        "$id": "/properties/auth",
        "type": "boolean",
        "title": "The Auth Schema ",
        "default": false,
        "examples": [
          false
        ]
      }
    }
  }