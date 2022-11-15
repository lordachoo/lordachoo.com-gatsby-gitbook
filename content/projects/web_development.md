---
title: "Web Development"
metaTitle: "Web Development"
metaDescription: "Web Development"
---

# Web Development History

Using various technology stacks. 

- Servers: NGINX/LIGHTTPD, Node.JS (EXPRESS), Custom written (C/C++)
- Database: InnoDB/MySQL, MongoDB
- Frameworks: jQuery, REACT, Gatsby

# About This Site

## Stack

- Hosted by Google Firebase
- Built in Node, using Gatsby
- Built using [gatsby-gitbook-starter](https://www.gatsbyjs.com/starters/hasura/gatsby-gitbook-starter)

Each page has a link to the MDX markup via the "Edit on GitHub" button to view the markup. 

### Example MDX Formatting

#### Simple Markup

```mdx
# Heading H1
Heading 1 text

## Heading H2
Heading 2 text

### Heading H3
Heading 3 text

#### Heading H4
Heading 4 text

##### Heading H5
Heading 5 text

###### Heading H6
Heading 6 text

## Lists
- Item 1
- Item 2
- Item 3
- Item 4
- Item 5

## Links

* Relative: [Codeblock](/codeblock)
* Absolute: [Demo](https://learn.hasura.io/graphql/react)
```

#### Example Code Blocks

The following is a code block with JavaScript language syntax highlighting.

```javascript
import React from 'react';
```

Supports multiple languages.

The following is a code block with diff. Lines with `+` highlighted in green shade indicating an addition. Lines with `-` highlighted in red shade indicating a deletion.

```javascript
- const data = ['1','2'];
+ const data = [1,2];
```

#### Live Editing example

```javascript react-live=true
<button className={'btn btn-default'}>Change my text</button>
```