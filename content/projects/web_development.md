---
title: "Web Development"
metaTitle: "Web Development"
metaDescription: "Web Development"
---

# Web Development History

I have completed extensive web projects with a variety of technologies, including a full featured CPQ (configure, price, quote) system written with PHP (php-fpm), MySQL, served with NGINX. 

- Servers: NGINX/LIGHTTPD, Node.JS (EXPRESS), Custom written (C/C++)
- Database: InnoDB/MySQL, MongoDB
- Frameworks: jQuery, REACT, Gatsby, Custom written REST API(s)

# About This Site

## Stack

- JS / Site & CDN hosted by [Google Firebase](https://firebase.google.com/)
- Code revision via git (also familiar with SVN)
- Built in Node, using [Gatsby](https://www.gatsbyjs.com/)
- Started using theme: [gatsby-gitbook-starter](https://www.gatsbyjs.com/starters/hasura/gatsby-gitbook-starter)

Each page has a link to the MDX markup via the "Edit on GitHub" button to view the markup. 

## Development Cycle

```bash
gatsby devel # to start the devel / local development server
<edit files> # Re-renders at file changes
gatsby build # to build / render the files once done with edits
firebase deploy # Push files to Google Firebase (the host)

# Example firebase deploy

=== Deploying to 'lordachoo-c2966'...

i  deploying hosting
i  hosting[lordachoo-c2966]: beginning deploy...
i  hosting[lordachoo-c2966]: found 137 files in public
+  hosting[lordachoo-c2966]: file upload complete
i  hosting[lordachoo-c2966]: finalizing version...
+  hosting[lordachoo-c2966]: version finalized
i  hosting[lordachoo-c2966]: releasing new version...
+  hosting[lordachoo-c2966]: release complete

+  Deploy complete!

```

### Example MDX Formatting

Mainly for myself for mdx format/content writing.

#### Simple Markup

## Nested list

Note: Removed 24px bottom margin via `src/components/styles/Docs.js`

```css
# src/components/styles/Docs.js
export const StyledMainWrapper = styled.div`
  max-width: 1280px;
  color: ${props => props.theme.colors.text};

  ul,
  ol {
    -webkit-padding-start: 40px;
    -moz-padding-start: 40px;
    -o-padding-start: 40px;
    margin: 0px 0px;
    padding: 0px 0px 0px 2em;

    li {
      font-size: 14px;
      line-height: 1.8;
      font-weight: 400;
    }
  }
```

- Blah
  - Blah
<br />
* Blah
    * Blah
    * Blah

```mdx
- Blah
  - Blah
<br />  <-- Note <br /> isn't doing anything for spacing as it's still rendered into the ul/ol
* Blah
    * Blah
    * Blah
```

## Table

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | string | Name of the resource |
| `path` | string | Path to the resource |

<br />

```mdx

| Name | Type | Description |
| ---- | ---- | ----------- |
| `name` | string | Name of the resource |
| `path` | string | Path to the resource |

```

## Raw

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


## Nested list

- Blah
  - Blah


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