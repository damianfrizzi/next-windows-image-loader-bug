This example works fine on MacOS but not on Windows (tested on 10 and 11). 
We get the following error:

```
\next-windows-image-loader-bug\.next\dev\server\chunks\ssr\node_modules_e6f2a25f._.js: Invalid source map. Only conformant source maps can be used to find the original code. Cause: Error: sourceMapURL could not be parsed
 ⨯ Error: Image with src "https://static.theoneswelove.ch/assets/images/movies/The-Big-Lebowski-1998/still/The-Big-Lebowski-1998-still-1726071539543-0.jpg" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader
    at ignore-listed frames {
  digest: '2389313161'
}
```
