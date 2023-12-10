export default{
    "name": "pageCategory",
    "title": "Page Category",
    "type": "document",
    "fields": [
      {
        "name": "title",
        "title": "Title",
        "type": "string"
      },
      {
        "name": "slug",
        "type": "slug",
        "options": {
          "source": "title",
          "maxLength": 200,
          "slugify": input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .replace(/ä/g, 'a')
                               .replace(/å/g, 'a')
                               .replace(/ö/g, 'o')
                               .slice(0, 200)
        },
        "validation": (Rule) => Rule.required()
      },
    ]
  }
