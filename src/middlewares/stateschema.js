const schema = {
  "type": "object",
  "definitions": {},
  "properties": {
    "comments": {
      "$id": "/properties/comments",
      "type": "array",
      "items": {
        "$id": "/properties/comments/items",
        "type": "string"
      }
    },
    "auth": {
      "$id": "/properties/auth",
      "type": "boolean"
    }
  }
}

export default schema;